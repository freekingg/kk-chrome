<script setup>
import { Document, Menu as IconMenu, Setting, Warning } from "@element-plus/icons-vue";
import AccountPage from "./views/account/index.vue";
import SettingPage from "./views/setting/index.vue";
// import AdminPage from "./views/admin/index.vue";
import LogPage from "./views/log/index.vue";
import DocPage from "./views/doc/index.vue";
import { ref, onMounted } from "vue";
const currentMenu = ref(1);
const disabled = ref(false);
const handleSelect = (index) => {
  currentMenu.value = +index;
};

onMounted(async () => {

});
</script>

<template>
  <div>
    <el-menu default-active="1" class="menu" @select="handleSelect">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>账户列表</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><document /></el-icon>
        <span>实时日志</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>基本配置</span>
      </el-menu-item>
      <el-menu-item index="5" :disabled="disabled">
        <el-icon><Warning /></el-icon>
        <span>使用说明</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="container">
    <AccountPage v-show="currentMenu === 1" />
    <LogPage v-if="currentMenu === 2" />
    <SettingPage v-if="currentMenu === 3" />
    <DocPage v-if="currentMenu === 5" />
  </div>
</template>

<style scoped>
/* .menu {
  height: 100vh;
} */
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.machine-id {
  color: #656d76;
  background-color: rgba(175, 184, 193, 0.2);
  padding: 0 4px;
  border-radius: 6px;
}
</style>
