<template>
  <div>
   <H1>用户列表</H1>
   <div style="background:#eee;padding: 10px">
       <h3>
       <Tooltip content="应用列表" placement="top-start">
           <a href="#/applist">首页 </a>
        </Tooltip>
       </h3>
    </div><br>
    <HandleModal ref="handleModal"></HandleModal><br>
    
    <Table :columns="tableConf.columns" :data="tableData"></Table>
  </div>
</template>

<script>
  import Api from 'common/api';
  import HandleModal from './handleModal.vue';
  var Util = require('../../lib/util');
  export default {
    name: 'UserList',
    data() {
      return {
        tableConf: {
          columns: [
            {
              title: 'uid',
              key: 'uid',
              align: 'center',
            },
            {
              title: '用户名',
              key: 'username',
              align: 'center',
              width: '20%',
            },
            {
              title: '创建时间',
              key: 'createTime',
              align: 'center',
            },
            {
              title: '操作',
              key: 'action',
              align: 'center',
              render: (h, param) => h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                  },
                     style: {
                    marginRight: '5px',
                  },
                  attrs:{
                    	disabled:  function(){
					      	  if(Util.getCookie("isAdmin") == "true"){
					        	return false;
					        }
					        return true;
					        }(),
                     },
                  on: {
                    click: () => {
                      this.delItem(param.row.uid);
                    },
                  },
                }, '删除'),
              ]),
            },
          ],
          data: [],
        },
       
      };
    },
    components: {
      HandleModal
    },
    computed: {
      tableData() {
        const self = this
        return self.$store.state.MOD.userList;
      },
    },
    mounted() {
      const self = this;    
       self.$store.dispatch('getUserList');
    },
    methods: {
      addItem(data) {
        this.$refs.handleModal.setModifyData(data);
      },
      delItem(id) {
        this.$Modal.confirm({
                      title: '提示',
                      content: '<p>确认删除？</p>',
                      onOk: () => {
                          Api.delUser(id).done((res) =>{
                            if(res.code==0){
                              this.$Message.success('删除成功');
                              this.$store.dispatch('getUserList');  
                            }else{
                               this.$Message.error("删除失败："+res.msg);
                            }
                          });
                      },
                      onCancel: () => {
                         
                      }
                  });
      }
      
    },
  };
</script>

<style lang="scss">
</style>
