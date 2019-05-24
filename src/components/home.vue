<template>
    <div>
         <headerDiv >   </headerDiv>
         <router-view class="view"> </router-view>
         <footerDiv>   </footerDiv>
    </div>
</template>

<script>
 
 import headerDiv from './common/header.vue'
 import footerDiv from './common/fooder.vue'
export default {
    name: 'Home',
    components:{
        headerDiv,
        footerDiv
    }
    
}
</script>

<style scoped>
   /* .view{
       margin-top: 150px;
   } */
</style>


