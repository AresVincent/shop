<template>
    <div class="result">
        <!--  -->
        <p>口罩預約成功！</p>
        <van-divider :style="{color:'#000',borderColor: '#ababab',fontSize:'1.2em'}">訂單資料</van-divider>
        <van-cell-group>
            <van-field v-model="name" label="姓名" size="large" required readonly/>
            <van-field v-model="phone" label="電話號碼" size="large" required readonly/>
            <van-field v-model="email" label="電子郵件" size="large" required readonly/>

        </van-cell-group>
        <p>訂單號:</p>
        <h1>{{orderNo}}</h1>
        <article class="articleContent">
            下單後，請向4px員工出示訂單號並支付HKD$80,否則將視為無效訂單！
        </article>
    </div>
</template>
<script>
import VueCookies from "vue-cookies";

export default {
    name:'Result',
    props:{orderNum:String},
    beforeMount(){
        this.name=VueCookies.get("name");
        this.phone=VueCookies.get("phone");
        this.email=VueCookies.get("email");
        this.orderNo=VueCookies.get("orderNo");
    },
    data(){
        return{
            name:'',
            phone:'',
            email:'',
            orderNo:'',
        }
    },
    setup() {
        
    },
    methods:{

    }
}
</script>
<style scoped>
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