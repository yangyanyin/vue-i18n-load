import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { loadLanguageAsync, i18n } from './assets/i18n-setup/i18n-setup'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history'
})

router.beforeEach((to, from, next) => {
  const lang = to.query.lang || 'cn'
  loadLanguageAsync(lang).then(() => next())
})

new Vue({
	i18n,
	router,
  render: h => h(App),
}).$mount('#app')
