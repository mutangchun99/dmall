<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#fffffb"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-lollipop"></i>
              <span>项目/场景配置</span>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-document-copy"></i>
            <span slot="title">API测试</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">巡检配置</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Mock配置</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">文档报告</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">其它配置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aside{
  text-align: left;
  /* background-color: #545c64; */
}
</style>