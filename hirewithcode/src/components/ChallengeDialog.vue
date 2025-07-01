<template>
  <div v-if="visible" class="dialog-mask" @click="onMaskClick">
    <div class="dialog-content" @click.stop>
      <h2 class="dialog-title">
        <slot name="title">弹窗标题</slot>
      </h2>
      <div class="dialog-body">
        <slot>这里是弹窗内容</slot>
      </div>
      <div class="dialog-footer">
        <button type="button" @click="onSubmitClick">提交</button>
        <button type="button" @click="onClose" style="margin-top:10px;">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
  onSubmit: Function,
  onClose: Function
})

function onSubmitClick() {
  props.onSubmit?.()
}

// 点击阴影处也能关闭
function onMaskClick(e) {
  if (e.target === e.currentTarget) {
    props.onClose?.()
  }
}
</script>

<style scoped>
.dialog-mask {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog-content {
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.dialog-title {
  margin-bottom: 18px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
}
.dialog-body {
  margin-bottom: 24px;
}
.dialog-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
button[type="button"]:last-child {
  background: #eee;
  color: #333;
}
button:hover {
  background: #535bf2;
}
button[type="button"]:last-child:hover {
  background: #ddd;
}
</style> 