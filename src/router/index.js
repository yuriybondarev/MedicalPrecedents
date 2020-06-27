import Vue from 'vue';
import $store from '@/store';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Медицинская система' },
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    meta: { title: 'Медицинская система - Добавить' },
    component: () => import('../views/Add')
  },
  {
    path: '/find',
    name: 'Find',
    meta: { title: 'Медицинская система - Поиск' },
    component: () => import('../views/Find')
  },
  {
    path: '/console',
    name: 'Console',
    meta: { title: 'Медицинская система - Консоль запросов' },
    component: () => import('../views/Console')
  },
  {
    path: '/excel',
    name: 'Excel',
    meta: { title: 'Медицинская система - Excel' },
    component: () => import('../views/Excel')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (from.name == 'Excel') {
    $store.commit('CLEAR_EXCEL');
  }
  
  next();
})

export default router;