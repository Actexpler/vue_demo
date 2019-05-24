<template>
  <div id="app1">   <!-- App.vue 作为存放组件的容器，添加简单的路由即可 -->
      <!-- <img src="./assets/logo.png"> -->
      <!-- <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p> -->
      <!-- <example/> -->


      <!-- <p>导航栏</p>
      <router-link to='/index'>首页</router-link>
      <router-link to='/userCenter'>用户中心</router-link> -->
      <router-view></router-view>  
  </div>
</template>

<script>

//手动引入需要的组件
import HelloWorld2 from './components/HelloWorld'
import login from './components/login'
import Vue from 'vue'
import example from './components/example'


export default {
  name: 'app3', //本组件的名称
  data() {  //用到的数据
    return {  //使用的是  return 
      message:'Hello'   //定义了一个名叫message的变量 ，值为Hello
    }
  },
  computed:{       //计算属性 ， 在所需变量不便的情况下不会重新计算，具有缓存
    reversedMessage : function(){
      return this.message.split('').reverse().join('')
    }
  },
  components: { //本组件中用到的其他组件成分
    HelloWorld2,
    example
  }
}

// console.log(this.a.data().message);

</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
