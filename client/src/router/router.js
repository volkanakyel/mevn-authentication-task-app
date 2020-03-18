import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '../views/Tasks.vue'
import LoginForm from '../components/connection/LoginForm'
import RegisterForm from '../components/connection/RegisterForm'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      component: Tasks,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/register',
      component: RegisterForm
    },  
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;