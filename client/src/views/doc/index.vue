<template>
  <div class="doc">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>软件说明</span>
        </div>
      </template>
      <p>本软件主要用与卡接模式下的网银下载流水辅助工具</p>
      <el-divider />
      <p>账户列表： 用与启动网银下载任务</p>
      <p>实时日志： 用与记录任务运行过程中的日志</p>
      <p>高级配置： 用与配置远程服务器连接信息</p>
      <el-divider />
      <p>附加功能1 ：可以自动解禁网站的右键与复制粘贴功能</p>
      <p>附加功能2 ：可以自动加载浏览器的流水下载插件</p>
      <p>附加功能3 ：可以自动设置浏览器的文件下载路径</p>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>首次使用说明</span>
        </div>
      </template>
      <p>1、在基本设置中 配置浏览器路径 （ps:用于启动浏览器）</p>
      <p>2、在高级设置中 配置远程信息 （ps:将文件同步至远程哪台服务器）</p>
      <p>3、在账户列表中 填写户名与网址，开始运行</p>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.doc {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding-top: 30px;
}

.box-card {
  margin-bottom: 10px;
}
p {
  margin: 4px;
  color: #606266;
}
</style>
