<template>
  <div class="welcome-container">
    <img src="/logo.png" alt="logo" class="logo" />
    <div class="welcome-text">欢迎来到 无限状态 线上面试环节，期待你的加入！</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/guide')
  }, 2000)
})
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
.logo {
  width: 120px;
  margin-bottom: 24px;
}
.welcome-text {
  font-size: 1.5rem;
  font-weight: bold;
}
</style> 