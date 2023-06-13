<script setup lang="ts">
import { ref,  onMounted } from "vue";
import dayjs from 'dayjs'
import { findAll } from "../api/api";
const tableData = ref([]);

const getLogs = async()=>{

  const logs = await findAll({
    name: "logInfo",
  });
   if(logs.data){
    tableData.value = logs.data
  }
}


const removeLogs = async()=>{
  // await window.electronAPI.dbRemove({
  //   name: "logInfo",
  // });
  // getLogs()
}

onMounted(async ()=>{
  getLogs()
})
</script>

<template>
  <!-- <a href="https://vitejs.dev" target="_blank">
    <img src="/electron-vite.svg" class="logo" alt="Vite logo" />
  </a> -->
  <h1 style="margin-bottom: 15px;margin-top: 15px;">日志列表</h1>
  <el-button type="primary" style="margin-top: 20px" @click="getLogs">刷新</el-button>
  <div class="card">
    <el-table :data="tableData" style="width: 100%" size="large" height="60vh">
      <el-table-column label="账户名" header-align="center" align="center">
        <template #default="{ row }">
         {{ row.value ? row.value.uname : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="消息" header-align="center" align="center">
        <template #default="{ row }">
         {{ row.value ? row.value.message : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="时间" header-align="center" align="center">
        <template #default="{ row }">
         {{ row.updatedAt ? dayjs(row.updatedAt).format('YYYY-MM-DD HH:MM:ss') : '-' }}
        </template>
      </el-table-column>
     
    </el-table>
  </div>
  <el-button type="info" style="margin-top: 20px" @click="removeLogs">清除缓存</el-button>
</template>

<style scoped>
.card {
  width: 80%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
