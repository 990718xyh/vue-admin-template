<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </n-space>
  </n-config-provider>
</template>

<style scoped lang="scss">
  .test{
    color: $bg;
  }
</style>
