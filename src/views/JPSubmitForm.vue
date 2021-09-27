<template>
      <Header :title="titleValue" :showLeft="isShowLeft"  isJP="isJPCart"   />
  <div class="container submitContainer">
    <JPSubmitForm />
  </div>
</template>
<script>
import JPSubmitForm from "../components/JPSubmitForm";
import Header from "../components/Header";
export default {
    name:'JPSubmitFormView',
    components:{
        JPSubmitForm,
        Header
    },
    setup() {
        
    },
    data(){
        return{
            titleValue:"下單資料",
            isShowLeft:true,
            isJPCart:'jpCart'
        }
    }
}
</script>
<style scoped>
    .submitContainer{
        margin-top: 46px;
    }
</style>