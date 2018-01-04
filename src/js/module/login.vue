<template>
  <div style="margin-left:500px;width:500px; height:300px;">
   <H1>登录</H1>
      <Form :model="formData" ref="formData">
        <Form-item :rules="ruleCustom" prop="username"  label="用户名：" required>
          <Input v-model="formData.username" >
          </Input>
        </Form-item>
        <Form-item :rules="ruleCustom" prop="pwd"  label="密码：" required>
          <Input v-model="formData.pwd" type="password" >
          </Input>
        </Form-item>
         <Form-item>
          <Button type="primary" @click="submitData('formData')">
            登录
          </Button>
        </Form-item>
      </Form>
  </div>
</template>

<script>
  import Api from 'common/api';
  import User from 'lib/user';
  import Check from 'common/check';
  import Md5 from 'lib/md5';
  export default {
    name: 'login',
    data() {
      return {
        loading: true,
        formData: {
          username: '',
          pwd: '',
        },
        ruleCustom:  Check.ruleCustom,
      };
    },
    methods: {
      submitData(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
               const self = this;
               self.formData.pwd = Md5.hex_md5(self.formData.pwd)
               Api.login(self.formData).done((res) => {
	                if(res.code === 0){
	                	window.location.href="#/applist";
	                }else{
	                    this.$Message.error('登录失败，' + res.msg);
	                }
               });
            } else {
                this.$Message.error('表单验证失败!');
            }
        });
      },
    },
    
  };
</script>

<style lang="scss">
</style>
