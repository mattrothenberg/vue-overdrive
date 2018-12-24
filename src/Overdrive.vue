<script>
import ramjet from 'ramjet'
const components = {}
let returnTrip = {
  id: '',
  el: null,
  pos: null
}
let matchedEl = null 
let hasBustableCache = false
const getPosition = (node, addOffset = false) => {
  const rect = node.getBoundingClientRect()
  const computedStyle = window.getComputedStyle(node)
  const marginTop = parseInt(computedStyle.marginTop, 10)
  const marginLeft = parseInt(computedStyle.marginLeft, 10)

  return {
    top: `${(rect.top - marginTop) + ((addOffset ? 1 : 0) * (window.pageYOffset || document.documentElement.scrollTop))}px`,
    left: `${(rect.left - marginLeft)}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    borderRadius: computedStyle.borderRadius,
    position: 'absolute'
  }
}
export default {
  props: {
    tag: {
      type: String, default: 'div' },
    id: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      duration: 400
    },
    easing: {
      type: Function,
      default: ramjet.linear
    }
  },
  data () {
    return {
      animating: false,
      transformer: {}
    }
  },
  methods: {
    cache () {
      components[this.id] = {
        el: this.$slots.default,
        pos: getPosition(this.$el.firstChild)
      }
    },
    cloneAndAppend () {
      const { el, pos } = components[this.id]
      const clone = el[0].elm.cloneNode(true)
      clone.setAttribute('data-clone', true)
      Object.assign(clone.style, pos);
      document.body.appendChild(clone)
    },
    bustCache () {
      Object.keys(components).forEach(id => {
        components[id] = false
      })
    },
    animate (cb = () => {}) {
      const a = document.querySelector('[data-clone]')
      console.log(a)
      const b = this.$el.firstChild
      this.animating = true
      this.transformer = ramjet.transform(a, b, {
        duration: this.duration,
        easing: this.easing,
        appendToBody: true,
        done: () => {
          cb(a, b)
          this.animating = false
          this.$emit('animation-end')
        }
      })
      ramjet.hide(a, b)
    },
    handleFirstTimeMatch () {
      matchedEl = this.id
      this.cloneAndAppend()
      const cb = (a, b) => {
        ramjet.show(b)
      }
      this.$nextTick(() => {
        this.animate(cb)
        const clone = document.querySelector('[data-clone]')
        document.body.removeChild(clone)
        hasBustableCache && this.bustCache()
        this.cache()
      })
    },
    handleMatch () {
      this.cloneAndAppend()
      const cb = (a, b) => {
        ramjet.show(b)
        matchedEl = null
      }
      this.$nextTick(() => {
        this.animate(cb)
        const clone = document.querySelector('[data-clone]')
        document.body.removeChild(clone)
        this.cache()
      })
    }
  },
  mounted () {
    const match = components[this.id]
    if (match && !matchedEl) {
      this.handleFirstTimeMatch()
    } else if (match && matchedEl) {
      this.handleMatch()
      return
    } else {
      this.cache()
    }
  },
  beforeDestroy () {
    hasBustableCache = Object.keys(components).length > 1
    if (this.animating) {
      this.transformer.teardown()
    }
  },
  render (h) {
    return h(
      this.tag,
      [
        this.$slots.default
      ]
    )
  }
}
</script>
