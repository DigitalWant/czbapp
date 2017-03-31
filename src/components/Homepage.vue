<template lang="html">
  <div id="homepage">
    <mast-head></mast-head>
  </div>
</template>

<script>
import MastHead from './MastHead'

export default {
  name: 'homepage',
  components: {
    MastHead,
  },
}
</script>

<style lang="less">
</style>
<style lang="scss">
#homepage {
  width: 100vw;
  height: 100vh;
}
</style>
