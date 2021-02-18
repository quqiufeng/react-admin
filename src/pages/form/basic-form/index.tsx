import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, Dispatch, FormattedMessage, useIntl} from 'umi';
import React, { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface BasicFormProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const BasicForm: FC<BasicFormProps> = (props) => {
  const intl = useIntl();
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    console.log(values);
    const { dispatch } = props;
    dispatch({
      type: 'formAndbasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageContainer content={<FormattedMessage id="formandbasic-form.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.title.label" />}
            name="title"
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'formandbasic-form.title.required' }),
              },
            ]}
          >
            <Input placeholder={intl.formatMessage({ id: 'formandbasic-form.title.placeholder' })} />
          </FormItem>
          <FormItem
            name="date"
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.date.label" />}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'formandbasic-form.date.required' }),
              },
            ]}
          >
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                intl.formatMessage({ id: 'formandbasic-form.placeholder.start' }),
                intl.formatMessage({ id: 'formandbasic-form.placeholder.end' }),
              ]}
            />
          </FormItem>
          <FormItem
             name="goal"
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.goal.label" />}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'formandbasic-form.goal.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={intl.formatMessage({ id: 'formandbasic-form.goal.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            name="standard"
            label={<FormattedMessage id="formandbasic-form.standard.label" />}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'formandbasic-form.standard.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={intl.formatMessage({ id: 'formandbasic-form.standard.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            name="tooltip"
            label={
              <span>
                <FormattedMessage id="formandbasic-form.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                  <Tooltip title={<FormattedMessage id="formandbasic-form.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip>
                </em>
              </span>
            }
          >
            <Input placeholder={intl.formatMessage({ id: 'formandbasic-form.client.placeholder' })} />
          </FormItem>
          <FormItem
            name="invite"
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic-form.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                </em>
              </span>
            }
          >
            <Input placeholder={intl.formatMessage({ id: 'formandbasic-form.invites.placeholder' })} />
          </FormItem>
          <FormItem
            name="weight"
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic-form.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic-form.form.optional" />
                </em>
              </span>
            }
          >
            <InputNumber
              placeholder={intl.formatMessage({ id: 'formandbasic-form.weight.placeholder' })}
              min={0}
              max={100}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic-form.public.label" />}
            help={<FormattedMessage id="formandbasic-form.label.help" />}
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="formandbasic-form.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="formandbasic-form.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="formandbasic-form.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <Select
                  mode="multiple"
                  placeholder={intl.formatMessage({ id: 'formandbasic-form.publicUsers.placeholder' })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="formandbasic-form.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="formandbasic-form.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="formandbasic-form.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="formandbasic-form.form.submit" />
            </Button>
            <Button style={{ marginLeft: 8 }}>
              <FormattedMessage id="formandbasic-form.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formAndbasicForm/submitRegularForm'],
}))(BasicForm);
