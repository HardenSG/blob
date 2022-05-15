import { fa } from 'element-plus/lib/locale'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLog:<boolean>(sessionStorage.getItem("token") ? true : false),
    admin:<string>(sessionStorage.getItem("admin") ? sessionStorage.getItem("admin") : 'unknow'),
    headerAdv:<string>(sessionStorage.getItem("headerAdv") ? sessionStorage.getItem("headerAdv") : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655084147&t=544352ecab4046c6ce938f8085796dc1'),
  },
  getters: {
  },
  mutations: {
    //更改登录状态
    changeLogCommit ( state , newValue) {
      state.isLog = newValue
    },
    //更改登陆人昵称
    changeAdminCommit ( state , newValue) {
      state.admin = newValue
    },
    //更改登陆人头像
    changeHeaderAdvCommit ( state , newValue) {
      state.headerAdv = newValue
    }
  },
  actions: {
    //更改登录状态
    changeLogAction ( context , newValue ) : void{
      context.commit( 'changeLogCommit' ,  newValue)
    },
    //更改登陆人昵称
    changeAdminAction ( context , newValue ) : void{

      sessionStorage.setItem("admin",newValue)

      context.commit( 'changeAdminCommit' , newValue )

    },
    //更改登陆人头像
    changeHeaderAdvAction ( context , newValue ) : void{

      sessionStorage.setItem("headerAdv",newValue)

      context.commit( 'changeHeaderAdvCommit' ,newValue )
    }
  },
  modules: {
  }
})
