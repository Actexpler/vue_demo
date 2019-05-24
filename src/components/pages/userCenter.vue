<template>
    <div >
         <Menu :theme="theme3" active-name="1">
        <MenuGroup title="账号管理">
            <MenuItem name="1">
                <Icon type="md-document" />
                账户管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                邮箱管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="账户安全">
            <MenuItem name="3">
                <Icon type="md-heart" />
                密码管理
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-leaf" />
                隐私管理
            </MenuItem>
        </MenuGroup>
    </Menu>
        <!-- <p>这是用户中心</p>
        <router-link to="/userCenter/userInfo" >用户信息</router-link>
        <router-view></router-view> -->
    </div>
</template>


<script>
export default {
    name:'userCenter',
    data(){
        return{
             theme3: 'light'
        }
    }
    
}
</script>

<style scoped>
 p{
     display: block;
     background: #d6e9c6;
      }
</style>


