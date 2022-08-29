<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical>
    </n-space>
  </n-config-provider>
</template>

<style scoped lang="scss">
</style>
