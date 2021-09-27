<template>
  <Header :title="titleValue" :showLeft="isShowLeft" />
  <div class="container">
    <Order />
  </div>
  <!-- <NavBottom :propsActive="2"/> -->
</template>

<script>
import Order from "../components/Order";
import Header from "../components/Header";

// import NavHead from "../components/NavHead";

export default {
  name: 'OrderView',
  components: {
    Order,
    Header
  },
  data(){
    return{
      titleValue:"口罩預訂",
      isShowLeft:false
    }
  }
}
</script>

<style>
.logo{
  margin-top:20px;
  margin-bottom:20px;
}
p.toastInfo{
  font-size: 1.5em;
  line-height: 1.5em;
}
.toastInfo a{
  text-decoration: underline;
  color: #1989fa;
}
.van-nav-bar{
      background-color: #1989fa;
}
.van-nav-bar .van-ellipsis,.van-nav-bar .van-icon{
      color: #fff;
}
</style>