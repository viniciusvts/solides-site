/**
 * I
 */
const lazyComponent = {
  data () {
    return {
      isPosition: false
    }
  },
  mounted () {
    document.addEventListener('scroll', this.showIframesOnScroll)
  },
  methods: {
    showIframesOnScroll () {
      const bottomOfScreen = window.scrollY + screen.height
      if (bottomOfScreen >= this.$el.offsetTop){
        this.isPosition = true
        //remove listener
        document.removeEventListener('scroll', this.showIframesOnScroll);
      }
    }
  }
};
export default lazyComponent
  