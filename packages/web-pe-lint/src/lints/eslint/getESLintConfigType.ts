import glob from 'glob';
import type { PKG } from '../../types';

/**
 * 获取 ESLint 配置类型
 * @param cwd
 * @param pkg
 * @returns pe-eslint-config/index
 * @returns pe-eslint-config/react
 * @returns pe-eslint-config/typescript/index
 * @returns pe-eslint-config/typescript/react
 */
export function getESLintConfigType(cwd: string, pkg: PKG): string {
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const dependencies = Object.keys(pkg.dependencies || {});
  const devDependencies = Object.keys(pkg.devDependencies || {});
  const allDependencies = [...dependencies, ...devDependencies];
  
  const language = tsFiles.length > 0 || allDependencies.some((name) => /^typescript(-|$)/.test(name)) ? 'typescript' : '';
  let dsl = '';

  // dsl判断
  if (reactFiles.length > 0 || allDependencies.some((name) => /^react(-|$)/.test(name))) {
    dsl = 'react';
  } else if (vueFiles.length > 0 || allDependencies.some((name) => /^vue(-|$)/.test(name))) {
    dsl = 'vue';
  } else if (allDependencies.some((name) => /^rax(-|$)/.test(name))) {
    dsl = 'rax';
  }

  // 构建配置路径
  let configPath = 'pe-eslint-config';
  if (language) {
    configPath += `/${language}`;
  }
  if (dsl) {
    configPath += `/${dsl}`;
  } else if (language) {
    configPath += '/index';
  }

  return configPath;
}
