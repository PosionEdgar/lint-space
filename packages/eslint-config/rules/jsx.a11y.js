/**
 * 本文件的规则由 eslint-plugin-jsx-a11y 提供
 * JSX 可访问性（Accessibility）规则配置
 * 用于确保 React JSX 代码符合 Web 可访问性标准
 * @link https://github.com/evcohen/eslint-plugin-jsx-a11y
 */

// 导出 ESLint 配置对象
module.exports = {
    // 指定使用的插件列表
    plugins: ['jsx-a11y'], // 使用 jsx-a11y 插件来检查 JSX 可访问性
    // 定义具体的规则配置
    rules: {
      // 确保图片元素有 alt 属性，为屏幕阅读器提供替代文本
      'jsx-a11y/alt-text': 'warn',
      
      // 检查图片的 alt 属性是否冗余（如图片文件名等）
      'jsx-a11y/img-redundant-alt': 'warn',
      
      // 确保链接元素包含可访问的内容（文本或屏幕阅读器可识别的元素）
      'jsx-a11y/anchor-has-content': 'warn',
      
      // 验证 ARIA 属性名称是否正确
      'jsx-a11y/aria-props': 'warn',
      
      // 验证 ARIA 属性值是否符合规范
      'jsx-a11y/aria-proptypes': 'warn',
      
      // 禁止在不支持 ARIA 的元素上使用 ARIA 属性
      'jsx-a11y/aria-unsupported-elements': 'warn',
      
      // 验证 ARIA 角色是否正确，ignoreNonDOM 为 true 时不检查用户自定义元素
      'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
      
      // 确保具有 ARIA 角色的元素包含必需的 ARIA 属性
      'jsx-a11y/role-has-required-aria-props': 'warn',
      
      // 确保元素支持其 ARIA 属性
      'jsx-a11y/role-supports-aria-props': 'warn',
      
      // 确保 iframe 元素有 title 属性，提供框架内容的描述
      'jsx-a11y/iframe-has-title': 'warn',
      
      // 禁止使用 accessKey 属性，避免与屏幕阅读器快捷键冲突
      'jsx-a11y/no-access-key': 'warn',
      
      // 禁止使用分散注意力的元素（如 marquee 和 blink）
      'jsx-a11y/no-distracting-elements': 'warn',
      
      // 确保 scope 属性仅在 th 元素上使用
      'jsx-a11y/scope': 'warn',
    },
  };
  