<template>
  <div class="h-full overflow-hidden flex flex-col">
    <nav class="bg-grey-lightest p-4">
      <router-link class="no-underline mr-4 text-grey-darker" active-class="text-gray-darkest font-bold" to="/circle">Circle</router-link>
      <router-link class="no-underline mr-4 text-grey-darker" active-class="text-gray-darkest font-bold" to="/rectangle">Rectangle</router-link>
      <router-link class="no-underline mr-4 text-grey-darker" active-class="text-gray-darkest font-bold" to="/triangle">Triangle</router-link>
    </nav>
    <section class="flex-auto flex items-center justify-center flex-col">
      <h1 class="font-normal text-lg mb-4">Choose a shape!</h1>
      <div class="wrap bg-grey-lightest border p-3 relative">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .wrap {
    width: 70%;
    height: 600px;
  }
</style>
