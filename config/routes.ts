export default [
  { path: '/analyze', component: '@/pages/analyze/index' },
  { path: '/search', component: '@/pages/search/index' },
  {
    path: '/vertical-menus',
    component: '@/layouts/vertical-menu/index',
    routes: [
      { path: '/vertical-menus', component: 'dashboard', title: 'Dashboard' },
    ],
  },
  {
    path: '/inline-menus',
    component: '@/layouts/inline-menu/index',
    routes: [
      { path: '/inline-menus', component: 'dashboard', title: 'Dashboard' },
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
    // horizontal Menu
    path: '/',
    component: '@/layouts/horizontal-menu/index',
    routes: [
      { path: '/', component: 'dashboard', title: 'Index' },
      { path: '/horizontal-menus', component: 'dashboard', title: 'Index' },
    ],
  },
]
