// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import './fonts/font.scss'
const components = [
  Button,
  Dialog,
  Input
]
const install = function (Vue) {
  console.log('install all components')
  // 全局注册所有的组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
// if use Vue in script like <script scr='....vue.min.js'></script> then install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
