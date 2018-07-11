const corpwechat = require('./1.2.0.js').qywx

const plugin = {
  install (Vue) {
    Vue.prototype.$corpwechat = corpwechat
    Vue.corpwechat = corpwechat
  },
  $corpwechat: corpwechat
}

export default plugin
export const install = plugin.install
