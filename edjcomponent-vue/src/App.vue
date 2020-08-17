<template>
  <div id="app"></div>
</template>
<script>
import utils from "./scripts/utils";
export default {
  data() {
    return {
      text: ""
    };
  },
  created() {
    console.log(this);
    this.$confirm({
      message: "asd",
      confirmText: "confirm",
      cancelText: "cancel"
    });
    console.log(new utils.pageInit().getCityId().then(res => console.log(res)));
  },
  components: {},
  methods: {
    handlePhoneInput(e) {
      console.log(e);
    },
    input(e) {
      this.text = e;
      console.log(this.text);
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
</style>
