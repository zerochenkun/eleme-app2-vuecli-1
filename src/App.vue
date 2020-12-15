<template>
  <div id="app">
    <div class="header">
      header
    </div>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <v-header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'v-header': Header
  }
}
</script>

<style scoped>
  
</style>
