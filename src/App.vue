<template>
<div>
  <div>
      header
    </div>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <v-header>
  </div>
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
.tab{
  display:flex;
  width:100%;
  height: 40px;
  line-height:40px;
}
.tab .tab-item{
  flex:1;
  text-align:center;
}
</style>
