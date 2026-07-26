import type { ThemeConfig } from 'antd';

/**
 * Токены Ant Design синхронизированы с CSS-переменными из `styles/tokens.css`,
 * чтобы кнопки и компоненты antd не выбивались из морской палитры гида.
 */
export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0f6f96',
    colorLink: '#0f6f96',
    colorText: '#152234',
    colorTextSecondary: '#516175',
    colorBorder: '#dfe6ee',
    colorBgLayout: '#f4f7fa',
    borderRadius: 12,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: 15,
  },
  components: {
    Drawer: { paddingLG: 20 },
  },
};

export default antdTheme;
