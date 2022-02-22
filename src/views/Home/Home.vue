<template>
  <div class="home">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Aside />
      </el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view /></el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import Header from "@/components/Header/Header.vue";
export default {
  components: {
    Aside,
    Header,
  },
};
</script>

<style scoped>
/* .home {
  height: 100%;
  width: 100%;
} */
</style>