<template>
  <div id="test">
    <h3 @click="clickCounter">{{ counter }}</h3>
    <h3>{{ counter > 5 ? bigger : less }}</h3>
    <h3 v-text="counter"></h3>
    <p v-html="html"></p>
  </div>
</template>

<script>
export default {
  el: '#test',
  data() {
    return {
      counter: 1,
      ok: true,
      less: 'counter <= 5',
      bigger: 'counter >5',
      html: '<span style="color: red">This should be red</span>'
    }
  },
  methods: {
    clickCounter: function () {
      this.counter++ // ++
    }
  }
}
</script>
