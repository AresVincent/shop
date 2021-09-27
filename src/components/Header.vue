<template>
  <van-nav-bar v-if=showLeft
        :title=title
        left-arrow
        @click-left="onClickLeft"
        :class="isJP"
    />
      <van-nav-bar v-else
        :title=title
        :class="isJP"

    />
</template>

<script>
// import {Toast} from "vant";
// import VueCookies from 'vue-cookies'
export default {
  name: 'Header',
  props:{
    title:String,
    showLeft:Boolean,
    isJP:String
  },
  setup() {
    const onClickLeft=()=>window.history.back();
    return{
      onClickLeft,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-nav-bar{
      background-color: #1989fa;
}
h2 {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  /*margin: 0 10px;*/
}
a {
  color: #42b983;
}
.van-ellipsis{
    color: #fff !important;
}
</style>
