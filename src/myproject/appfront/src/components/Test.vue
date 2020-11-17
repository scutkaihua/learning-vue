<template>
  <div id="test">
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    <h3 v-test>{{ counter }}</h3>
    <h3>{{ cc | dataFormat }}</h3>
    <h1 @click="personClick">this is {{ msg }}</h1>
    <Person />
    <Person />
    <Person />
  </div>
</template>

<script>
import Person from './Person.vue'
export default {
  el: '#test',
  data() {
    return {
      a: '',
      b: '',
      counter: ''
    }
  },
  methods: {
    personClick: function () {
      this.msg = 'Test'
    }
  },
  watch: {
    a: function (val) {
      console.log('a=>')
      this.counter = parseFloat(this.a) + parseFloat(this.b)
    },
    b: function (val) {
      console.log('b=>')
      this.counter = parseFloat(this.a) + parseFloat(this.b)
    }
  },
  computed: {
    cc() {
      return parseFloat(this.a) + parseFloat(this.b)
    }
  },
  directives: {
    test: function (el, binding, vnode) {
      el.style.border = '1px solid red'
    }
  },
  components: { Person },
  // filters: {
  //   dataFormat: function (val) {
  //     console.log('val:' + val)
  //   }
  // }
  extends: Person
}
</script>
