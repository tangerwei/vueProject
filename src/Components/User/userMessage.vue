<template>
<div class="self-cardConatier">
<el-carousel :autoplay="autoplay" type="card" height="200px">
    <el-carousel-item v-for="item in picList" :key="item.index">
      <div class="self-card-pic">
        <img :src="item.src" :alt="item.alt">
      </div>
    </el-carousel-item>
  </el-carousel>
</div>
  <el-carousel type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    data(){
      return {
        autoplay:false,
        picList:[{
          index:1,
          src:"../static/images/loginback.jpg",
          link:"www.baidu.com",
          alt:"百度一下，你就知道"
        },{
          index:2,
          src:"../static/images/loginback.jpg",
          link:"www.sogou.com",
          alt:" 不满足于知道，试试搜狗！"
        },{
          index:3,
          src:"../static/images/loginback.jpg",
          link:"www.google.com",
          alt:"完美的搜索引擎"
        }]
      }
    }
  }
</script>
<style>
.self-cardConatier{
  width:600px;
}
.self-card-pic{
  height:100%;
  width:100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>