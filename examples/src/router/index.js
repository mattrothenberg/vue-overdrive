import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Circle from '@/components/Circle'
import Rectangle from '@/components/Rectangle'
import Triangle from '@/components/Triangle'
import LibraryIndex from '@/components/LibraryIndex'
import LibraryDetail from '@/components/LibraryDetail'
import Shapes from '@/components/Shapes'
import IconIndex from '@/components/IconIndex'
import IconDetail from '@/components/IconDetail'
import Sandbox from '@/components/Sandbox'
import Tiles from '@/components/Tiles'
import TileDetail from '@/components/TileDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sandbox',
      components: {
        main: Sandbox
      }
    },
    {
      path: '/shapes',
      components: {
        main: Shapes
      },
      children: [
        {
          path: '/circle',
          name: 'Circle',
          component: Circle
        },
        {
          path: '/rectangle',
          name: 'Rectangle',
          component: Rectangle 
        },
        {
          path: '/triangle',
          name: 'Triangle',
          component: Triangle 
        }
      ]
    },
    {
      path: '/libraries',
      name: 'libraries',
      components: {
        main: LibraryIndex 
      }
    },
    {
      path: '/libraries/:slug/',
      name: 'library-detail',
      components: {
        main: LibraryDetail
      }
    },
    {
      path: '/tiles',
      name: 'tiles',
      components: {
        main: Tiles 
      }
    },
    {
      path: '/tiles/:name/',
      name: 'tile-detail',
      components: {
        main: TileDetail 
      }
    },
    {
      path: '/icons',
      components: {
        icon: IconIndex
      }
    },
    {
      path: '/icons/:id',
      components: {
        icon: IconDetail
      }
    }
  ]
})
