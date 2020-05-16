import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载加载组件
const Home = () => import("views/home/Home")
const Recommend = () => import("views/recommend/Recommend")
const Login = () => import("views/login/Login")
const TopList = () => import("views/toplist/TopList")
const Singer = () => import("views/singer/Singer")

// 注册插件
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { 
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/recommend' },
      { path: '/recommend', component: Recommend },
      { path: '/toplist', component: TopList },
      { path: '/singer', component: Singer }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
