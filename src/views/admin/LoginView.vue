<script setup>
 import { useAdminStore } from '@/stores/admin/storeAdmin'

 const adminStore = useAdminStore()

 adminStore.save("huang", "nihao","2024-09-21")
</script>

<template>
    <h3>登录页</h3>
    <el-icon><User /></el-icon>
    <hr>
    <el-button type="primary">登录</el-button>
</template>

<style scoped></style>