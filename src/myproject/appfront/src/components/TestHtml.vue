<template>
  <div>
    {{ msg }}
    <audio src="音频地址" controls="controls" preload="auto" muted loop autoplay></audio>
  </div>
</template>

<script>
export default {
  id: '#main',
  data() {
    return {
      msg: 'Hello HTML!'
    }
  }
}
</script>
