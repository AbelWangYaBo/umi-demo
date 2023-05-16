import request, { extend } from 'umi-request';
import { getBaseUrl } from '.';
import { userToken } from './storage';

// request.use(async (ctx, ))

request.interceptors.request.use((url, options) => {
  const baseUrl = getBaseUrl();
  console.log('options', options)
  if (userToken.get()) {
    options.headers = (options.headers || {}) as AnyObject;
    options.headers.authorization = `Bearer ${userToken.get()}`;
  }
  return {
    url: `${baseUrl}${url}`,
    options
  }
})

// extend({
//   prefix: '',
//   timeout: 3000,
//   headers: {
//     authorization: userToken.get() ? `Bearer ${userToken.get()}` : null
//   },
// })

// request.use((ctx, next) => {
//   ctx.req.options.headers.authorization = `Bearer ${userToken.get()}`;
// })

extend({
  prefix: '/',
  timeout: 1000,
  headers: {
    'authorization': userToken.get() ? `Bearer ${userToken.get()}` : '',
  },
});

const { get, post, put, delete: del } = request


export default request

export { get, post, put, del }
