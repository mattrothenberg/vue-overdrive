<p align="center">
<img width="120" src="https://d2ffutrenqvap3.cloudfront.net/items/2g0U2k0W2b3S2b1E2y08/logo.svg"/>
</p>

<h2 align="center">vue-overdrive</h2>
<h5 align="center">Super easy magic-move transitions for Vue apps, powered by Ramjet</h5>
<p align="center">
  <a href="https://badge.fury.io/js/vue-overdrive">
    <img src="https://badge.fury.io/js/vue-overdrive.svg" alt="npm version">
  </a>
</p>


## Project Install

``` bash
# npm
npm install vue-overdrive
```

``` bash
# yarn
yarn add vue-overdrive
```

## Examples
### 1) Morph Shapes ([source](examples/src/router/index.js#L22-L38))
https://vue-overdrive.netlify.com/#/shapes

<img src="https://imgur.com/YRwM2T8.gif" alt="Shape morph" width="320"/>

### 2) Material-esque transformation ([source](examples/src/router/index.js#L41-L53))
https://vue-overdrive.netlify.com/#/libraries

<img src="https://imgur.com/B6BYxRv.gif" alt="Material transformation" width="320"/>

### 3) iOS-inspired icon effect ([source](examples/src/router/index.js#L54-L65))
https://vue-overdrive.netlify.com/#/icons

<img src="https://imgur.com/vrb7QQ2.gif" alt="iOS icon effect" width="320"/>


## What is it?
A Vue.js port of the amazing [React Overdrive](https://github.com/berzniz/react-overdrive), using [Ramjet](https://github.com/Rich-Harris/ramjet) under the hood.

## How does it work?
Just like with React Overdrive, wrap any two elements in a <overdrive id=""></overdrive> component. Add the same id to create a transition between the elements.

### Import and install

```js
import Overdrive from 'vue-overdrive'
Vue.use(Overdrive)
```

or

```js
import { VOverdrive } from 'vue-overdrive'

// Register the component locally
components: {
  'overdrive': VOverdrive
}
```

### Set up (at least) two different routes with Vue Router

Inside your routes file –
```js
{
  path: '/circle',
  name: 'Circle',
  component: Circle
},
{
  path: '/rectangle',
  name: 'Rectangle',
  component: Rectangle 
}
```

### Scaffold your components

In `Circle.vue`:
```vue
<template>
  <overdrive id="element" :easing="easing" :duration="350">
    <div class="circle"></div>
  </overdrive>
</template>

<script>
import * as easing from 'eases/quart-in-out' // Bring 'yr own easing functions!
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
    border-radius: 50%;
    background: blue;
    float: left;
  }
</style>

```

And in `Rectangle.vue` –

```vue
<template>
  <overdrive id="element">
    <div class="rectangle"></div>
  </overdrive>
</template>
```

### Usage with `v-if`
If you're not using Vue Router (and instead using Vue's built-in `v-if` directive), be sure to specify a unique `key` prop on each instance of `<overdrive>`

```vue
<overdrive key="a" id="window" :duration="450" v-if="!windowOpen">
  <!-- some element -->
</overdrive>
<overdrive key="b" id="window" :duration="450" v-if="windowOpen">
  <!-- some element -->
</overdrive>
```

### Customize it (API)


| Prop     	| Description                                          	| Default Value   	|
|----------	|------------------------------------------------------	|-----------------	|
| id       	| Required. A unique string or number to identify the component. 	|                 	|
| tag      	| Wrapping element type                                	| `div`           	|
| duration 	| Animation duration (in milliseconds)                 	| `250`           	|
| easing   	| Easing Function (must pass a function)               	| `ramjet.linear` 	|

| Event            	| Description                                   	|
|------------------	|-----------------------------------------------	|
| `@animation-end` 	| Fires once the ramjet animation has completed 	|


## Todo
- [ ] Minimize the jank (especially with `v-if`)
- [x] Find a non-Vuex solution for state management
