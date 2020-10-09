/*
 * @Descripttion: 
 * @version: 
 * @Author: wangzongcheng
 * @Date: 2019-10-16 16:14:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-09 22:24:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/pages/index'
import userCenter from '../components/pages/userCenter'
import userInfo from '../components/pages/userInfo'
import Login from '../components/login'
import Register from '../components/register'
import Home from '../components/home'
import { test } from 'shelljs'
import test123 from '../components/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login,
      children:[{
        path: '/',
        name: 'Login',
        component: Login
      },{
        path: '/register',
        name:'Register',
        component: Register
      }]
    },
    {
      path:'/home',
      name: Home,
      component:Home,
      children:[
        {
          path:'/index',
          name:'Index',
          component: Index
        },{
          path:'/hello',
          name:'HelloWorld',
          component: HelloWorld
        },{
          path: '/userCenter',
          name:'userCenter',
          component:userCenter,
          children:[
            {
              path: 'userInfo',
              name: 'userInfo',
              component:userInfo
            }
          ]
        }
      ] 
    },
    {
      path: '/test',
      name: "test",
      component: test123
    }
  ]
})
