import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="beautinow"
    links={[
     {
        key: 'beautinow',
        title: '',
        href: 'https://www.beautinow.com',
        blankTarget: true,
      },
    ]}
  />
);
