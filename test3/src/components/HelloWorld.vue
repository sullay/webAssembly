<template>
  <div class="hello">
  </div>
</template>

<script>
import wasm from '../util/wasm'
export default {
  data () {
    return {

    }
  },
  created () {
    wasm.loadWebAssembly('/add.wasm')
      .then(instance => {
        console.log(instance.exports._add(1, 2))
        console.log(instance.exports._sub(8, 2))
      })
  }
}
</script>
<style scoped>
</style>
