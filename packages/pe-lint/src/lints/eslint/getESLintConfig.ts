import { ESLint } from "eslint";
import type { Config, PKG, ScanOptions } from "../../types";
import { ESLINT_FILE_EXT } from "../../utils/constants";
import { getESLintConfigType } from './getESLintConfigType';
import { glob } from "glob";
import path from "path";
import fs from 'fs-extra';

// 获取eslint 配置
export function getESLintConfig(opts: ScanOptions, pkg: PKG, config: Config): ESLint.Options {
    const { cwd, fix, ignore } = opts;
    const lintConfig: ESLint.Options = {
        cwd,
        fix,
        ignore,
        extensions: ESLINT_FILE_EXT,
        errorOnUnmatchedPattern: false
    }

    if (config.eslintOptions) {
        // 如果用户传入了 eslintOptions, 就用用户的
        Object.assign(lintConfig, config.eslintOptions)
    }  else {
        // 根据扫描目录下有无lintrc文件，没有则用 默认的lint配置
        const lintConfigFiles = glob.sync('.eslintrc?(.@(js|yaml|yml|json))', { cwd });
        if (lintConfigFiles.length === 0 && !pkg.eslintConfig) {
            lintConfig.resolvePluginsRelativeTo = path.resolve(__dirname, '../../');
            lintConfig.useEslintrc = false;
            lintConfig.baseConfig = {
                extends: [
                    getESLintConfigType(cwd, pkg),
                    // ESLint 不管格式问题，直接使用 prettier 进行格式化
                    ...(config.enablePrettier ? ['prettier'] : [])
                ]
            }
        }
        // 根据扫描目录下有无 lintignore 文件，若无则使用默认的 ignore 配置
        const lintIgnoreFile = path.resolve(cwd, '.eslintignore');
        if (!fs.existsSync(lintIgnoreFile) && pkg.eslintIgnore) {
            lintConfig.ignorePath = path.resolve(__dirname, '../config/_eslintignore.ejs');
        }
    }
    return lintConfig;
}