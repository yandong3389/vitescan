import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './langs/zh'
import en from './langs/en'


Vue.use(VueI18n)

const messages = {
  en: en,
  zh: zh
}


const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'en'
  ,
  messages 
})


// locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n