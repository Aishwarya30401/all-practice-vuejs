<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <hr>
   <h4>looper</h4>
   <ul>
    <li v-for="index in 5" v-bind:key="index">
     <p>{{index}} * 5 ={{index *5}}</p>
    </li>
   </ul>
   <hr>
   <button @click="yes = ! yes">YES</button>
   <p v-if="yes">vue is awesome</p>
   <p v-else>not like </p>
  <hr>
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
  <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
