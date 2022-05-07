import { createStore } from 'vuex'

const state = {
    name:'闫德强',
    age:19,
    school:'天津理工大学',
    company:'fwf工作室'
}

const actions = {
    changeName(a,b,c){
        console.log(a,b,c);
        new Promise(resolve=>{
            setTimeout(() => {
                resolve([a,b,c])
            }, 2000);
        })
    }
}

const mutations = {
    changeNameCommit(state,value){
        state.name = value;
    }
}

export default new createStore({
    state,
    actions,
    mutations
})