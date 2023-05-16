// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { API } from './typings';

/** 发送验证码 POST /api/login/captcha */
export async function login(
  body: API.LoginParams
) {
  return request<API.LoginResult>('/wechat/login', {
    method: 'POST',
    data: {
      body,
    },
  });
}
