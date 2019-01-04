<template>
  <div class="hello">
    <input type="text" v-model="val"> <br> <br>
    <input type="text" v-model="val"> <br> <br>
    <button @click="saveVal" class="saveButton">SAVE</button>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    saveVal () {
      this.$store.commit('SAVE_VAL', this.val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
