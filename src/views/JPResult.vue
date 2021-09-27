<template>
  <Header :title="titleValue" :showLeft="isShowLeft"  isJP="isJPCart"  />
  <div class="container">
    <JPResult />
  </div>
  <!-- <NavBottom :propsActive="2"/> -->
</template>

<script>
import JPResult from "../components/JPResult";
import Header from "../components/Header";

export default {
  name: 'JPResultView',
  components: {
    JPResult,
    Header
  },
  data(){
    return{
      titleValue:"購買結果",
      isShowLeft:true
    }
  }
}
</script>

<style>
.logo{
  margin-top:20px;
  margin-bottom:20px;
}
.van-nav-bar{
      background-color: #1989fa;
}
.van-nav-bar .van-ellipsis,.van-nav-bar .van-icon{
      color: #fff;
}
</style>