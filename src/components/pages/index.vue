<template>
  <div>
      <Table :columns="columns1" :data="data1" stripe ></Table>
      <Page :total="total"  :current="pageNum"  size="small" show-total  @on-change="changePage"/>
  </div>
</template>

<script>
 export default {
        data () {
            return {
                pageNum:1,
                total:40,
                pageSize:10,
                columns1: [
                  {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                        
                    },
                    {

                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                         sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
          changePage(currentPage){
            this.pageNum = currentPage;
             alert("changes"+this.total+":"+currentPage);

          }

        }
    }
</script>


<style scoped>

  p{
    display: block;
    background: #ffe87c;
  }
</style>
<style>
  .ivu-table th{
    background-color: #c3dee0;
  }
</style>

