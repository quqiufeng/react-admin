import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  layout: 'side',
  // 拂晓蓝
  primaryColor: '#1890ff',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  logo: 'https://www.beautinow.com/assets/admin/images/admin_login_logo.png',
  iconfontUrl: '',
};

export default Settings;
