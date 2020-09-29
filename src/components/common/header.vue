<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangzongcheng
 * @Date: 2019-10-16 16:14:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-28 12:05:45
-->
<template>
   <div style="margin-top: -60px">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/index">
            <Icon type="ios-paper"/>
           {{$t("header.infoManage")}}
        </MenuItem>
        <MenuItem name="2" to="/userCenter">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
</div>
    <!-- <div>
        <router-link id="logo" to="/home">{{logo}}</router-link>
        <ul class="nav">
          <li v-for="nav in navs" v-bind:key="nav.title">
              <router-link :to="nav.path">{{nav.title}}</router-link>
          </li>
        </ul> 
    </div> -->
</template>


<script>
export default {
    name:'headerDiv',
    data(){
        return {
           theme1: 'dark',
           //logo:'',
           navs:[ {
                title:"注销",
                path:'/'
            },{
                title:"个人中心",
                path:'/userCenter'
            },{
                title:'欢迎',
                path:'/hello'
            },{
                title:'主页',
                path:'/index'
            }
            ]
        }
    },
    //props: ['logo']
}
</script>

<style scoped>

    
</style>

