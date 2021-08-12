<template lang="">
  <div>
    <v-btn v-on:click="onClick">{{clicks}}</v-btn>
  </div>
</template>
<script>
export default {
  Name: "IncrementalButton",
  data() {
    return {
      clicks: 0
    }
  },
  methods: {
    onClick() {
      this.clicks += 1
    }
  },
}
</script>
<style lang="">
  
</style>