import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import AppRoutes from './router/AppRoutes';
import antdTheme from './theme/antdTheme';

function App() {
  return (
    <ConfigProvider theme={antdTheme} locale={ruRU}>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
