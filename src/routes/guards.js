import router from './index'
import { useUserStore } from '~/store/user'
import { validateTokenUser } from '~/core'


router.beforeEach(async to => {
  const userStore = useUserStore()

  if(to.meta.auth) {
    const user = await validateTokenUser()
    if (user.email === 'admin@team6.com' && user.displayName === 'admin') {
      userStore.user = user
      return '/admin'
    }
    if (user && user.email) {
      userStore.user = user
      return true
    }
    return '/signin'
  }
})
