import { fa } from 'element-plus/lib/locale'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLog:<boolean>(sessionStorage.getItem("token") ? true : false)
  },
  getters: {
  },
  mutations: {
    changeLogCommit ( state , newValue) {
      state.isLog = newValue
    }
  },
  actions: {
    changeLogAction ( context , newValue ) : void{
      context.commit( 'changeLogCommit' ,  newValue)
    }
  },
  modules: {
  }
})
