//i18n-setup.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: '', // 设置语言环境
  fallbackLocale: '',
})

const loadedLanguages = [] // 我们的预装默认语言

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
	if (!loadedLanguages.includes(lang)) {
	return import(`../lang/${lang}/index`).then(msgs => {
	  i18n.setLocaleMessage(lang, msgs[lang])
	  loadedLanguages.push(lang)
	  return setI18nLanguage(lang)
	})
	}
	return Promise.resolve(setI18nLanguage(lang))
}