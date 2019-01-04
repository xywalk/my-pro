<template>
  <div>
    <div>{{ inputVal }}</div>
  </div>
</template>

<script>
export default {
  name: 'SecondPage',
  computed: {
    inputVal () {
      return this.$store.state.val
    }
  }
}
</script>

<style scoped>

</style>
