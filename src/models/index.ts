import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
console.log('IndexModelState');
export interface IndexModelState {
  name: string;
}

const getName = async (): Promise<{ name: string }> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: Math.random().toString(16) });
    }, 1500);
  });
};

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
      const myuser = yield call(getName, {});
      yield put({
        type: 'save',
        payload: {
          name: myuser.name,
        },
      });
      console.log('query', payload, call, put);
    },
  },
  reducers: {
    save(state, action) {
      console.log('save', action);
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('setup');
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default IndexModel;
