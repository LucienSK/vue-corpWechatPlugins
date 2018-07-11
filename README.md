# vue-corpWechatPlugins
Vue.JS企业微信JSSDK插件
目前只支持1.2.0版本，后续会随着企业微信升级维护

#安装
npm install vue-corpwechat --save

组件外使用
import { WechatCorpPlugin } from 'vue-corpwechat'
Vue.use(WechatCorpPlugin)

console.log(Vue.corpwechat) // 可以直接访问 wx 对象。

组件中使用
那么之后任何组件中都可以通过 this.$corpwechat 访问到 wx 对象。

export default {
  created () {
    this.$corpwechat.onMenuShareTimeline({
      title: 'hello'
    })
  }
}
