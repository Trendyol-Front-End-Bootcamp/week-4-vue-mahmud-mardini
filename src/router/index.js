import Vue from 'vue';
import VueRouter from 'vue-router';
import Starships from '@/views/Starships.vue';
import Starship from '@/views/Starship.vue';

Vue.use(VueRouter);

const props = (route) => ({
  page: Number(route.query.page),
  search: route.query.search,
  searchPage: Number(route.query.searchPage)
});

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Starships',
      query: {
        page: 1
      }
    }
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships,
    props
  },
  {
    path: '/starship/:id',
    name: 'Starship',
    component: Starship,
    props: true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
