<template>
  <overdrive id="element" :easing="easing">
    <div class="triangle"></div>
  </overdrive>
</template>

<script>
import * as easing from 'eases/quart-in-out'
export default {
  name: 'triangle',
  data () {
    return {
      easing
    }
  }
}
</script>

<style scoped>
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100px 100px 100px;
    border-color: transparent transparent pink transparent;
    float: right;
  }
</style>
