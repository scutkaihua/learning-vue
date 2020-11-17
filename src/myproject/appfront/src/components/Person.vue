<template>
  <div id="person">
    <h1>===={{ msg }}====</h1>
  </div>
</template>

<script>
export default {
  el: '#person',
  data() {
    return {
      msg: 'Person'
    }
  },
  methods: {
    change: function (d) {
      this.msg = d
    }
  }
}
</script>
