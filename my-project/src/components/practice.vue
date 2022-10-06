<div id="app">
 <ul>
   <li v-for="x in todos">
   {{ x.text }}
   </li>
  </ul>
</div>

<script>
myObject = new Vue({
    el: '#app',
    data: {
    todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue.js' },
        { text: 'Build Something Awesome' }
        ]
    }
})