/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * Vue.js ESLint 规则配置，用于 Vue 项目的代码规范检查
 * @link https://eslint.vuejs.org/rules/
 */

// 导出 ESLint 配置对象
module.exports = {
    // 指定使用 Vue ESLint 解析器，用于解析 Vue 单文件组件
    parser: 'vue-eslint-parser',
    // 使用 Vue ESLint 插件
    plugins: ['vue'],
    // 定义具体的规则配置
    rules: {
      // 为 template 模板提供 eslint-disable 的能力，支持如下注释：
      // eslint-disable，eslint-enable，eslint-disable-line，eslint-disable-next-line
      'vue/comment-directive': 'error',
  
      // 这是对 JavaScript 规约 no-unused-vars 的补充，防止在 JSX 中使用的变量被错误地标记为未使用
      'vue/jsx-uses-vars': 'error',
  
      // 组件的 data 必须是一个函数，防止多个组件实例共享同一个数据对象
      'vue/no-shared-component-data': 'error',
  
      // Prop 定义类型应该是构造函数（如 String、Number、Boolean 等），而不是字符串
      'vue/require-prop-type-constructor': 'error',
  
      // Prop 的默认值必须匹配它的类型，确保类型一致性
      'vue/require-valid-default-prop': 'error',
  
      // 为 v-for 指令设置键值（key），提高列表渲染性能和避免渲染问题
      'vue/require-v-for-key': 'error',
  
      // 避免 v-if 和 v-for 用在一起，因为 v-for 的优先级高于 v-if，可能导致性能问题
      'vue/no-use-v-if-with-v-for': 'warn',
  
      // 计算属性禁止包含异步方法，因为计算属性应该是同步的
      'vue/no-async-in-computed-properties': 'error',
  
      // 禁止在对象字面量中出现重复的键，防止属性覆盖问题
      'vue/no-dupe-keys': 'error',
  
      // 禁止出现重复的属性，确保每个属性只定义一次
      'vue/no-duplicate-attributes': 'error',
  
      // 禁止出现 HTML 语法错误，遵循 HTML 解析规范
      // 配置了特定的错误检查选项，允许某些特定的语法模式
      // @link https://html.spec.whatwg.org/multipage/parsing.html#parse-errors
      'vue/no-parsing-error': ['error', {
        'x-invalid-end-tag': false, // 允许无效的结束标签
        'invalid-first-character-of-tag-name': false, // 允许标签名第一个字符无效
      }],
  
      // 禁止使用 Vue 中的关键字作为组件选项名，避免与 Vue 内部属性冲突
      'vue/no-reserved-keys': 'error',
  
      // 禁止在计算属性中对属性进行修改，计算属性应该是纯函数
      'vue/no-side-effects-in-computed-properties': 'error',
  
      // 禁止在 <template> 根元素上使用 key 属性，因为 template 元素不会被渲染
      'vue/no-template-key': 'warn',
  
      // 禁止在 <textarea> 元素中使用双花括号插值，应该使用 v-model
      'vue/no-textarea-mustache': 'error',
  
      // 禁止注册没有使用的组件，避免代码冗余和性能问题
      'vue/no-unused-components': 'warn',
  
      // 禁止在 v-for 等指令或者作用域中声明没有使用到的变量，保持代码整洁
      'vue/no-unused-vars': 'warn',
  
      // <component> 动态组件必须有 v-bind:is 属性，指定要渲染的组件
      'vue/require-component-is': 'warn',
  
      // render 函数必须有返回值，确保组件能正确渲染
      'vue/require-render-return': 'error',
  
      // 计算属性必须有返回值，确保计算属性能正确工作
      'vue/return-in-computed-property': 'error',
  
      // 强制在 v-on 指令使用 exact 修饰符，当同一个标签上有另一个带修饰符的 v-on 指令时
      // 避免事件处理器的意外触发
      'vue/use-v-on-exact': 'error',
  
      // 检查 Vue 指令的合法性，确保指令使用正确
      'vue/valid-template-root': 'error', // 检查模板根元素的合法性
      'vue/valid-v-bind': 'error', // 检查 v-bind 指令的合法性
      'vue/valid-v-cloak': 'error', // 检查 v-cloak 指令的合法性
      'vue/valid-v-else-if': 'error', // 检查 v-else-if 指令的合法性
      'vue/valid-v-else': 'error', // 检查 v-else 指令的合法性
      'vue/valid-v-for': 'error', // 检查 v-for 指令的合法性
      'vue/valid-v-html': 'error', // 检查 v-html 指令的合法性
      'vue/valid-v-if': 'error', // 检查 v-if 指令的合法性
      'vue/valid-v-model': 'error', // 检查 v-model 指令的合法性
      'vue/valid-v-on': 'error', // 检查 v-on 指令的合法性
      'vue/valid-v-once': 'error', // 检查 v-once 指令的合法性
      'vue/valid-v-pre': 'error', // 检查 v-pre 指令的合法性
      'vue/valid-v-show': 'error', // 检查 v-show 指令的合法性
    },
  };
  