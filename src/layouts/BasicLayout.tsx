import type {
    MenuDataItem,
    BasicLayoutProps as ProLayoutProps,
    Settings,
  } from '@ant-design/pro-layout';
  import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
  import React from 'react';
  import { Link,useIntl } from 'umi';
  import RightContent from '@/components/RightContent';
  import defaultSettings from '../../config/defaultSettings';

  export type BasicLayoutProps = {
    breadcrumbNameMap: Record<string, MenuDataItem>;
    route: ProLayoutProps['route'] & {
      authority: string[];
    };
    settings: Settings;
  } & ProLayoutProps;
  
  export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
    breadcrumbNameMap: Record<string, MenuDataItem>;
  };
  
  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
    menuList.map((item) => {
      return {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
    });
  
  const defaultFooterDom = (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} beautinow`}
      links={[]}
    />
  );
  
  const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
    const {
      children,
      location = {
        pathname: '/',
      },
    } = props;
  
    const { formatMessage } = useIntl();
  
    return (
      <ProLayout
        logo={defaultSettings.logo}
        formatMessage={formatMessage}
        {...props}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (
            menuItemProps.isUrl ||
            !menuItemProps.path ||
            location.pathname === menuItemProps.path
          ) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({ id: 'menu.home' }),
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        footerRender={() => defaultFooterDom}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
      >
        {children}
      </ProLayout>
    );
  };
  
  export default BasicLayout;