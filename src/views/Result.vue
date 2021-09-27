<template>
  <Header :title="titleValue" :showLeft="isShowLeft" />
  <div class="container">
    <Result />
  </div>
  <!-- <NavBottom :propsActive="2"/> -->
</template>

<script>
import Result from "../components/Result";
import Header from "../components/Header";

export default {
  name: 'ResultView',
  components: {
    Result,
    Header
  },
  data(){
    return{
      titleValue:"預訂結果",
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