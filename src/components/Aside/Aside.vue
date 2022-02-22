<template>
  <div class="aside">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#fffffb" router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>项目/场景配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/homepage/createproject">创建项目/场景</el-menu-item>
          <el-menu-item index="/homepage/projectList">项目/场景列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>用例管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/homepage/createcase">创建用例</el-menu-item>
          <el-menu-item index="/homepage/caseList">用例列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aside {
  text-align: left;
  /* background-color: #545c64; */
}
</style>