<template>
  <div class="background-img">
    <div class="container">
      <div class="my_page">
        <p>My Page</p>
        <div class="menu">
          <div class="menu_list">
            <RouterLink to="/MyPage/AccountList">
              <div class="account">
                계좌
              </div>
            </RouterLink>
          </div>
          <div class="menu_ui">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useMainStore } from '~/store/main'

export default {
  ...mapStores(useMainStore)
}
</script>

<style lang="scss" scoped>
  .background-img {
    position: relative;
    height: 100%;
    background-position-y: 92%;
    background-repeat : no-repeat;
    background-size : cover;
    background-image: url('../backgroundImg/MyPage.png');
    .container {
      padding-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .my_page {
        width: 60%;
        height: 75vh;
        background-color: white;
        border-radius: 20px;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        opacity: 0.8;
        p {
          padding: 20px 0;
          font-size: 24px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .menu {
          display: flex;
          justify-content: center;
          align-items: center;
          .menu_list {
            width: 20%;
            height: 60vh;
            background-color: #F999B7;
            border-radius: 20px;
            margin-right: 5%;
            .account {
              padding-top: 20px;
              text-align: center;
              font-size: 18px;
              font-weight: bold;
            }
          }
          .menu_ui {
            width: 60%;
            height: 60vh;
            background-color: #F9C5D5;
            border-radius: 20px;
          }
        }
      }
    }
  }
</style>
