import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';
import language from './locales/zh-CN';
import { useIntl } from 'umi';

const Status500: React.FC = () => {
  const intl = useIntl();
  return  (
  <Result
    status="500"
    title="500"
    style={{
      background: 'none',
    }}
    subTitle={intl.formatMessage({
      id: 'exceptionand500.description.500',
      defaultMessage: 'Sorry, the server is reporting an error.',
    })}
    extra={
      <Link to="/">
        <Button type="primary">{
          intl.formatMessage({
            id: 'exceptionand500.exception.back',
            defaultMessage: 'Back Home',
          })
        }</Button>
      </Link>
    }
  />
  )
}
export default Status500;
