<template>
  <div class="flex items-center justify-center vh-100">
    <div class="fixed top-0 left-0 right-0 bottom-0 h-100 screen"></div>
    <overdrive :id="slug" :duration="400">
      <div class="flex" style="height: 520px">
        <div class="bg-black relative" style="width: 500px;">
          <img src="http://www.placecage.com/c/500/520" />
        </div>
        <div class="bg-white" style="width: 200px;"></div>
      </div>
    </overdrive>
  </div>
</template>

<script>
  export default {
    name: "detail",
    computed: {
      slug () {
        return this.$route.params.name
      }
    }
  }  
</script>

<style scoped>
  .screen {
    background: rgba(0, 0, 0, .5);
    z-index: -1;
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
</style>