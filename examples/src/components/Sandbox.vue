<template>
  <div>
    <overdrive id="el" key="a" v-if="!animate">
      <div class="circle w-24 h-24 bg-pink"></div>
    </overdrive>
    <overdrive id="el" key="b" v-if="animate">
      <div class="rect w-24 h-24 bg-blue"></div>
    </overdrive>
  </div>
</template>

<script>
  export default {
    name: 'sandbox',
    data () {
      return {
        animate: false
      }
    },
    mounted () {
      setInterval(() => {
        this.animate = !this.animate
      }, 2000)
    }
  }
</script>

<style>
  .circle {
    border-radius: 99px;
  }

  .rect  {
    position: absolute;
    right: 0;
  }
</style>