<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleVisible(false)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)

const handleVisible = (visible:boolean)=>{
  dialogVisible.value = visible
}

//暴露state和play方法
defineExpose({
  handleVisible
});
</script>

<style  scoped></style>
