<template>
  <input :value="value" @input="$emit('input', $event.target.value)" type="text">
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
