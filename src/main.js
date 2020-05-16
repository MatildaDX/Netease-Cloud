import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueLazyload from 'vue-lazyload'
// 导入vant组件库

import 'vant/lib/index.css';
import { Col, Row, Button, Notify, Icon, NavBar, NumberKeyboard, PasswordInput, Field, Form, IndexBar, IndexAnchor  } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Notify);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Form);
Vue.use(NumberKeyboard);
Vue.use(PasswordInput);
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
