<template>
  <div class="container">
    <div class="header">
      <TheHeader />
    </div>
    <div class="main">
      <RouterView />
    </div>
    <div class="footer">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  .header {
    height: 64px;
    display: flex;
    align-items: center;
  }
  .main {
    flex-grow: 1;
  }
  .footer {
    height: 35px;
  }
}
</style>
