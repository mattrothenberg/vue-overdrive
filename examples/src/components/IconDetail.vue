<template>
  <overdrive :id="id" @animation-end="handleAnimEnd">
    <div class="icon-detail pin absolute flex items-center justify-center" :style="background">
      <transition name="slide-fade" @after-leave="handleLeave">
        <div class="flex flex-col" v-if="loaded">
          <h1 class="mb-4">{{ icon.color }}</h1>
          <button @click="goBack">Go Back</button>
        </div>
      </transition>
    </div>
  </overdrive>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'icon-detail',
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['getIconById']),
    icon () {
      return this.getIconById(this.$route.params.id)
    },
    id () {
      return this.$route.params.id
    },
    background () {
      return {
        backgroundColor: this.icon.color
      }
    }
  },
  methods: {
    goBack () {
      this.loaded = false
    },
    handleAnimEnd () {
      this.loaded = true
    },
    handleLeave () {
      this.$router.push('/icons')
    }
  }
}
</script>


<style scoped>
  .icon-detail {
    z-index: 9999;
    width: 100%;
    height: 100%;
  }
</style>
