import { history } from 'umi';
import request from './utils/request';

console.log('process.env.BASE_URL', process.env.BASE_URL);

export async function render(oldRender) {
  console.log('render');

  request('/login');

  if (!localStorage.getItem('TOKEN')) {
    history.push('/login');
    oldRender();
  } else {
    oldRender();
  }
}

export async function getInitialState() {
  console.log('getInitialState');
}
