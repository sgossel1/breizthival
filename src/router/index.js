import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/user/Login';
import Register from '@/components/user/Register';
import ForgotPassword from '@/components/user/ForgotPassword';
import ChangePassword from '@/components/user/ChangePassword';
import Home from '@/components/public/Home';
import UserAccount from '@/components/user/UserAccount';
import Partnaires from '@/components/public/Partnaires';
import ListFestivals from '@/components/events/ListFestivals';
import Event from '@/components/events/Event';
import ListMissions from '@/components/missions/ListMissions';

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword
    }
    ,
    {
      path: '/change_password',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/account',
      name: 'UserAccount',
      component: UserAccount,
    },
    {
      path: '/festivals',
      name: 'Festivals',
      component: ListFestivals,
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
    },
    {
      path: '/partenaires',
      name: 'Partnaires',
      component: Partnaires,
    },
    {
      path: '/missions',
      name: 'Missions',
      component: ListMissions,
    },
  ]
})
