import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import glob from 'glob';
import ejs from 'ejs';
import {
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_EXT,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWN_LINT_IGNORE_PATTERN,
} from './constants';

/**
 * vscode 配置合并
 * @param filepath
 * @param content
 */
const mergeVSCodeConfig = (filepath: string, content: string) => {
  // 不需要 merge
  if (!fs.existsSync(filepath)) return content;

  try {
    const targetData = fs.readJSONSync(filepath);
    const sourceData = JSON.parse(content);
    return JSON.stringify(
      _.mergeWith(targetData, sourceData, (target, source) => {
        if (Array.isArray(target) && Array.isArray(source)) {
          return [...new Set(source.concat(target))];
        }
      }),
      null,
      2,
    );
  } catch (e) {
    return '';
  }
};

/**
 * 实例化模板
 * @param cwd
 * @param data
 * @param vscode
 */
export default (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  const templatePath = path.resolve(__dirname, '../config');
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath });
  for (const name of templates) {
    const filepath = path.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.'));
    // 预计算 eslint 扩展配置的绝对路径，避免在 EJS 模板中直接使用 require
    let eslintExtendResolved = '';
    try {
      const eslintType: string = data.eslintType || 'index';
      const baseConfigName = 'pe-eslint-config';
      const configEntry = eslintType === 'index' ? baseConfigName : `${baseConfigName}/${eslintType}`;
      // 尝试从目标项目目录进行解析，保证以项目为基准解析依赖
      // 当解析失败时，回退为包名字符串，保持最小可用
      // @ts-ignore Node.js require.resolve 第二参数在运行时可用
      eslintExtendResolved = require.resolve(configEntry, { paths: [cwd] });
    } catch (e) {
      // fallback: 仍返回包名，交由 ESLint 自己解析
      const eslintType: string = data.eslintType || 'index';
      const baseConfigName = 'pe-eslint-config';
      eslintExtendResolved = eslintType === 'index' ? baseConfigName : `${baseConfigName}/${eslintType}`;
    }

    let content = ejs.render(fs.readFileSync(path.resolve(templatePath, name), 'utf8'), {
      eslintIgnores: ESLINT_IGNORE_PATTERN,
      stylelintExt: STYLELINT_FILE_EXT,
      stylelintIgnores: STYLELINT_IGNORE_PATTERN,
      markdownLintIgnores: MARKDOWN_LINT_IGNORE_PATTERN,
      eslintExtendResolved,
      ...data,
    });

    // 合并 vscode config
    if (/^_vscode/.test(name)) {
      content = mergeVSCodeConfig(filepath, content);
    }

    // 跳过空文件
    if (!content.trim()) continue;

    fs.outputFileSync(filepath, content, 'utf8');
  }
};
