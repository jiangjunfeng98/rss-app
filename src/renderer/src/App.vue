<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = shallowRef(zhCn)
</script>
