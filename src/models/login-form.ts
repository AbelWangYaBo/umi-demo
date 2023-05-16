import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
export interface LoginFormModelState {
  userCode: string;
  password: string;
}

export interface LoginFormModelType {
  namespace: 'loginForm';
  state: LoginFormModelState;
  //   effects: {
  //     query: Effect;
  //   };
  reducers: {
    save: Reducer<LoginFormModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  //   subscriptions: { setup: Subscription };
}

const LoginFormModel: LoginFormModelType = {
  namespace: 'loginForm',

  state: {
    userCode: '',
    password: '',
  },
  reducers: {
    save(state, action) {
      console.log('save', action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default LoginFormModel;
