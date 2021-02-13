import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';
import language from './locales/zh-CN';
import { useIntl } from 'umi'

const Status403: React.FC = () => {
    const intl = useIntl();
   return (
  <Result
    status="403"
    title="403"
    style={{
      background: 'none',
    }}
    subTitle={intl.formatMessage({
      id: 'exceptionand403.description.403',
      defaultMessage: 'Sorry, the server is not allow to access.',
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

export default Status403;
