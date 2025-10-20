import fs from 'fs-extra';
import path from 'path';
import { doEslint, doPrettier, doStylelint, doMarkdownlint } from '../lints'

import { Config, PKG, ScanOptions, ScanReport, ScanResult } from "../types";
import { PKG_NAME } from '../utils/constants';

export default async (options: ScanOptions): Promise<ScanReport> => {
    const { cwd, fix, outputReport, config: scanConfig } = options;

    const readConfigFile = (pth: string): any => {
        const localPath = path.resolve(cwd, pth);
        return fs.existsSync(localPath) ? require(localPath) : {}
    }

    const pkg: PKG = readConfigFile('package.json');
    const config: Config = scanConfig || readConfigFile(`${PKG_NAME}.config.js`);
    const runErrors: Error[] = [];
    let results: ScanResult[] = [];


    // prettier
    if (fix && config.enablePrettier) {
        await doPrettier(options)
    }
    // eslint
    if (!config.enableESLint) {
        try {
            const eslintResult = await doEslint({ ...options, pkg, config })
            results = results.concat(eslintResult)
        } catch (e) {
            runErrors.push(e)
        }
    }
    // stylelint
    if (!config.enableStylelint) {
        try {
            const stylelintResult = await doStylelint({ ...options, pkg, config })
            results.concat(stylelintResult)
        } catch (e) {
            runErrors.push(e)
        }
    }
    // markdownlint
    if (!config.enableMarkdownlint) {
        try {
            const markdownlintResult = await doMarkdownlint({ ...options, pkg, config })
            results.concat(markdownlintResult)
        } catch (e) {
            runErrors.push(e)
        }
    }

    // 生成测试报告
    if (outputReport) {
        const reportPath = path.resolve(process.cwd(), `./${PKG_NAME}-report.json`)
        fs.outputFile(reportPath, JSON.stringify(results, null, 2), () => {})
    }

    return {
        results,
        errorCount: results.reduce((count, { errorCount }) => count + errorCount, 0),
        warningCount: results.reduce((count, { warningCount }) => count + warningCount, 0),
        runErrors
    }
}