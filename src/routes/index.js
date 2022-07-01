import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import SignIn from './SignIn.vue'
import MyPage from './MyPage.vue'
import AccountList from './AccountList.vue'
import LoginHome from './LoginHome.vue'
import Test from './test.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({top: 0}),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/MyPage',
      component: MyPage
    },
    {
      path: '/MyPage/AccountList',
      component: AccountList
    },
    {
      path: '/loginHome',
      component: LoginHome
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
