import type { Preview } from "@storybook/react";
import '../apps/www/styles/globals.css'; //

// 添加全局装饰器，确保应用的上下文、主题等在所有 Story 中可用
import { ThemeProvider } from "@/components/ui/theme-provider";

const preview: Preview = {
parameters: {
controls: {
matchers: {
color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" }, // 用于匹配并自动记录事件处理函数
    backgrounds: {
      default: 'light', // 默认背景
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  // 使用装饰器全局应用 ThemeProvider 或其他 Provider
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />  {/* 确保这里 JSX 语法没有问题 */}
      </ThemeProvider>
    ),
  ],
};

export default preview;
