<template>
<van-row class="stickyHeader">
    <van-col span="20">
        <van-search
            v-model="searchVal"
            placeholder="請輸入搜尋關鍵詞"
            @search="onSearchProduct"
        />
    </van-col>
     <van-col span="4" class="sideNav">
         <van-icon name="cart-o"  :badge="productNum" @click="onClickToCart" size="32"  /> 
     </van-col>
</van-row>

</template>
<script>

export default {
    name: 'JPHeader',
    props:{
        productNum:Number,
        searchFun:Function
    },
    setup() {
        
    },
    data(){
        return {
            searchVal:'',
        }
    },
    methods:{
         onClickToCart(value){
            console.log(value);
            location.href="/cart"

        },
        //when value on change
        // onInputProduct(value){
        //     let inputValue="";
        //     console.log(value.data);
        //     inputValue=value.data==null ? "":value.data
        //     this.searchFun(inputValue);
        // },
        //when value on search
        onSearchProduct(value){
            console.log(value);
            this.searchFun(value);
        }
    }
}
</script>
<style scoped>
    .stickyHeader{
        position:sticky;
        top: 0;
        z-index: 999;
        height: 56px;
        line-height: 56px;
        background: #fff;
        border-bottom: solid #f7f8fa 1px
    }
    .stickyHeader .sideNav{
        cursor: pointer;
    }
    .stickyHeader i{
        float: right;
        line-height: 56px;
        margin-right: 0.5em;
    }
   
</style>