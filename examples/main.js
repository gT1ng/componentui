import Vue from 'vue'
import App from './App.vue'
import componentui from '../packages'

Vue.config.productionTip = false
Vue.use(componentui)

new Vue({
  render: h => h(App)
}).$mount('#app')
