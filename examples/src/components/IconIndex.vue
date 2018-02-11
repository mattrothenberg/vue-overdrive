<template>
  <div class="grid h-full">
    <router-view></router-view>
    <div class="icon relative" v-for="(icon, index) in icons" :key="index" :style="background(icon)">
      <overdrive :id="icon.id">
        <router-link :to="url(icon)" class="pin absolute"></router-link>
      </overdrive>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'icon-index',
  computed: {
    ...mapState(['icons'])
  },
  methods: {
    background (icon) {
      return {
        backgroundColor: icon.color
      }
    },
    url (icon) {
      return `/icons/${icon.id}`
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .icon {
    border-radius: 4px;
    height: 100%;
    width: 100%;
    transition: all .2s ease-out;
  }

  .icon:hover {
    transform: translateY(2px);
  }
</style>
