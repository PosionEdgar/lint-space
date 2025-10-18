module.exports = {
    defaultSeverity: 'warning',
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        // 禁用对未知 at-rule 的检测
        'at-rule-no-unknown': true,
        // 检测未知的 SCSS at-rule（如 @mixin、@include 等），但不检测未知的 CSS at-rule。
        'scss/at-rule-no-unknown': true,
        // 允许空的 CSS 块
        'block-no-empty': true,
        // 检测无效的十六进制颜色值
        'color-no-invalid-hex': true,
        //  禁止空的注释
        'comment-no-empty': true,
        //  禁止重复的属性声明
        'declaration-block-no-duplicate-properties': [true, {
            ignore: 'consecutive-duplicates-with-different-values'
        }],
        // 禁止简写属性覆盖详细属性
        'declaration-block-no-shorthand-property-overrides': true,
        // 禁止重复的字体名称
        'font-family-no-duplicate-names': true,
        //  calc() 函数中的操作符必须有空格
        'function-calc-no-unspaced-operator': true,
        // 禁止非标准的线性渐变方向
        'function-linear-gradient-no-nonstandard-direction': true,
        // 禁止在关键帧声明中使用 !important
        'keyframe-declaration-no-important': true,
        // 检测未知的媒体查询特性名称
        'media-feature-name-no-unknown': true,
        // 允许特异性降序（禁用此规则）
        'no-descending-specificity': null,
        // 禁止重复的 @import 规则
        'no-duplicate-at-import-rules': true,
        // 禁止重复的选择器
        'no-duplicate-selectors': true,
        // 允许空的样式文件
        'no-empty-source': true,
        // 禁止多余的分号
        'no-extra-semicolons': true,
        // 禁止无效的双斜杠注释
        'no-invalid-double-slash-comments': true,
        //  检测未知的 CSS 属性
        'property-no-unknown': true,
        // 检测未知的伪类选择器
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local', 'export']
            }
        ],
        // 检测未知的伪元素选择器
        'selector-pseudo-element-no-unknown': true,
        //  禁止字符串中的换行符
        'string-no-newline': true,
        // 检测未知的单位
        'unit-no-unknown': [true, {
            ignoreUnits: ['rpx']
        }],
        // 使用 2 个空格缩进
        indentation: 2,
        // 多行块的结束大括号前必须换行
        'block-closing-brace-newline-before': 'always-multi-line',
        // 单行块的结束大括号前必须有空格
        'block-closing-brace-space-before': 'always-single-line',
        // 多行块的开头大括号后必须换行
        'block-opening-brace-newline-after': 'always-multi-line',
        // 开头大括号前必须有空格
        'block-opening-brace-space-before': 'always',
        // 单行块的开头大括号后必须有空格
        'block-opening-brace-space-after': 'always-single-line',
        // 十六进制颜色值使用小写
        'color-named': 'lower',
        // 使用短的十六进制颜色值
        'color-hex-length': 'short',
        // 注释内部必须有空格
        'comment-whitespace-inside': 'always',
        // 冒号前不能有空格
        'declaration-colon-space-before': 'never',
        // 冒号后必须有空格
        'declaration-colon-space-after': 'always',
        // 单行块最多只能有一个声明
        'declaration-block-single-line-max-declarations': 1,
        // 声明块末尾必须有分号
        'declaration-block-trailing-semicolon': [
        'always',
            {
                severity: 'error',
            },
        ],
        // 零值长度不需要单位
        'length-zero-no-unit': [
            true,
            {
                ignore: ['custom-properties'],
            },
        ],
        // 每行最大长度为 100 个字符
        'max-line-length': 100,
        // 禁止使用 ID 选择器
        'selector-max-id': 0,
        // 值列表中逗号后必须有空格
        'value-list-comma-space-after': 'always-single-line',

        /**
         * stylelint-scss rules
         * @link https://www.npmjs.com/package/stylelint-scss
         */
        // SCSS 双斜杠注释内部必须有空格
        'scss/double-slash-comment-whitespace-inside': 'always',
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
