import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { ref } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Groups from '../views/Groups.vue';

declare module 'vue-router' {
  interface RouteMeta {
    guard: 'auth' | 'guest';
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      guard: 'guest',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guard: 'guest',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      guard: 'auth',
    },
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups,
    meta: {
      guard: 'auth',
    },
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
  const requiresAuth = to.meta.guard === 'auth';
  if (!(await getCurrentUser()) && requiresAuth) {
    next('/');
  } else {
    next();
  }
});

export default router;
