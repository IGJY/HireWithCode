<template>
  <div class="accept-container">
    <h2>接受挑战</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>GitHub ID</label>
        <input v-model="github" required placeholder="请输入你的GitHub ID" />
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input v-model="email" type="email" required placeholder="请输入邮箱" />
      </div>
      <button type="submit">接受挑战</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const github = ref('')
const email = ref('')
const router = useRouter()
function onSubmit() {
  // 这里只做前端跳转
  router.push('/finish')
}
</script>

<style scoped>
.accept-container {
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