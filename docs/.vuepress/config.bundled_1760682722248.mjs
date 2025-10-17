// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from "vuepress/config";
var config_default = defineConfig4CustomTheme({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Lint Space",
      description: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
    }
  },
  base: "/fe-spec/",
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/index.md" },
      {
        text: "\u7F16\u7801\u89C4\u8303",
        items: [
          { text: "HTML \u7F16\u7801\u89C4\u8303", link: "/coding/html.md" },
          { text: "CSS \u7F16\u7801\u89C4\u8303", link: "/coding/css.md" },
          { text: "JavaScript \u7F16\u7801\u89C4\u8303", link: "/coding/javascript.md" },
          { text: "Node \u7F16\u7801\u89C4\u8303", link: "/coding/node.md" },
          { text: "Typescript \u7F16\u7801\u89C4\u8303", link: "/coding/typescript.md" }
        ]
      },
      {
        text: "\u5DE5\u7A0B\u89C4\u8303",
        items: [
          { text: "Git \u89C4\u8303", link: "/engineering/git.md" },
          { text: "\u6587\u6863\u89C4\u8303", link: "/engineering/doc.md" },
          { text: "CHANGELOG \u89C4\u8303", link: "/engineering/changelog.md" }
        ]
      }
    ],
    sidebar: [
      {
        title: "\u7F16\u7801\u89C4\u8303",
        children: [
          {
            title: "HTML \u7F16\u7801\u89C4\u8303",
            path: "/coding/html.md"
          },
          {
            title: "CSS \u7F16\u7801\u89C4\u8303",
            path: "/coding/css.md"
          },
          {
            title: "JavaScript \u7F16\u7801\u89C4\u8303",
            path: "/coding/javascript.md"
          },
          {
            title: "Node \u7F16\u7801\u89C4\u8303",
            path: "/coding/node.md"
          },
          {
            title: "Typescript \u7F16\u7801\u89C4\u8303",
            path: "/coding/typescript.md"
          }
        ]
      },
      {
        title: "\u5DE5\u7A0B\u89C4\u8303",
        children: [
          {
            title: "Git \u89C4\u8303",
            path: "/engineering/git.md"
          },
          {
            title: "\u6587\u6863\u89C4\u8303",
            path: "/engineering/doc.md"
          },
          {
            title: "CHANGELOG \u89C4\u8303",
            path: "/engineering/changelog.md"
          }
        ]
      }
    ],
    logo: "/img/logo.png",
    repo: "encode-studio-fe/fe-spec",
    searchMaxSuggestions: 10,
    docsDir: "docs",
    footer: {
      createYear: 2023,
      copyrightInfo: 'encode studio | <a href="https://github.com/encode-studio-fe/fe-spec" target="_blank">github</a>'
    },
    extendFrontmatter: {}
  },
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316"
      }
    ]
  ],
  plugins: [
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ]
  ],
  extraWatchFiles: [".vuepress/config.ts"]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUsIFVzZXJQbHVnaW5zIH0gZnJvbSAndnVlcHJlc3MvY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lKHtcblx0bG9jYWxlczoge1xuXHRcdCcvJzoge1xuXHRcdFx0bGFuZzogJ3poLUNOJyxcblx0XHRcdHRpdGxlOiAnTGludCBTcGFjZScsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1x1NTI0RFx1N0FFRlx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwM1x1NURFNVx1N0EwQlx1NTMxNicsXG5cdFx0fSxcblx0fSxcblx0YmFzZTogJy9mZS1zcGVjLycsXG5cdHRoZW1lQ29uZmlnOiB7XG5cdFx0bmF2OiBbXG5cdFx0XHR7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnL2luZGV4Lm1kJyB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAnXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcblx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHR7IHRleHQ6ICdIVE1MIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2h0bWwubWQnIH0sXG5cdFx0XHRcdFx0eyB0ZXh0OiAnQ1NTIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2Nzcy5tZCcgfSxcblx0XHRcdFx0XHR7IHRleHQ6ICdKYXZhU2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2phdmFzY3JpcHQubWQnIH0sXG5cdFx0XHRcdFx0eyB0ZXh0OiAnTm9kZSBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy9ub2RlLm1kJyB9LFxuXHRcdFx0XHRcdHsgdGV4dDogJ1R5cGVzY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJywgbGluazogJy9jb2RpbmcvdHlwZXNjcmlwdC5tZCcgfSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICdcdTVERTVcdTdBMEJcdTg5QzRcdTgzMDMnLFxuXHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdHsgdGV4dDogJ0dpdCBcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2dpdC5tZCcgfSxcblx0XHRcdFx0XHR7IHRleHQ6ICdcdTY1ODdcdTY4NjNcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2VuZ2luZWVyaW5nL2RvYy5tZCcgfSxcblx0XHRcdFx0XHR7IHRleHQ6ICdDSEFOR0VMT0cgXHU4OUM0XHU4MzAzJywgbGluazogJy9lbmdpbmVlcmluZy9jaGFuZ2Vsb2cubWQnIH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0c2lkZWJhcjogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogJ1x1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdIVE1MIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdFx0XHRwYXRoOiAnL2NvZGluZy9odG1sLm1kJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQ1NTIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdFx0XHRwYXRoOiAnL2NvZGluZy9jc3MubWQnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdKYXZhU2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdFx0XHRwYXRoOiAnL2NvZGluZy9qYXZhc2NyaXB0Lm1kJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnTm9kZSBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxuXHRcdFx0XHRcdFx0cGF0aDogJy9jb2Rpbmcvbm9kZS5tZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ1R5cGVzY3JpcHQgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICcvY29kaW5nL3R5cGVzY3JpcHQubWQnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogJ1x1NURFNVx1N0EwQlx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdHaXQgXHU4OUM0XHU4MzAzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICcvZW5naW5lZXJpbmcvZ2l0Lm1kJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnXHU2NTg3XHU2ODYzXHU4OUM0XHU4MzAzJyxcblx0XHRcdFx0XHRcdHBhdGg6ICcvZW5naW5lZXJpbmcvZG9jLm1kJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnQ0hBTkdFTE9HIFx1ODlDNFx1ODMwMycsXG5cdFx0XHRcdFx0XHRwYXRoOiAnL2VuZ2luZWVyaW5nL2NoYW5nZWxvZy5tZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRsb2dvOiAnL2ltZy9sb2dvLnBuZycsXG5cdFx0cmVwbzogJ2VuY29kZS1zdHVkaW8tZmUvZmUtc3BlYycsXG5cdFx0c2VhcmNoTWF4U3VnZ2VzdGlvbnM6IDEwLFxuXHRcdGRvY3NEaXI6ICdkb2NzJyxcblx0XHRmb290ZXI6IHtcblx0XHRcdGNyZWF0ZVllYXI6IDIwMjMsXG5cdFx0XHRjb3B5cmlnaHRJbmZvOlxuXHRcdFx0XHQnZW5jb2RlIHN0dWRpbyB8IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZW5jb2RlLXN0dWRpby1mZS9mZS1zcGVjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Z2l0aHViPC9hPicsXG5cdFx0fSxcblxuXHRcdGV4dGVuZEZyb250bWF0dGVyOiB7XG5cdFx0XHRcblx0XHR9LFxuXHR9LFxuXG5cdGhlYWQ6IFtcblx0XHRbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltZy9sb2dvLnBuZycgfV0sXG5cdFx0W1xuXHRcdFx0J21ldGEnLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAna2V5d29yZHMnLFxuXHRcdFx0XHRjb250ZW50OiAnXHU1MjREXHU3QUVGXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzXHU1REU1XHU3QTBCXHU1MzE2Jyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XSxcblxuXHRwbHVnaW5zOiA8VXNlclBsdWdpbnM+W1xuXHRcdFtcblx0XHRcdCdvbmUtY2xpY2stY29weScsXG5cdFx0XHR7XG5cdFx0XHRcdGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLFxuXHRcdFx0XHRjb3B5TWVzc2FnZTogJ1x1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RicsXG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdFx0XHRzaG93SW5Nb2JpbGU6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRdLFxuXG5cdFx0W1xuXHRcdFx0J3Z1ZXByZXNzLXBsdWdpbi16b29taW5nJyxcblx0XHRcdHtcblx0XHRcdFx0c2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLFxuXHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0YmdDb2xvcjogJ3JnYmEoMCwwLDAsMC42KScsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdF0sXG5cdGV4dHJhV2F0Y2hGaWxlczogWycudnVlcHJlc3MvY29uZmln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
