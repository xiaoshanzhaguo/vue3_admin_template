<template>
  <div class="box">
    <h1>用户管理</h1>
  </div>
</template>
<script setup lang="ts">
//引入组合式API函数之生命周期函数
import { onMounted } from 'vue'
//获取仓库对象
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//目前首页挂载完毕发请求获取用户信息
onMounted(() => {
  userStore.userInfo()
})
</script>
<style scoped>
.box {
  width: 100%;
  height: 400px;
  background: red;
}
</style>
