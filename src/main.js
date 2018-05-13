// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/styles/main.scss'

Vue.config.productionTip = false
/**
 * 安装 Vue.js 插件,这里是全局安装elementUI
 * 这样做之后整个项目任何地方都可以用elementUI的组件了
 * router其实也在背后被默认Vue.use(router)了，
 * 当然你也可以在下面显示写出来
 */
Vue.use(ElementUI)
//像这样
Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
