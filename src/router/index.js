import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';
import Buefy from 'buefy';

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(Buefy);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta : {
        requiresAuth : true
      }
    },
    {
      path: '/portal',
      name: 'HelloWorld',
      component: HelloWorld,
      meta : {
        requiresAuth : true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
       let _isRequiresAuth = to.matched.some(record => record.meta.requiresAuth);
       let _isLogin = firebase.auth().currentUser;
       if(_isRequiresAuth && !_isLogin){
         next('login')
       }else{
         next();
       }
})

export default router 

