<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <!--        <router-view />-->
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.bilibili.com/" target="_blank">OJ 测试</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout {
}
#basicLayout.header {
  background: red;
}
#basicLayout .content {
  background: linear-gradient(to right, #eee, #fff);
  padding: 20px;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
