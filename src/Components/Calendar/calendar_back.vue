<template>
    <div class="block">
    <span class="demonstration">时间范围</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      :picker-options="pickerOptions"
      placeholder="选择时间范围"
      @change="changeTime"
      align="center">
    </el-date-picker>
  </div>
    <el-table :data="tableData2" style="width: 100%" row-class-name="positive-row">
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    </el-table>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    computed:{
        // tableData(){
        //     // console.log(this.$store.state.module_user.planData);
        //     return this.$store.state.module_user.planData
        // }
    },
    methods:{
        changeTime(val){
            var plandate = this.formate(val)
            this.$store.dispatch({
                type:"module_user/updatePlanTable",
                plandate
            });
            //this.tableData = this.$store.state.module_user.planData;
        },
        formate(val){
            var arr = val.split(" - ");
            console.log(arr);
            //start
            var start = new Date(arr[0].split(" ")[0]);
            var arr1 = arr[0].split(" ")[1].split(":");
            start.setHours(arr1[0]);
            start.setMinutes(arr1[1]);
            start.setSeconds(arr1[2]);
            //end
            var end = new Date(arr[1].split(" ")[0]);
            var arr2 = arr[1].split(" ")[1].split(":");
            end.setHours(arr2[0]);
            end.setMinutes(arr2[1]);
            end.setSeconds(arr2[2]);
            return {
                start,
                end
            }
        },
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        }
    }
  };
</script>
<style lang="scss" scoped>
  .el-table{
        .info-row {
          background: #c9e5f5;
        }
        .positive-row {
          background: #e2f0e4;
        }
  } 
</style>