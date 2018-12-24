<template>
  <div id="app">
    <router-view name="main"/>
    <!-- <div class="icon-wrap inline-block relative">
      <transition name="fade">
        <router-view name="icon"></router-view>
      </transition>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'styles/tailwind.css';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  height: 100%;
}

#app {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.icon-wrap {
  width: 500px;
  height: 500px;
  transform: translateY(16px) translateX(16px);
}
</style>
