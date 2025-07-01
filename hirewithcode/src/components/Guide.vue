<template>
  <!-- TODO 现在会出现按钮先出现内容延迟出现的问题，因为内容是异步通过链接获取的，看看后面需不需要解决 -->
  <div class="guide-container">
    <div v-html="htmlContent" class="markdown-body"></div>
  </div>
  <div class="button-container">
    <button class="accept-btn" @click="openDialog('accept')">接受挑战</button>
    <button class="finish-btn" @click="openDialog('finish')">完成挑战</button>
  </div>
  <ChallengeDialog
    :visible="dialogVisible"
    :onSubmit="handleDialogSubmit"
    :onClose="closeDialog"
  >
    <template #title>
      {{ dialogType === 'accept' ? '接受挑战' : '完成挑战' }}
    </template>
    <template #default>
      <form @submit.prevent>
        <div v-if="dialogType === 'accept'">
          <div class="form-group">
            <label for="github">GitHub ID</label>
            <input id="github" v-model="acceptForm.github" required placeholder="请输入你的GitHub ID" />
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input id="email" v-model="acceptForm.email" type="email" required placeholder="请输入邮箱" />
          </div>
        </div>
        <div v-else>
          <div class="form-group">
            <label for="repo">GitHub 仓库 URL</label>
            <input id="repo" v-model="finishForm.repo" required placeholder="请输入你的GitHub仓库地址" />
          </div>
          <div class="form-group">
            <label for="vercel">Vercel 在线体验地址</label>
            <input id="vercel" v-model="finishForm.vercel" required placeholder="请输入你的Vercel在线体验地址" />
          </div>
        </div>
      </form>
    </template>
  </ChallengeDialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import ChallengeDialog from './ChallengeDialog.vue'

const htmlContent = ref('加载中...')
const dialogVisible = ref(false)
const dialogType = ref('accept')

const acceptForm = ref({ github: '', email: '' })
const finishForm = ref({ repo: '', vercel: '' })

onMounted(async () => {
  // 这里直接用README.md的远程链接
  const res = await fetch('https://raw.githubusercontent.com/InfiniteStatesInc/HireWithCode/refs/heads/main/README.md')
  const md = await res.text()
  htmlContent.value = marked.parse(md)
})

function openDialog(type) {
  dialogType.value = type
  dialogVisible.value = true
}
function closeDialog() {
  dialogVisible.value = false
}
function handleDialogSubmit() {
  dialogVisible.value = false
  if (dialogType.value === 'accept') {
    if (!acceptForm.value.github || !acceptForm.value.email) {
      alert('请填写完整信息')
      return
    }
    alert('接受挑战成功！')
    // 这里可以处理 acceptForm.value
    // 把输入框的内容清零
    acceptForm.value = { github: '', email: '' }
  } else {
    if (!finishForm.value.repo || !finishForm.value.vercel) {
      alert('请填写完整信息')
      return
    }
    alert('提交成功！祝你面试顺利！')
    // 这里可以处理 finishForm.value
    // 把输入框的内容清零
    finishForm.value = { repo: '', vercel: '' }
  }
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
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}
input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  /* width: 100%; */
}
</style> 