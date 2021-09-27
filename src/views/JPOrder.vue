<template>
  <JPHeader :productNum="productCount" :searchFun="showProduct" />
  <div class="container">
    <JPOrder :addFunc="AddItem" :productItem="productList" :activeRow="activeType" :noProduct="isNoProduct" />
  </div>
</template>

<script>
import JPOrder from "../components/JPOrder";
import JPHeader from "../components/JPHeader";
import axios from "axios";
import {Toast} from "vant";


export default {
  name: 'JPOrderView',
  components: {
    JPOrder,
    JPHeader
  },
  beforeMount(){
    
    this.showProduct();
    //check product Num 
    let product=localStorage.getItem("product")==null ? []:JSON.parse(localStorage.getItem("product"));
    for(let i=0;i<product.length;i++){
      this.productCount+=product[i].quantity;
    }
  },
  data(){
    return{
      productCount:0,
      activeType:0,
      productList:[],
      isNoProduct:false
    }
  },
  methods:{
    AddItem(e){
      let product=localStorage.getItem("product")==null ? []:JSON.parse(localStorage.getItem("product"));
      let target=e.target.dataset;
      //if has same id,num+=1
      for(let i=0;i<product.length;i++){
        if(target.id==product[i].productId){
          product[i].quantity+=1;
          localStorage.setItem("product",JSON.stringify(product)); 
          this.productCount+=1;
          return;
        }        
      }
      //else insert new object into array
      product.push({"productId":target.id,"name":target.name,"price":target.price,"quantity":1});
      localStorage.setItem("product",JSON.stringify(product)); 
      this.productCount+=1;
    },
    showProduct(product=""){
     const headers = {
        "Content-Type" : "application/json; charset=utf-8",
      };
      axios.get("/preorder/productList?productName="+product,{headers}).then((res)=>{
          if(res.status==200){
           let data=res.data;
           console.log(product);
           this.productList=[];
          if(product!=""){
           for(let i=0;i<data.length;i++){
             console.log("has product name");
             this.productList.push(data[i]);
             this.isNoProduct=false;
           }
          }else{
            for(let i=0;i<data.length-1;i++){
              console.log("has no product name")
              this.productList.push(data[i]);
              this.isNoProduct=false;
            }
          }
          
           if(data.length<1){
             this.productList=[];
             this.isNoProduct=true;
           }
          }
          // this.activeType=0;
          console.log(this.productList);
      }).catch(error => {
            console.error("There was an error!", error.message);
            Toast(error.message)
            this.showLoading=false;
      });
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
.sideNav i .van-badge{
      top: 16px;
      cursor: pointer;

}
.rightContainer .van-card__desc{
    color: red;
}
.rightContainer .van-card__title{
  font-size: 16px;
}
</style>