<template>
  <!-- 挂载点=test -->
  <div id="test">
    <!-- 插值表达式 msg -->
    <h1>{{ msg }}</h1>
    <!-- 数据: v-text:文本  v-html:转义为htm    -->
    <h2 v-text="err"></h2>
    <h3 v-html="warn" @click="handleClick"></h3>
    <template />
  </div>
</template>

<script>
export default {
  el: '#test',
  name: 'Test',
  data() {
    return {
      msg: 'this is components Test!',
      err: 'this is err!',
      warn: 'this is warn!',
      clickCounter: 0
    }
  },
  methods: {
    handleClick: function () {
      this.clickCounter += 1
      this.warn = 'Click Counter = ' + this.clickCounter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
