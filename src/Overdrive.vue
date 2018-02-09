<script>
  import ramjet from 'ramjet'
  const components = {}
  let readyToAnimate = false

  export default {
    name: 'overdrive',
    props: {
      id: {
        type: String,
        required: true
      },
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      return h(
        this.tag,
        this.$slots.default
      )
    },
    watch: {
      '$route': {
        handler (to, from) {
          if (to && from) {
            readyToAnimate = true
          }
        },
        immediate: true
      }
    },
    methods: {
      animateForward (a, b) {
        ramjet.hide(b.$el)
        ramjet.transform(a.$el, b.$el, {
          duration: 250,
          easing: ramjet.easeIn,
          done: () => {
            ramjet.show(b.$el)
          }
        })
      },
      animateBackward (a, b) {
        ramjet.hide(b.$el)
        ramjet.transform(b.$el, a.$el, {
          duration: 250,
          easing: ramjet.easeIn,
          done () {
            this.onChildRoute = false
          }
        })
      }
    },
    mounted () {
      components[this.id]
        ? components[this.id].push(this)
        : components[this.id] = [this]
      
      if (components[this.id].length === 2) {
        const [a, b] = components[this.id]
        if (!readyToAnimate) return
        this.animateForward(a, b)
      }
    },
    destroyed () {
      const [a, b] = components[this.id]
      this.animateBackward(a, b)
      components[this.id].pop()
    }
  }
</script>

<style scoped>
  div {
    display: inline-block;
  }
</style>
