<template>
  <div id="app">
    <button>12</button>
    <edj-component-confirm
      :confirmCallback="confirm"
      confirmText="confirm"
      cancelText="confirm"
    >
      <template v-slot:message>
        <p class="blue">asdasd</p>
      </template>
      <!-- <input type="checkbox" @change="change($event)" /> -->
    </edj-component-confirm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      message: "message"
    };
  },
  created() {},
  components: {},
  methods: {
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
