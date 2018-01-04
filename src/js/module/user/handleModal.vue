<template>
  <div>
    <Button type="success" @click="modal = true;formData={
      }">添加用户
    </Button>
    </Button>
    <Modal
      :width="800"
      v-model="modal"
      title="新增用户"
      ok-text="提交"
      :mask-closable="false"
      :footer-hide="true"
    >
      <Form :model="formData" ref="formData">
        <Form-item :rules="ruleCustom" prop="username" label="用户名：" required>
          <Input v-model="formData.username"  >
          </Input>
        </Form-item>
        <Form-item :rules="ruleCustom" prop="pwd" label="密码：" required>
          <Input v-model="formData.pwd" type="password">
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="submitData('formData')">
            提交
          </Button>
        </Form-item>
      </Form>

    </Modal>
  </div>
</template>

<script>
  import Api from 'common/api';
  import User from 'lib/user';
  import Md5 from 'lib/md5';
  import Check from 'common/check';
  export default {
    name: 'handleModal',
    data() {
      return {
        modal: false,
        loading: true,
        formData: {
          username: '',
          pwd: '',
        },
        ruleCustom:  Check.ruleCustom,
      };
    },
    
    methods: {
   
      setModifyData(data) {
        const formData = JSON.parse(JSON.stringify(data));
        this.formData = formData;
        this.modal = true;
      },
      submitData(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              const self = this;
              self.formData.pwd = Md5.hex_md5(self.formData.pwd)
              Api.createUser(self.formData).done((res) => {
                if(res.code === 0){
                  this.$Message.success('添加成功');
                  this.$store.dispatch('getUserList');  
                  this.modal = false;
                }else{
                    this.$Message.error('添加失败，' + res.msg);
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
