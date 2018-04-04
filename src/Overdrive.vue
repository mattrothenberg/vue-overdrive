<script>
import ramjet from 'ramjet'

const components = {} 

export default {
  name: 'overdrive',
  props: {
    id: {
      type: [String, Number],
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
    },
    easing: {
      type: Function,
      required: false,
      default: ramjet.linear
    }
  },
  data () {
    return {
      cachedPos: {}
    }
  },
  methods: {
    cachePosition () {
      this.cachedPos  = this.getPosition()
    },
    getPosition (addOffset = false) {
      const node = this.$el.firstChild;
      const rect = node.getBoundingClientRect();
      const computedStyle = getComputedStyle(node);
      const marginTop = parseInt(computedStyle.marginTop, 10);
      const marginLeft = parseInt(computedStyle.marginLeft, 10);
      return {
        top: (rect.top - marginTop) + ((addOffset ? 1 : 0) * (window.pageYOffset || document.documentElement.scrollTop)) + 'px',
        left: (rect.left - marginLeft) + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        margin: computedStyle.margin,
        padding: computedStyle.padding,
        borderRadius: computedStyle.borderRadius,
        position: 'absolute'
      };
    },
    animate (prevPosition, el) {
      const clone = el.firstChild.cloneNode(true)
      Object.assign(clone.style, prevPosition)
      document.body.appendChild(clone)
      
      const opts = {
        duration: this.duration,
        easing: this.easing,
        done: () => {
          ramjet.show(this.$el.firstChild)
          document.body.removeChild(clone)
          this.$emit('animation-end')
        }
      }

      ramjet.hide(clone)
      ramjet.hide(this.$el.firstChild)
      ramjet.transform(clone, this.$el.firstChild, opts)
    },
    onHide () {
      components[this.id] = {
        id: this.id,
        el: this.$el,
        prevPosition: this.cachedPos
      };
    },
    onShow () {
      const self = this

      if (components[this.id]) {
        const {prevPosition, el} = components[this.id]
        components[this.id] = false
        this.animate(prevPosition, el)
      }
    }
  },
  mounted () {
    this.onShow()
    this.cachePosition()
  },
  beforeDestroy () {
    this.onHide()
  },
  render (h) {
    return h(
      this.tag,
      this.$slots.default
    )
  }
}
</script>
