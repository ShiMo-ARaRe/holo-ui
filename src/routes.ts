import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './views/HomePage.vue'
import LoveFlower from './views/LoveFlower.vue'
import BirthdayFlower from './views/BirthdayFlower.vue'
import FriendFlower from './views/FriendFlower.vue'
import WeddingFlower from './views/WeddingFlower.vue'
import FlowerDetail from './views/FlowerDetail.vue'
import FlowerPay from './views/FlowerPay.vue'
import Personcenter from './views/PersonCenter.vue'

const router = createRouter({
  history: createWebHistory(),//用于指定路由的历史模式。
  // 在这种情况下，createWebHistory() 创建了一个基于 HTML5 History API 的路由历史模式，这是在现代浏览器中常用的一种模式。

  routes:[
  { path: '/', component: HomePage},
  { path: '/loveflower', component: LoveFlower},
  { path: '/birthdayflower' , component: BirthdayFlower},
  { path: '/friendflower', component: FriendFlower},
  { path: '/weddingflower' , component: WeddingFlower},
  { path: '/detail', component: FlowerDetail} ,
  { path: '/pay', component: FlowerPay },
  { path: '/personcenter', component: Personcenter},
  ],
})

export default router