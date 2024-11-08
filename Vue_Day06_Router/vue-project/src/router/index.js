import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import UserView from "@/views/UserView.vue"
import LoginView from "@/views/LoginView.vue"
import BoardView from "@/views/BoardView.vue"
import BoardList from "@/components/board/BoardList.vue"
import BoardCreate from "@/components/board/BoardCreate.vue"

                      // true: 주소창에 /login 치고 들어가도 Home으로 튕김 ()
const isAuth = true;  // false: 로그인 안 됨 (Home에 있다가 Login 페이지로 리다이렉트)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user/:id',  // 동적 라우팅 -> :을 붙임으로써
      name: 'user',
      component: UserView,
    },
    {
      path: '/login',  // 여기에 /:id 있으면 안 돼!! (복붙하다가 안 지움)
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        if (isAuth) {  // 로그인이 됐으면
          console.log("이미 로그인이 된 상태")
          return {name: 'home'}
        }
      }
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'boardList',
          component: BoardList
        },
        {
          path: 'create',
          name: 'boardCreate',
          component: BoardCreate
        }
      ]
    },
  ],
})

router.beforeEach((to, from) => {
  // console.log(to)
  // console.log(from)      // 반대로 로그인 상태에서는 로그인 페이지로 못 가도록 해야 함
  // const isAuth = false;  // 맨 위로 뺌
  if (!isAuth && to.name !== 'login') {
    console.log("로그인이 필요합니다.")
    return {name: 'login'}
  }
})

export default router
