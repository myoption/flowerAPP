/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/reset.css'
import { Toast, Notify } from 'vant'

Vue.use(Vant)
Vue.prototype.$toast = Toast
Vue.prototype.$notify = Notify
