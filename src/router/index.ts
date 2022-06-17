import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { ref } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const currentUser = ref<User | null>(null);

const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        currentUser.value = user;
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!(await getCurrentUser()) && requiresAuth) {
    next('/login');
  } else {
    next();
  }
});

export default router;
