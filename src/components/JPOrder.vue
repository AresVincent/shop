<template>
    <van-row>
        <van-col span="6" class="sideNav">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item class="leftTag" data-id="0" title="日本京都関製菓" @click="onScrollTo"  />
                <van-sidebar-item class="leftTag" data-id="1" title="日本京都百年茶店ちきりや (CHIKIRIYA)" @click="onScrollTo" />
                <van-sidebar-item class="leftTag" data-id="2" title="日本京都鳴海屋米餅" @click="onScrollTo" />
                <van-sidebar-item class="leftTag" data-id="3" title="日本四國海鮮小食" @click="onScrollTo" />
                <van-sidebar-item class="leftTag" data-id="4" title="日本京都大文字飴本舖" @click="onScrollTo" />
            </van-sidebar>
        </van-col>
        <van-col span="18" class="rightContent" >
            <!-- <div class="rightContainer" >
            <van-cell value="日本京都百年茶店ちきりや (CHIKIRIYA)" id="jp01" />
            <van-card
                v-model="type"
                price="2.00"
                currency="$"
                desc="描述信息"
                title="商品标题"
                thumb="products/日本京都產大麥綠茶.jpg"
                @click="OnClickToBuy"
            >
            </van-card>
            </div> -->
            <MsgBox v-if="noProduct" :detail="msg"  :imgUrl='url' />
            <div class="rightContainer" v-for="(item,index) in productItem" :key='index'>
                <van-cell :value="item.type" :id="'jp0'+index"/>
                <div v-for="(product,index) in item.productList" :key="index">
                    <van-card
                        currency="$"
                        :price="product.sellingPrice.toFixed(2)"
                        :origin-price="product.originalPrice.toFixed(2)"
                        :title="product.productName"
                        :thumb="'../products/'+product.productName+'.jpg'"
                        :desc="product.description"

                    >
                     <template #footer>
                        <van-button  type="warning" size="small" @click.stop="addFunc" :data-name="product.productName" :data-id="product.productId" :data-price="product.sellingPrice.toFixed(2)">加入購物車</van-button>
                    </template>
                    </van-card>
                </div>
            </div>
            
        </van-col>
    </van-row>
</template>
<script>
import { Toast } from 'vant';
import MsgBox from "../components/MsgBox"

export default {
    name:"JPOrder",
     props:{
        addFunc:Function,
        productItem:Array,
        noProduct:Boolean
    },
    components:{
        MsgBox,
    },
    beforeMount() {
        window.addEventListener('scroll',this.onScroll,true);
    },
    setup() {
        
    },
    data(){
        return {
            active:true,
            type:"cake",
            activeKey:0,
            msg:'沒有相關搜尋結果！',
            url:"search"

        }
    },
    destroy(){
        window.removeEventListener("scroll",this.onScroll,true);
    },
    methods:{
       onScroll(){
           const navContents=document.querySelectorAll(".rightContainer");
           if(navContents==0){
               this.activeKey=0;
               this.isNoProduct=true;
               return;
           }
           const offsetTopArr=[];
            navContents.forEach(item => {
            offsetTopArr.push(item.offsetTop)
            });
            // Get scrollTop
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            // detect which archor
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                if (scrollTop+114 >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            // check if bottom
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
            if((scrollTop+windowHeight)>=scrollHeight){
                Toast("已經到底部了！");
                this.activeKey = (navContents.length-1);
            }else{
                this.activeKey = navIndex;
            }
       },
        onScrollTo(e){
            // console.log(e);
            const navContents=document.querySelectorAll(".rightContainer");
            if(navContents.length<0){
                window.scrollTo(0,0);
                return;
            }
            const offsetTopArr=[];
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            });
            
            window.scrollTo(0,(offsetTopArr[e]-57));

        }
        
    }
}
</script>
<style scoped>
.sideNav .van-sidebar{
    position: fixed;
}
.sideNav .van-sidebar-item--select::before{
    height: 100%;
}
.van-card:hover{
    background: #ECEBEB;
    cursor: pointer;
}

</style>