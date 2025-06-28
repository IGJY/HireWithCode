<template>
  <div class="finish-container">
    <h2>完成挑战</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>GitHub 仓库 URL</label>
        <input v-model="repo" required placeholder="请输入你的GitHub仓库地址" />
      </div>
      <div class="form-group">
        <label>Vercel 在线体验地址</label>
        <input v-model="vercel" required placeholder="请输入你的Vercel在线体验地址" />
      </div>
      <button type="submit">提交作品</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const repo = ref('')
const vercel = ref('')
function onSubmit() {
  alert('提交成功！祝你面试顺利！')
}
</script>

<style scoped>
.finish-container {
  max-width: 400px;
  margin: 60px auto;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
button {
  width: 100%;
  padding: 10px;
  background: #646cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
}
button:hover {
  background: #535bf2;
}
</style> 