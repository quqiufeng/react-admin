import { Effect } from 'umi';
import { message } from 'antd';
import { fakeSubmitForm } from './service';

export interface ModelType {
  namespace: string;
  state: {};
  effects: {//处理异步逻辑
    submitRegularForm: Effect;
  };
}
const Model: ModelType = {
  namespace: 'formAndbasicForm',

  state: {},

  //payload 调用函数传递的参数
  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
  },
};

export default Model;
