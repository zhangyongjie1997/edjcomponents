<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  data(){
    return {
      text: ""
    }
  },
  created(){
  },
  components: {},
  methods:{
    handlePhoneInput(e){
      console.log(e)
    },
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
}
</style>
