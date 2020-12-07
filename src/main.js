import Vue from 'vue'
import uView from 'uview-ui';
import Loadmore from "@/components/Loadmore";
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView);
Vue.component("Loadmore", Loadmore);

const app = new Vue({
  ...App
})
app.$mount()
