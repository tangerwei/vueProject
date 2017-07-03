<template>
<div class="self-auth-table">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '等级一', value: '等级一' }, { text: '等级二', value: '等级二' },{ text: '管理员', value: '管理员' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template scope="scope">
        <el-tag
          :type="scope.row.tag === '管理员' ? 'danger' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市长宁区天山路 1518 弄',
          tag: '等级一'
        }, {
          date: '2016-05-04',
          name: '王二虎',
          address: '上海市浦东新区太原路 1517 弄',
          tag: '等级二'
        }, {
          date: '2016-05-01',
          name: '王大虎',
          address: '上海市嘉定区四平路 1519 弄',
          tag: '等级一'
        }, {
          date: '2016-05-03',
          name: '王虎',
          address: '上海市青浦区怀宁路 1516 弄',
          tag: '管理员'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
<style lang="scss" scoped>
.self-auth-table{
  margin-left:10px;
}
</style>