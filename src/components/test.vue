<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangzongcheng
 * @Date: 2020-09-02 20:16:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-02 21:43:27
-->
<template>
  <div>
    <div class="a2">
        <span class="ivu-tabs-nav-prev"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span>
        <span class="ivu-tabs-nav-next"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
        <div class="aa1" :style="{'margin-left': num * 20 + 'px','transition': 'all .1s ease-out .1s',}">
            <div class="aa11" v-for="(item,index) in aa" :key="index">
            <div>{{ item }}</div>
            </div>
        </div>
    </div>
    <button @click="prev">上一个</button>
    <button @click="next">下一个</button>



    <div class="test111">
        <span class="ivu-tabs-nav-prev" @click="prev1"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span>
        <span class="ivu-tabs-nav-next" @click="next1"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
        <div class="test333" :style="{'margin-left': num * 20 + 'px','transition': 'all .1s ease-out .1s',}">
            <div v-for="(item, index) in content.list" :key="item.path" class="link"
                :class="{ 'link-active' : index === content.activeIndex }">
                <div class="link-title">
                    <span style="color:green;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'GET'">{{item.methodType}}</span>
                    <span style="color:orange;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'POST'">{{item.methodType}}</span>
                    <span style="color:blue;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'PUT'">{{item.methodType}}</span>
                    <span style="color:red;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'DELETE'">{{item.methodType.substr(0,3)}}</span>
                    {{ item.tag }}
                </div>
                <div class="link-dirty" v-show="item.dirty">*</div>
                <div class="link-icon-close" >
                    <Icon type="md-close" />
                </div>
            </div>
        </div>
    </div>



    <div style="width:100%; height:800px; margin-top:50px;padding:15px;">
        <div style="height: 60%;width: 100%;position: relative;">
            <div class="links" :style="{'margin-left': num1 * 180 + 'px','transition': 'all .1s ease-out .1s',}">
                <span class="ivu-tabs-nav-prev" @click="prev1"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span>
                <span class="ivu-tabs-nav-next" @click="next1"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
                <div v-for="(item, index) in content.list" :key="item.path" class="link"
                :class="{ 'link-active' : index === content.activeIndex }">
                    <div class="link-title">
                        <span style="color:green;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'GET'">{{item.methodType}}</span>
                        <span style="color:orange;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'POST'">{{item.methodType}}</span>
                        <span style="color:blue;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'PUT'">{{item.methodType}}</span>
                        <span style="color:red;font-weight: bold;font-size: 11px;line-height: 21px;width: 55px;text-align: center;" v-if="item.methodType == 'DELETE'">{{item.methodType.substr(0,3)}}</span>
                        {{ item.tag }}
                    </div>
                    <div class="link-dirty" v-show="item.dirty">*</div>
                    <div class="link-icon-close" >
                        <Icon type="md-close" />
                    </div>
                </div>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
        aa: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        num1: 0,
        content: {
            list: [
                {
                    "api": "f8f9409e-16f8-4518-b12f-c7c396db59d1",
                    "url": "/api/data/table/{tableName}/{id}",
                    "name": "get",
                    "methodType": "GET",
                    "tag": "根据主键读取记录",
                    "params": [
                        {
                            "id": "160328f6-a4e4-4ff7-a94d-60a4d976ea97",
                            "api": "f8f9409e-16f8-4518-b12f-c7c396db59d1",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "3a1ab0e6-d1e6-44db-a6e9-8668ba168486",
                            "api": "f8f9409e-16f8-4518-b12f-c7c396db59d1",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        }
                    ]
                },
                {
                    "api": "1a4e3f25-7209-4c7d-b226-a0f1c84d4689",
                    "url": "/api/data/table/json/{tableName}",
                    "name": "getTableJSON",
                    "methodType": "GET",
                    "tag": "查看指定表结构",
                    "params": [
                        {
                            "id": "282f3e7d-6f68-49ca-b44d-949247e2451f",
                            "api": "1a4e3f25-7209-4c7d-b226-a0f1c84d4689",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        }
                    ]
                },
                {
                    "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                    "url": "/api/data/table/query/{tableName}",
                    "name": "search",
                    "methodType": "GET",
                    "tag": "多条件分页查询",
                    "params": [
                        {
                            "id": "2ff424da-7dde-486d-b96f-7716712a5b99",
                            "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                            "requestParamName": null,
                            "requestParamType": "int",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "a1e7c58e-7327-4c73-b80e-2114a1fe21df",
                            "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "a5fdec21-c3e9-49cb-b2bf-d71c58c9dec2",
                            "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "ac1d362d-d7fd-4dc9-af50-d6ca13280762",
                            "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "e029d9eb-ceb9-407c-a5b0-8d93e1985a8a",
                            "api": "13442b46-cc36-4d45-9438-3afa750f91c7",
                            "requestParamName": null,
                            "requestParamType": "int",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        }
                    ]
                },
                {
                    "api": "c136ba95-7a60-4976-aa22-4fdf51d3dfbf",
                    "url": "/api/data/table/{tableName}/{key}/{value}",
                    "name": "getBy",
                    "methodType": "GET",
                    "tag": "根据主键读取记录",
                    "params": [
                        {
                            "id": "8d36f2a8-a777-4a5b-86f1-92371abe4b16",
                            "api": "c136ba95-7a60-4976-aa22-4fdf51d3dfbf",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "905c5e7f-0105-4850-94e8-69f2eb7f3b5a",
                            "api": "c136ba95-7a60-4976-aa22-4fdf51d3dfbf",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        },
                        {
                            "id": "c746be0c-ab3f-432d-a33f-46941b200d6a",
                            "api": "c136ba95-7a60-4976-aa22-4fdf51d3dfbf",
                            "requestParamName": null,
                            "requestParamType": "String",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        }
                    ]
                },
                {
                    "api": "7a89ed9b-f94a-4a6c-8d5c-c75d91720ffe",
                    "url": "/api/data/table/upload",
                    "name": "inportTableDataFromCsv",
                    "methodType": "POST",
                    "tag": "导入表数据",
                    "params": [
                        {
                            "id": "cb143c34-612a-4e2c-a3aa-6bda6163c3c1",
                            "api": "7a89ed9b-f94a-4a6c-8d5c-c75d91720ffe",
                            "requestParamName": null,
                            "requestParamType": "MultipartFile",
                            "requestParamValue": null,
                            "requestParamRequire": 1
                        }
                    ]
                },
                {
                    "api": "4f68105a-640d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "2af68105a-640d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af6810544a-640d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4a44f68105a-640d-4398f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d3-498f-a138-ff0340782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "OPTIONS",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-64440d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-44498f-a138-ff0407822d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "PATCH",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-64067d-498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "TRACE",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-498f-a138-ff0407824d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "GET",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-498f-a138-ff040334782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "DELETE",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-498f-a13338-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "PUT",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-498f33-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "PUT",
                    "tag": "查看表结构",
                    "params": []
                },
                {
                    "api": "4af68105a-640d-33498f-a138-ff040782d261",
                    "url": "/api/data/table/jsons",
                    "name": "getTablesJSON",
                    "methodType": "HEAD",
                    "tag": "查看表结构",
                    "params": []
                }
            ],
            activeIndex: 0,
        },
      }
    },
    methods: {
      prev() {
        if (this.num < 0) {
          this.num += 1;
        }
      },
      next() {
        if (this.num > -(this.aa.length + this.num)) {
          this.num -= 1;
        } else if (this.num < -(this.aa.length + this.num) && -(this.aa.length + this.num) != -0) {
          this.num -= 1;
        }
      },
      prev1() {
        if (this.num1 < 0) {
          this.num1 += 1;
        }
      },
      next1() {
        if (this.num1 > -(this.content.list.length + this.num1)) {
          this.num1 -= 1;
        } else if (this.num1 < -(this.content.list.length + this.num1) && -(this.content.list.length + this.num1) != -0) {
          this.num1 -= 1;
        }
      }
    },
  }

</script>

<style scoped>
.test111 {
    margin: 0 auto;
    background: plum;
    width: 500px;
    overflow: hidden;
  }

  .test333 {
    display: flex;
    border: 1px solid red;
  }

  .aa11 {
    width: 20px;
    border: 1px solid red;
    margin-right: 10px;
  }

















  .a2 {
      margin: 0 auto;
    background: plum;
    width: 80px;
    overflow: hidden;
  }

  .aa1 {
    display: flex;
    border: 1px solid red;
  }

  .aa11 {
    width: 20px;
    border: 1px solid red;
    margin-right: 10px;
  }



.links {
    position: absolute;
    left: 0;
    top: 0;
    /* width: 88%; */
    right: 271px;
    bottom: 0;
    height: 36px;
    overflow: hidden;
}

.link {
    line-height: 36px;
    padding: 0px 25px 0px 8px;
    position: relative;
    border: 1px solid #e4e4e4;
    display: inline-block;
    color: #bbbbbb;
    cursor: pointer;
    min-width: 180px;
    border-bottom: none;
    text-align: center;
    height: 100%;
}

.link-active {
    background-color: #ffffff;
}

.link-dirty {
    position: absolute;
    top: 0;
    right: 20px;
    line-height: 25px;
}

.link-icon-close {
    position: absolute;
    top: 0;
    right: 4px;
}

.link-icon-close:hover {
    color: #000;
}

.link-title {
    line-height: 36px;
    color: #292929;
}
</style>
