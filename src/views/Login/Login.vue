<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名:">
        <el-input
            type="text"
            placeholder="请输入内容"
            v-model="username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input
            type="password"
            placeholder="请输入内容"
            v-model="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-link @click="forget">忘记密码?</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      this.$router.push('/homepage')
      this.axios.get('http://127.0.0.1:8080/login', {params: {username: this.username, password: this.password}})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    forget: function () {
      this.$router.push('/forget')
    }
  },
};
</script>

<style>
.login {
  display: block;
  width: 300px;
  border: 1px solid bisque;
  position: absolute;
  right: 20%;
  top: 30%;
  padding: 15px;
}
</style>