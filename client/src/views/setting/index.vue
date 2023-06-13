<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { dbUpdateOne, findOne } from "../api/api";

const formInline = reactive({
  path: "",
});

const deviceInfo = reactive({
  chromeDir: "",
  version: "",
  platform: "",
  machineId: "",
  downloadsPath: "",
  appPath: "",
  serverPort: "",
});

onMounted(async () => {
  const chromeDir = await findOne({
    name: "chromePath",
  });
  console.log(chromeDir);
  // const chromeDir:any = await window.electronAPI.dbFindOne({ name: "chromePath" });
  // const device:any = await window.electronAPI.getDeviceInfo();
  if (chromeDir) {
    formInline.path = chromeDir.data.value;
    deviceInfo.chromeDir = chromeDir.data.value
  }
  // if (device) {
  //   deviceInfo.version = device.version
  //   deviceInfo.platform = device.platform
  //   deviceInfo.downloadsPath = device.downloadsPath
  //   deviceInfo.appPath = device.appPath
  //   deviceInfo.serverPort = device.serverPort
  // }
});

const loading = ref(false);

const onSubmit = async () => {
  if (!formInline.path) {
    ElMessage.error("请输入浏览器路径.");
    return;
  }

  let data = {
    query: { name: "chromePath" },
    data: { name: "chromePath", value: formInline.path },
  };
  let result = await dbUpdateOne(data);
  if (result) {
    ElMessage.success("保存成功.");
    deviceInfo.chromeDir = formInline.path
  } else {
    ElMessage.error("保存失败.");
  }
};
</script>

<template>
  <h1 style="margin-bottom: 20px">软件配置</h1>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="浏览器路径">
      <el-input v-model="formInline.path" placeholder="请输入浏览器路径" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading"
        >保存</el-button
      >
    </el-form-item>
  </el-form>
  <p class="box">
    1、打开chrome 浏览器 <br />
    2、输入 <strong>chrome://version/</strong> <br />
    3、把 <strong>可执行文件路径</strong> 复制到此处保存 <br />
  </p>
  <el-descriptions title="" :column="1" border>
    <el-descriptions-item
      label="版本"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      ><el-tag size="small">{{
        deviceInfo.version
      }}</el-tag></el-descriptions-item
    >
    <el-descriptions-item label="平台" label-align="right" align="center">{{
      deviceInfo.platform
    }}</el-descriptions-item>
    <el-descriptions-item label="机器码" label-align="right" align="center">
      {{ deviceInfo.machineId }}
    </el-descriptions-item>
    <el-descriptions-item label="服务端口" label-align="right" align="center">{{
      deviceInfo.serverPort
    }}</el-descriptions-item>
    <el-descriptions-item label="下载目录" label-align="right" align="center">
      {{ deviceInfo.downloadsPath }}
    </el-descriptions-item>
    <el-descriptions-item label="软件目录" label-align="right" align="center">
      {{ deviceInfo.appPath }}
    </el-descriptions-item>
    <el-descriptions-item label="浏览器目录" label-align="right" align="center">
      {{ deviceInfo.chromeDir }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.box {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.demo-form-inline {
  width: 400px;
  padding-left: 30px;
}
</style>
