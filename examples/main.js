import Vue from 'vue'
import App from './App.vue'
import pdfComponent  from '/packages'
// console.log('pdf-masterv',window['pdf-masterv'])
// const pdfComponent = window['pdf-masterv'].default

Vue.config.productionTip = false

Vue.use(pdfComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
