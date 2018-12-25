<template>
  <div class="tc">
    <div class="grid">
      <overdrive
        :duration="300"
        @animation-end="handleAnimationEnd"
        v-for="(element, index) in elements"
        :key="element"
        :id="element"
      >
        <div class="h-100 w-100 bg-silver">
          <router-link class="relative db w-100 h-100" :to="`/tiles/${element}`">
            <img :src="`http://www.placecage.com/c/200/${200 + (index * 2)}`" />
            {{element}}
          </router-link>
        </div>
      </overdrive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tiles",
  data () {
    return {
      loaded: false,
      elements: [
        'a',
        'b',
        'c',
        // 'd',
        // 'e',
        // 'f',
        // 'g'
      ]
    }
  },
  methods: {
    handleAnimationEnd () {
      console.log('ya done')
    },
    toggle () {
      this.loaded = !this.loaded
    }
  },
}
</script>

<style>
  .grid {
    display: grid;
    padding: 16px;
    grid-gap: 16px;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(3, 200px);
    margin: 0 auto;
  }

  .grid-cell {
    background: #ccc;
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