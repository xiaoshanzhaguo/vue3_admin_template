<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包动态展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示匹配路由的标题 -->
      <span style="margin: 0px 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting.ts'

//获取layout配置相关的仓库
let LayoutSettingStore = useLayoutSettingStore()
//定义一个响应式数据控制图标切换
let fold = ref(false) //将来用于控制菜单折叠还是打开图标切换变量
//点击图标的方法
const changeIcon = () => {
  //图标进行切换
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}

//获取路由对象
let $route = useRoute()
const handler = () => {
  console.log($route.matched)
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>
<style scoped></style>
