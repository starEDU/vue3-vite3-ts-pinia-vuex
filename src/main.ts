import {createApp} from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'

import {createPinia} from 'pinia'
import axiosPlugin from '@/plugins/axios'

import store from './store'
import router from './router'

import './style.css'
import App from './App.vue'


const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app
	.use(axiosPlugin)
	.use(store)
	.use(createPinia())
	.use(router)
	.mount('#app')


// console.log( import.meta.env )
