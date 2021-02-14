import { Tag, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import NoticeIcon from '@/components/NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { message } from 'antd';


export type SiderTheme = 'light' | 'dark';
const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  //获取currentUser currentMenu等初始化变量
  const { initialState } = useModel('@@initialState');
  if (!initialState || !initialState.settings) {
    return null;
  }
  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="beautinow"
        options={[
          { label: <a href="https://www.beautinow.com">beautinow</a>, value: 'beautinow' },
        ]}
        onSearch={value => {
           console.log('input', value);
        }}
      />
      <NoticeIcon />
     <Avatar menu />
   </Space>
  );
};
export default GlobalHeaderRight;
