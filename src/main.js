// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
  import Test from "./components/test"
  import User from "./components/user"

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:"/",component:User},
    {path:"/test",component:Test}
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
       <ul>
         <li>
            <router-link to="/">User</router-link>
            <router-link to="/test">TEST</router-link>
         </li>
       </ul>
       <router-view></router-view> 
    </div>
  `
}).$mount("#app")
