<script>
import ramjet from 'ramjet'

const getPosition = (node) => {
  const rect = node.getBoundingClientRect();
  const computedStyle = getComputedStyle(node);
  const marginTop = parseInt(computedStyle.marginTop, 10);
  const marginLeft = parseInt(computedStyle.marginLeft, 10);
  return {
      top: (rect.top - marginTop) + ((window.pageYOffset || document.documentElement.scrollTop)) + 'px',
      left: (rect.left - marginLeft) + 'px',
      width: rect.width + 'px',
      height: rect.height + 'px',
      margin: computedStyle.margin,
      padding: computedStyle.padding,
      position: 'absolute'
  }
}

export default {
  name: 'overdrive',
  props: {
    id: {
      type: String,
      required: true 
    },
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    duration: {
      type: Number,
      required: false,
      default: 250
    }
  },
  computed: {
    comps () {
      return this.$odStore.state.components[this.id]
    }
  },
  watch: {
    comps: {
      handler (nv, ov) {
        const self = this
        if (!nv && !ov) return
          this.$nextTick(() => {
            const [a,b] = nv
            const clone = a.el.cloneNode(true)
            Object.assign(clone.style, a.prevPosition)
            document.body.appendChild(clone)
            ramjet.hide(b.el)
            ramjet.hide(clone)
            ramjet.transform(clone, b.el, {
              duration: self.duration,
              easing: ramjet.easeIn,
              done () {
                ramjet.show(b.el)
                document.body.removeChild(clone)
                self.$odStore.dispatch('REMOVE_COMPONENT', {id: self.id})
                self.$emit('animation-end')
              }
            })
          })
        },
        immediate: true
      }
  },
  mounted () {
    const el = this.$slots.default[0].elm
    this.$odStore.dispatch('ADD_COMPONENT', {
      id: this.id,
      el,
      prevPosition: getPosition(el)
    })
  },
  render (h) {
    return h(
      this.tag,
      this.$slots.default
    )
  }
}
</script>