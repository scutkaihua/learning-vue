<template>
  <div id="test">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="a" />
    <input type="text" v-model="b" />
    <h3>{{ counter }}</h3>
    <h3>{{ cc | dataFormat }}</h3>
  </div>
</template>

<script>
export default {
  el: '#test',
  data() {
    return {
      msg: 'this is msg',
      a: '',
      b: '',
      counter: ''
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
  // filters: {
  //   dataFormat: function (val) {
  //     console.log('val:' + val)
  //   }
  // }
}
</script>
