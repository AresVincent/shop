<template>
    <van-empty :image="imgUrl" :description="detail" class="topMsgBox" />
</template>
<script>
export default {
    name:"MsgBox",
    props:{
        detail:String,
        imgUrl:String
    },
    setup() {
        
    },
}
</script>
<style scoped>
    .topMsgBox{
        padding: 50px 0;
    }
</style>