/*
 * @Descripttion: 
 * @version: 
 * @Author: wangzongcheng
 * @Date: 2020-09-28 10:46:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-28 13:42:45
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({ 

     locale: 'en', // 定义默认语言为中文 
    
     messages: {   
    
        'zh': require('@/locale/languages/zh.json'),   
    
        'en': require('@/locale/languages/en.json') 
    
      }
    
    });
export default i18n;