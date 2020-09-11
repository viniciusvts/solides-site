/**
 * ao ser inserido em um componente irá continuadamente verificar a posição desse componente
 * e atribuirá a isPosition o valor true caso o componente esteja visível na tela
 * o objetivo é colocar isPosition como condicional no elemento que queira carregar apenas quando o 
 * componente estiver visível
 * @author Vinicius de Santana
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
  