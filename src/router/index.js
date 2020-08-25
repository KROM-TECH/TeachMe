import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import firebase from 'firebase/app';
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/services',
    name: 'Service',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Signin.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tutor',
    name: 'Tutor',
    component: () => import('../views/Tutor.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth) && !firebase.auth().currentUser) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    });
  }
  else if (to.matched.some((record) => record.meta.requiresGuest) && firebase.auth().currentUser) {
    next({
      name: 'Home',
      query: { redirect: to.fullPath }
    });
  } else next();
})

export default router;
