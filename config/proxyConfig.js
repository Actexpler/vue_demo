module.exports={
    proxy:{
        '/apis':{ //将localhost：8081 映射为 /apis
            target:'http://localhost:8081',//接口地址
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            secure:false, //如果接口是HTTPS接口，需要设置成true
            pathRewrite:{
                '^/apis':''
           }

        }
    }
}


//如果接口地址本身是有 '/apis' 这种前缀 就不需要pathRewrite