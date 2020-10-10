<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangzongcheng
 * @Date: 2019-10-16 16:14:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-10 22:24:46
-->
<template>
     <div >
        <div style="margin:0 auto;background-color:#dcdee2;width:400px;height:360px">
            <div class="login-title">用户登录</div>
            <div>
                用户名 ：
                <Input v-model="account" placeholder="账号..." style="width: 250px" />
                <!-- input 中数据绑定用 v-model -->
                <!-- <input v-model="account" class="input account" type="text" placeholder="账号"> -->
            </div>
            <div style="margin-top:25px">
                密码 ：
                <!-- input 中数据绑定用 v-model -->
                <!-- <input v-model="pwd" class="input pwd" type="text" placeholder="密码">  -->
                <Input v-model="pwd" placeholder="密码..." style="width:250px" />  
            </div>
            <div style="margin-top:25px;">
                <!-- 绑定 事件用 v-on -->
            <Button type="primary" shape="circle" v-on:click="login()">登录</Button>
            </div>    
                
            </div>
        
    </div>
</template>

<script>
import qs from "qs"
export default {
        name: "Login",
        data() {
            return {
                account: '',  //输入框中的账号
                pwd: ''  //输入框中的密码
            }
        },
        methods: {
            login() {//登录
                console.log(this.account+":"+this.pwd);
                this.$ajax.post('/apis/getFirstRequestt',qs.stringify({account:this.account,
                        pwd:this.pwd}))
               .then(response => {
                    // get status
                    response.status;
                    // get status text
                    response.statusText;
                    // get 'Expires' header
                    response.headers[2];
                    // get body data
                    var  someData = response.data;
                    console.log(someData);
                    console.log(response);
                    if(someData==true){
                        this.$router.push({path:'/home'})
                    }

                }, response => {
                    // error callback
                });



                // vue-resource 请求方式
                // POST /someUrl   {params:{account:this.account,pwd:this.pwd}}
                // this.$http.post('http://localhost:8081/getFirstRequestt',{account:this.account,pwd:this.pwd})
                // .then(response => {
                //     // get status
                //     response.status;
                //     // get status text
                //     response.statusText;
                //     // get 'Expires' header
                //     response.headers.get('Expires');
                //     // get body data
                //     var  someData = response.body;
                //     console.log(someData);

                // }, response => {
                //     // error callback
                // });
            }      
        }
}
</script>


<style scoped>
   .login-title{
       font-family:黑体;font-size:20px; text-align:center; color:black; padding:10px 0px;margin-bottom: 10%;
   }
</style>
