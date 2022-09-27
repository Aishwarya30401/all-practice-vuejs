<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <hr>
   <!-- looping statements -->
   <h4>looper</h4>
   <ul>
    <li v-for="index in 5" key="index">
     <p>{{index}} * 5 ={{index *5}}</p>
    </li>
   </ul>
   <hr>
   <button @click="yes = ! yes">YES</button>
   <p v-if="yes">vue is awesome</p>
   <p v-else>not like </p>





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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
