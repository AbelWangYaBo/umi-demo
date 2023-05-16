export default [
  { path: '/analyze', component: '@/pages/analyze/index' },
  { path: '/search', component: '@/pages/search/index' },
  {
    path: '/dashboard',
    component: '@/layouts/vertical-menu/index',
    routes: [
      { path: '/dashboard', component: 'dashboard', title: 'Dashboard' },
    ],
  },
  {
    path: '/login',
    component: '@/layouts/index',
    routes: [
      { path: '/login', component: 'login/login', title: 'Login' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/code/index',
    routes: [
      { path: '/', component: 'dashboard', title: 'Index' },
    ],
  },
]
