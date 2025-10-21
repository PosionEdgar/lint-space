import fg from 'fast-glob';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types';
import { ESLINT_FILE_EXT, ESLINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatESLintResults } from './formatESLintResults';
import { getESLintConfig } from './getESLintConfig';


// 👇 强制从当前包解析 ESLint，防止引用到错误版本
const eslintModule = require(require.resolve('eslint', { paths: [__dirname] }));
const ESLint = eslintModule.ESLint || eslintModule.default?.ESLint || eslintModule.default;

export interface DoESLintOptions extends ScanOptions {
  pkg: PKG;
  config?: Config;
}

export async function doESLint(options: DoESLintOptions) {
  console.log('[DEBUG] eslint module path:', require.resolve('eslint', { paths: [__dirname] }));
  console.log('[DEBUG] eslint exports keys:', Object.keys(require('eslint')));
  console.log('[DEBUG] eslint version:', require('eslint/package.json').version);
  
  
  let files: string[];
  if (options.files) {
    files = options.files.filter((name) => ESLINT_FILE_EXT.includes(extname(name)));
  } else {
    files = await fg(`**/*.{${ESLINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`, {
      cwd: options.cwd,
      ignore: ESLINT_IGNORE_PATTERN,
    });
  }

  const eslint = new ESLint(getESLintConfig(options, options.pkg, options.config));
  const reports = await eslint.lintFiles(files);
  if (options.fix) {
    await ESLint.outputFixes(reports);
  }

  return formatESLintResults(reports, options.quiet, eslint);
}
