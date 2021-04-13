<template>
  <div id="app">
    <button @click="click2">12</button>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 1,
      message: "message"
    };
  },
  created() {},
  components: {},
  methods: {
    click2(){
      this.$loading.show()
      this.$toast.show({message: this.text++})
    },
    click() {
      this.$confirm.show({
        confirmText: "confirm",
        message: "asdas",
        cancelText: "cancel",
        cancelCallback: function() {
          console.log(this);
          this.$confirm.close();
        }.bind(this),
        confirmCallback: function() {
          alert("23");
        }
      });
    },
    change(e) {
      console.log(e, this);
    },
    confirm() {
      console.log(this); //此处的this为父级#app
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.blue {
  color: blue;
}
</style>
