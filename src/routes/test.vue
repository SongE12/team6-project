<template>
  <!-- {{ name }} -->
  TEST
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'

export default {
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  mounted() {
    this.test()
  },
  methods: {
    test() { 
      console.log(this.userStore.user)
    }
  }
}
</script>
