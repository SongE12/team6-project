<template>
  <div class="header">
    <img
      src="../HeaderImage/mapleIcon.png"
      alt="icon" 
      class="icon" />
    <RouterLink
      :to="loginCheck">
      <img
        src="../HeaderImage/mapleLogo.png"
        alt="logo"
        class="logo" />
    </RouterLink>
    <div class="user">
      <button
        v-if="logoutCheck"
        @click="signOut">
        <RouterLink
          to="/">
          로그아웃
        </RouterLink>
      </button>
      <span class="material-icons">
        account_circle
      </span>
      <div class="user_name">
        {{ userName }}
      </div>
    </div>
  </div>
</template>

<script>
import { validateTokenUser } from '~/core'

export default {
  data() {
    return {
      loginCheck: '/',
      logoutCheck: false,
      userName: 'Guest'
    }
  },
  mounted() {
    this.name()
  },
  methods: {
    async name() {
      const user = await validateTokenUser()
      if(window.localStorage.getItem('token')) {
        this.userName = user.displayName
        this.loginCheck = '/loginHome'
        this.logoutCheck = true
      } else {
        this.loginCheck = '/'
        this.logoutCheck = false
      }
    },
    async signOut() {
      this.$router.push('/')
      const accessToken = window.localStorage.getItem('token')
      await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_team6',
          'Authorization': `Bearer ${accessToken}`
        }
      })
      window.localStorage.removeItem('token', accessToken)
      this.$router.go()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FEE3EC;
  .icon {
    padding-left: 30px;
    width: 48px;
    height: 48px;
  }
  .logo {
    cursor: pointer;
  }
  .user {
    display: flex;
    .material-icons {
      font-size: 30px;
    }
    .user_name {
      font-size: 24px;
      margin-right: 30px;
      margin-left: 10px;
    }
  }
}
</style>
