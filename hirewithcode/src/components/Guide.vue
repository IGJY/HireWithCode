<template>
  <div class="guide-container">
    <div v-html="htmlContent" class="markdown-body"></div>
  </div>
  <div class="button-container">
    <button class="accept-btn" @click="goToAccept">接受挑战</button>
    <button class="finish-btn" @click="goToFinish">完成挑战</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { marked } from 'marked'

const router = useRouter()
const htmlContent = ref('加载中...')

onMounted(async () => {
  // 这里直接用README.md的远程链接
  const res = await fetch('https://raw.githubusercontent.com/InfiniteStatesInc/HireWithCode/refs/heads/main/README.md')
  const md = await res.text()
  htmlContent.value = marked.parse(md)
})

function goToAccept() {
  router.push('/accept')
}

function goToFinish() {
  router.push('/finish')
}
</script>

<style scoped>
.guide-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.markdown-body {
  font-size: 1rem;
  line-height: 1.8;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px auto;
  max-width: 700px;
}
.accept-btn, .finish-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
.accept-btn {
  background: #646cff;
  color: white;
}
.accept-btn:hover {
  background: #535bf2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.3);
}
.finish-btn {
  background: #42b883;
  color: white;
}
.finish-btn:hover {
  background: #369870;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
}
</style> 