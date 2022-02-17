<template>
  <div class="home">
    <el-container style="height: 100%">
      <el-aside width="450px" style="margin: 10px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header style="height: 20%"><Header /></el-header>
        <el-main style="height: 60%"><Main /></el-main>
        <el-footer style="height: 20%"><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside/Aside.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Main from "@/components/Main/Main.vue";
export default {
  components: {
    Aside,
    Header,
    Footer,
    Main,
  },
};
</script>

<style>
.home {
  height: 100%;
  width: 100%;
}
</style>