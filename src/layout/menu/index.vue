<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="!item.meta.hidden">
          <template #title>
            <span>标&nbsp;</span>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由但是只有一个子路由 -->
      <template v-if="item.children && item.children.length == 1">
        <el-ment-item
          :index="item.children[0].path"
          v-if="!item.children[0].meta.hidden"
        >
          <template #title>
            <span>{{ item.children[0].title }}</span>
          </template>
        </el-ment-item>
      </template>
      <!-- 有子路由且个数大于一个 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup lang="ts">
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  // 递归组件必须有名字
  name: 'Menu',
}
</script>
<style scoped></style>
