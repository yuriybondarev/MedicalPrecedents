import Vue from 'vue';
import $store from '@/store';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Главная' },
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    meta: { title: 'Добавить прецедент' },
    component: () => import('../views/Add.vue')
  },
  {
    path: '/find',
    name: 'Find',
    meta: { title: 'Найти прецеденты' },
    component: () => import('../views/Find.vue')
  },
  {
    path: '/console',
    name: 'Console',
    meta: { title: 'Консоль запросов' },
    component: () => import('../views/Console.vue')
  },
  {
    path: '/excel',
    name: 'Excel',
    meta: { title: 'Отправить Excel-файл' },
    component: () => import('../views/Excel.vue')
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