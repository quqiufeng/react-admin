import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';
import language from './locales/zh-CN';
import { useIntl } from 'umi';

const Status400: React.FC = () => {
  const intl = useIntl();
 return (
  <Result
    status="404"
    title="404"
    style={{
      background: 'none',
    }}
    subTitle={intl.formatMessage({
      id: 'exceptionand400.description.400',
      defaultMessage: 'Sorry, the server is not found.',
    })}
    extra={
      <Link to="/">
        <Button type="primary">
        {
          intl.formatMessage({
            id: 'exceptionand400.exception.back',
            defaultMessage: 'Back Home',
          })
        }
        </Button>
      </Link>
    }
  />
);
  }

export default Status400;