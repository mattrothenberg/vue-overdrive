<template>
  <div class="flex items-center justify-center h-full">
    <ul class="list-reset">
      <li class="inline-block mr-8" v-for="(library, index) in libraries" :key="index">
        <overdrive :id="library.slug">
          <router-link :to="calcLink(library)">
            <div class="lib-tile w-24 h-24 rounded-full border hover:border-grey" :style="calcBackground(library)"></div>
          </router-link>
        </overdrive>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'character-index',
  data () {
    return {
      characters: []
    }
  },
  methods: {
    calcLink (library) {
      return `/libraries/${library.slug}`
    },
    calcBackground (library) {
      return {
        backgroundImage: `url(/static/${library.image})`
      }
    }
  },
  computed: {
    ...mapState(['libraries'])
  }
}
</script>

<style scoped>
  .wrap {
    width: 768px;
    margin: 0 auto;
  }
  
  .lib-tile {
    background-size: 70%;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
