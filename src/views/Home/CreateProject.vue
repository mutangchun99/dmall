<template>
  <div class="createProject">
    <h1 style="text-align: left">新建项目/场景</h1>
    <el-form label-width="80px">
      <el-form-item label="平台名称">
        <el-input placeholder="请输入平台名称"></el-input>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input placeholder="请输入项目名称"></el-input>
      </el-form-item>
      <el-form-item label="模块名称">
        <el-input placeholder="请输入模块名称"></el-input>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="测试人员">
        <el-input placeholder="请输入测试人员姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value3:''
    };
  },
};
</script>

<style scoped>
.el-input {
  width: 250px;
}
</style>