import {defineStore} from 'pinia'

const useGoods = defineStore('goods',{
	state: () => ({
		count: 10
	}),
	getters: {
		doubleCount(state) {
			return state.count * 2
		}
	},
	actions: {
		increment(){
			this.count += 10
		}
	}
})

export default useGoods
