<template>
  <div class="bg">
    <div class="inner">
      <div>
        <img
          src="../BSE_imgs/login.png"
          alt="login" />
        <div class="id">
          <input
            v-model="email"
            placeholder="아이디 (이메일 주소)"
            type="text" />
        </div>
        <div class="pw">
          <input
            v-model="password"
            placeholder="패스워드"
            type="text"
            @keydown.enter="signIn" />
        </div>
        <div class="checkID">
          <span
            v-if="checkID">
            아이디 또는 패스워드가 일치하지 않습니다.
          </span>
          <RouterLink
            class="join"
            to="/signup">
            회원가입
          </RouterLink>
        </div>
        <button
          class="login"
          @click="signIn">
          로그인
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'

export default {
  data() {
    return {
      email: '',
      password: '',
      checkID: false,
      displayName: '',
      loginCheck: '/signin'
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },  
  methods: {
    async signIn() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_team6'
        },
        body: JSON.stringify({
          email: this.email.trim(),
          password: this.password.trim()
        })
      })
      const { user, accessToken } = await res.json()
      window.localStorage.setItem('token', accessToken)
      this.userStore.user = user
      console.log(this.userStore.user) 
      if(!this.userStore.user) {
        this.checkID = true
        this.email = ''
        this.password = ''
      } else {
        // 질문 시: 아래의 방법을 사용해서 새로 고침을 구현했는데
        // 그런데 이렇게 새로 고침을 하게 되면 나중에 배포나 다른 상황에서
        // 문제가 생길 확률이 있다고 생각이 들었습니다
        // 그래서 this.$router.push('/loginHome')를 직접 넣는 방식으로 진행을 했는데
        // 이 경우에 정상적인 새로고침이 일어나지 않아 다른 해결책이 필요하다고 생각이 드는데 강사님의 의견이 필요합니다

        location.href = 'http://localhost:3000/loginHome'
        // this.$router.push('/loginHome')
        // location.href = `'${this.$router.push('/loginHome')}'`
      
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  background-position-y: 80%;
  background-repeat : no-repeat;
  background-size : cover;
  background-image: url('../backgroundImg/Main.png');
}
.inner {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10%;
  width: 800px;
  height: 400px; 
  background-color: #fff;
  opacity: .9;
  border-radius: 10px;
}
img {
  display: block;
  width: 110px;
  height: 110px;
  margin: auto;
}
.font {
  display: inline-block;
  width: 100px;
  font-size: 46px;
  line-height: 55px;
}
.id {
  margin-bottom: 10px;
}
.pw {
  margin-bottom: 10px;
}
input {
  padding: 10px;
  font-size: 20px;
  border: 3px solid #f5f5f5;
  border-radius: 10px;
  width: 600px;
  height: 50px;
  &:focus {
    outline: none;
    border: 3px solid rgba(131, 94, 166, .5);
  }
  &::placeholder {
    color: #cac7c7;
  }
}
.checkID {
  display: flex;
  justify-content: right;
  span {
  font-size: 18px;
  font-weight: bold;
  color: red;
  padding: 0 150px 0 5px;
  }
}
.join {
  width: 100px;
  font-size: 18px;
  padding-right: 10px;
  margin-bottom: 10px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #845FA7;
  }
}
.login {
  margin-top: 6px;
  border: none;
  background-color: #845FA7;
  border-radius: 50px;
  width: 620px;
  height: 70px;
  cursor: pointer;
  color: #fff;
  font-size: 28px;
  &:hover {
    opacity: .9;
  }
}
</style>
