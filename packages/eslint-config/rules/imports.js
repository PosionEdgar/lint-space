/**
 * 本文件的规则由 eslint-plugin-import 提供
 * 与 eslint-plugin-import 推荐配置对齐
 * @see https://github.com/import-js/eslint-plugin-import
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
 */

module.exports = {
    plugins: [
        'import'
    ],
    settings: {
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$'
        ]
    },
    rules: {
        /**
         * Static analysis
         */

        // 确保导入的模块/文件能够被正确解析，防止引用不存在的模块
        'import/no-unresolved': 'error',

        // 确保命名导入与命名导出匹配，防止导入不存在的命名导出
        'import/named': 'error',

        // 确保默认导入与默认导出匹配，防止导入没有默认导出的模块
        'import/default': 'error',

        // 确保导入的命名空间包含被访问的属性，防止访问命名空间对象中不存在的属性
        'import/namespace': 'error',

        /**
         * Helpful warnings
         */

        // 禁止无效的导出，例如多个默认导出或重复的命名导出
        'import/export': 'error',

        // 导入文件时，禁止默认导入的名称与文件内的命名导出相同，避免命名冲突
        'import/no-named-as-default': 'error',

        // 访问默认导出对象的属性时，如果该文件有与属性同名的命名导出，则给出警告
        'import/no-named-as-default-member': 'warn',

        // 禁止使用已被标记为废弃的导入（通过 JSDoc @deprecated 标记）
        'import/no-deprecated': 'off',

        // 禁止使用项目中未在 package.json 中声明的依赖包
        'import/no-extraneous-dependencies': 'off',

        // 禁止可变的导出，确保导出的值在导出后不会被修改
        'import/no-mutable-exports': 'off',

        /**
         * Module systems
         */

        // 报告可能模糊的解析目标（脚本 vs 模块），确保文件被正确解析为模块
        'import/unambiguous': 'off',

        // 禁止使用 CommonJS 的 require() 语法，强制使用 ES6 模块语法
        'import/no-commonjs': 'off',

        // 禁止使用 AMD 模块的 require/define 语法，推荐使用 ES6 模块
        'import/no-amd': 'warn',

        // 禁止导入 Node.js 内置模块（如 fs、path 等），防止在浏览器环境中使用
        'import/no-nodejs-modules': 'off',

        /**
         * Style guide
         */

        // 要求所有 import 语句放在模块的最上方，在其他语句之前
        'import/first': 'error',

        // 禁止从同一个模块多次导入，要求合并为单个导入语句
        'import/no-duplicates': 'error',

        // 禁止命名空间导入（import * as），推荐使用具名导入
        'import/no-namespace': 'off',

        // 确保在导入路径中一致使用文件扩展名，避免不一致的导入方式
        'import/extensions': 'off',

        // 强制 import 语句按照指定顺序排列：内置模块、外部依赖、内部模块、父级目录、同级目录、索引文件
        'import/order': ['off', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
        }],

        // 要求在最后一个 import/require 语句后保留一个空行，提高代码可读性
        'import/newline-after-import': 'warn',

        // 当模块内只有一个导出时，推荐使用默认导出而不是命名导出
        'import/prefer-default-export': 'off',

        // 限制在指定文件夹中可以导入哪些文件，防止不合理的依赖关系
        'import/no-restricted-paths': 'off',

        // 禁止模块有过多的依赖项，防止模块过于复杂和耦合度过高
        'import/max-dependencies': ['off', { max: 10 }],

        // 禁止使用绝对路径导入模块，推荐使用相对路径或配置的路径别名
        'import/no-absolute-path': 'off',

        // 禁止使用表达式的 require() 调用，防止动态导入导致的问题
        'import/no-dynamic-require': 'off',

        // 防止导入其他模块的子模块，避免破坏模块的封装性
        'import/no-internal-modules': ['off', {
            allow: [],
        }],

        // 禁止在导入中使用 Webpack loader 语法，保持代码的通用性
        'import/no-webpack-loader-syntax': 'off',

        // 防止未赋值的导入，允许为了副作用而导入（如导入 CSS 文件或初始化脚本）
        'import/no-unassigned-import': 'off',

        // 禁止将默认导入重命名为具名导入，推荐直接使用默认导入语法
        'import/no-named-default': 'off',

        // 报告模块的默认导出是否为匿名，要求默认导出具有明确的名称
        'import/no-anonymous-default-export': ['off', {
            allowArray: false,           // 不允许匿名数组导出
            allowArrowFunction: false,   // 不允许匿名箭头函数导出
            allowAnonymousClass: false,  // 不允许匿名类导出
            allowAnonymousFunction: false, // 不允许匿名函数导出
            allowLiteral: false,         // 不允许字面量导出
            allowObject: false,          // 不允许匿名对象导出
        }],

        // 强制所有导出声明放在文件的底部，保持代码结构清晰
        'import/exports-last': 'off',

        // 推荐将具名导出分组在一个导出声明中，而不是分散在多个导出声明中
        'import/group-exports': 'off',

        // 禁止默认导出，强制使用具名导出（这是一个争议性规则，不推荐使用）
        'import/no-default-export': 'off',

        // 禁止模块导入自身，防止循环引用和无限递归
        'import/no-self-import': 'error',

        // 禁止产生循环引用，防止模块间的相互依赖导致的问题
        'import/no-cycle': ['error', { maxDepth: Infinity }],

        // 确保导入路径中没有无用的路径段（如 ././foo 应为 ./foo）
        'import/no-useless-path-segments': 'off',

        // 动态导入需要带有 webpackChunkName 的前导注释，用于代码分割优化
        'import/dynamic-import-chunkname': ['off', {
            importFunctions: [],                              // 需要注释的导入函数列表
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',      // webpack chunk 名称格式
        }],

        // 防止导入相对父级路径的文件夹，避免深层嵌套的导入路径
        'import/no-relative-parent-imports': 'off',
    },
};
