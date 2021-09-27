<template>
<van-row>
    <van-col span="24">
        <div class="listContainer" v-for="(product,index) in shopList" :key='index'>
            <van-card v-if="product.quantity"
                currency="$"
                :price="product.price"
                :title="product.name"
                :num="product.quantity"
                :thumb="'../products/'+product.name+'.jpg'"
            >
              <template #footer>
                <van-button  type="warning" size="small" @click.stop="add" :data-name="product.productName" :data-quantity="product.quantity" :data-id="product.productId" :data-price="product.price">添加數目</van-button>
                <van-button  type="warning" size="small" @click.stop="reduce" :data-name="product.productName" :data-quantity="product.quantity" :data-id="product.productId" :data-price="product.price">減少數目</van-button>
            </template>
            </van-card>
          </div>
        <MsgBox v-if="shopList.length<1" :detail='msg' :imgUrl='url'/>
        <div class="bottomSubmit" id="bottomSubmit" >
          <!-- *100 for format 2200 is 22.00 -->
          <van-submit-bar class="barBg"  :price="(productFee+deliveryFee)*100" label="總價:" currency="$" button-text="確認訂單" @submit="onConfirm" >  
            <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
              <template #tip>
                <van-divider >小計金額</van-divider>
                <van-cell title="購買費用" :value="'HKD$'+productFee.toFixed(2)"  />
                <van-cell title="運費" :value="'HKD$'+deliveryFee.toFixed(2)" />
                <van-cell title="總結" :value="'HKD$'+(productFee+deliveryFee).toFixed(2)" size="large" />
              </template>
          </van-submit-bar> 
        </div> 
    </van-col>
</van-row>
</template>
<script>
import { Toast } from 'vant'
import MsgBox from "../components/MsgBox"
export default {
    name:'JPCart',
    components:{
      MsgBox
    },
    beforeMount(){

    },
    props:{
      shopList:Array,
      add:Function,
      reduce:Function,
      sumup:Number,
      deliveryFee:Number,
      productFee:Number
    },
    setup(){

    },
    data(){
        return{
          msg:'購物車暫時冇嘢喎,不如去首頁逛下先？',
          url:"../custom-empty.png",
        }
    },
     methods: {
      
      onConfirm(){
        if(this.shopList.length<1){
          Toast("購物車暫無任何物品，無法提交訂單！");
          return;
        }
        location.href='/submitForm'
      }
      
  },
}
</script>
<style scoped>
.listContainer{
  margin-top: 50px;
}
.bottomSubmit{
  margin-top: 270px;
}
.barBg .van-submit-bar__tip{
  background-color: #fff;
}
</style>