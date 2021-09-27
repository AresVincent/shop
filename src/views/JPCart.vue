<template>
  <Header :title="titleValue" :showLeft="isShowLeft" isJP="isJPCart" />
  <div class="container">
    <JPCart :shopList="productList" :sumup="sumupPrice" :deliveryFee="logisticPrice" :productFee="productPrice" :add="addItem" :reduce="reduceItem" />
  </div>
  <!-- <NavBottom :propsActive="2"/> -->
</template>

<script>
import JPCart from "../components/JPCart";
import Header from "../components/Header";

export default {
  name: 'JPCartView',
  components: {
    JPCart,
    Header
  },
  beforeMount(){
    //get product list from localStorage
    this.productList=localStorage.getItem("product")==null ? []:JSON.parse(localStorage.getItem("product"));
    this.calculateFee();
  },
  data(){
    return{
      titleValue:"購物車",
      isShowLeft:true,
      productList:[],
      sumupPrice:0,
      productPrice:0,
      logisticPrice:22,
      isJPCart:'jpCart',
    }
  },
  methods:{
    addItem(e){
      let target=e.target.dataset;
      let product=this.productList;
      console.log(product);
      for(let i=0;i<product.length;i++){
        if(target.id==product[i].productId){
          product[i].quantity+=1;
          break;
        }
      }
      this.calculateFee();
      localStorage.setItem("product",JSON.stringify(product));
    },
    reduceItem(e){
      let target=e.target.dataset;
      let product=this.productList;
      console.log(product);
      for(let i=0;i<product.length;i++){
        if(target.id==product[i].productId){
          product[i].quantity-=1;
          if(product[i].quantity<1){
            console.log(product[i].quantity);
            product.splice(i,1);
          }
          break;
        }
      }
      this.calculateFee();
      localStorage.setItem("product",JSON.stringify(product));
    },
    calculateFee(){
      this.productPrice=0;
      if(this.productList.length<1){
        this.logisticPrice=0;
      }else{
        this.logisticPrice=22;
      }
      let number=0;
      for(let i=0;i<this.productList.length;i++){
       this.productPrice+=(this.productList[i].price*this.productList[i].quantity);
       number+=this.productList[i].quantity;
     }
      if(this.productPrice>=250||number>=5){
        this.logisticPrice=0;
      }
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
.bottomSubmit .van-submit-bar__text{
  font-size: 16px;
}

.isJPCart.van-nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ff976a;
}
.barBg .van-submit-bar__tip{
  background-color: #fff;
}
</style>