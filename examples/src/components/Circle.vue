<template>
  <overdrive id="element" :easing="easing">
    <div class="circle"></div>
  </overdrive>
</template>

<script>
import * as easing from 'eases/quart-in-out'
export default {
  name: 'el-circle',
  data () {
    return {
      easing
    }
  }
}
</script>

<style scoped>
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: blue;
    float: left;
  }
</style>
