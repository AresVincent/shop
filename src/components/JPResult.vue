<template>
    <div class="result">
        <!--  -->
        <p>落單成功！</p>
        <van-divider :style="{color:'#000',borderColor: '#ababab',fontSize:'1.2em'}">訂單資料</van-divider>
        <van-cell-group>
            <van-field v-model="name" label="姓名" size="large" required readonly/>
            <van-field v-model="phone" label="電話號碼" size="large" required readonly/>
            <van-field v-model="email" label="電子郵件" size="large" required readonly/>
            <van-field v-model="price" label="價格" size="large" required readonly/>
            <van-field v-model="address" label="收貨地址" size="large" required readonly/>
        </van-cell-group>
        <p>訂單號:</p>
        <h1>{{orderNo}}</h1>
        <article class="articleContent">
            下單後，請向攤位員工出示訂單號並支付{{price}},否則將視為無效訂單！
        </article>
    </div>
</template>
<script>
import VueCookies from "vue-cookies";

export default {
    name:'JPResult',
    beforeMount(){
        this.name=VueCookies.get("name");
        this.phone=VueCookies.get("phone");
        this.email=VueCookies.get("email")
        this.orderNo=VueCookies.get("orderNo");
        this.address=VueCookies.get("address");
        this.price='HKD$'+VueCookies.get("totalPrice")+'.00';

    },
    data(){
        return{
            name:'',
            phone:'',
            email:'',
            price:'',
            orderNo:'',
            address:''
        }
    },
    setup() {
        
    },
    methods:{

    }
}
</script>
<style scoped>
.result{
    margin-top: 72px;
}
p{
    font-size: 1.5em;
    text-align: center;
}
h1{
    font-size: 1.5em;
    text-align: center;
    color: red;
    margin-top:0;
}
.articleContent{
    font-size: 1.2em;
    line-height: 1.2em;
    padding:5px 20px;
    text-align: center;
    
}
</style>