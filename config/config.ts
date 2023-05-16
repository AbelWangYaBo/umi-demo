import { defineConfig } from 'umi';
import routes from './routes';

console.log('config', routes);
export default defineConfig({
  routes: routes,
  fastRefresh: {}
});
