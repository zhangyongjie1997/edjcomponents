<template>
  <div id="app">
    aaa
    <cus-input :value="text" @input="input">111</cus-input>
  </div>
</template>
<script>
import CusInput from "./components/login/login";
export default {
  data(){
    return {
      text: ""
    }
  },
  created(){
    console.log(this)
  },
  components: {
    CusInput
  },
  methods:{
    input(e){
      this.text = e;
      console.log(this.text)
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
