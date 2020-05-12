import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载加载组件
const Home = () => import("views/home/Home")
const Recommend = () => import("views/recommend/Recommend.vue")
const Login = () => import("views/login/Login")

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
      { path: '/recommend', component: Recommend }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
