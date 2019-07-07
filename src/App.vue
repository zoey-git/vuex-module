<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <p>count: {{count}}</p>
    <button @click="ADD_COUNT">count++</button>
    <button @click="SUB_COUNT">count--</button>
    <button @click="DEL_COUNT">重置count</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ADD_COUNT, DEL_COUNT, SUB_COUNT } from './store/types'
export default {
  name: 'app',
  data() {
    return { }
  },
  mounted() { },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions([ADD_COUNT, DEL_COUNT, SUB_COUNT])
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
