<template>
  <div class="projectlist">
    <h1 style="text-align: left">项目/场景列表</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="project_name" label="项目/场景名称" width="180"> </el-table-column>
      <el-table-column prop="platform_name" label="平台名称" width="180"></el-table-column>
      <el-table-column prop="modle_name" label="模块名称" width="180"></el-table-column>
      <el-table-column prop="create_time" label="创建日期" width="180"> </el-table-column>
      <el-table-column prop="personnel_name" label="测试人员名称"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          project_name: "互医",
          platform_name:"IOS",
          modle_name:"家医",
          create_time: "2022-02-22 16:00:00",
          personnel_name: "李白",
        },
        {
          project_name: "互医",
          platform_name:"H5",
          modle_name:"家医",
          create_time: "2022-02-22 16:00:00",
          personnel_name: "杜甫",
        },
      ],
    };
  },
};
</script>