import { createStore } from 'vuex'
import { ref } from 'vue'
const state = {
    word:ref(""),
    title:ref(""),
    lightImg:ref(""),
    darkImg:ref(""),
    introduce:ref(""),
    location:ref("")
}

const actions = {
    
}

const mutations = {
    changeStateWord( state , newValue ){
        state.word = newValue
    },
    changeStateTitle( state , newValue ){
        state.title = newValue
    },
    changeStateLightImg( state , newValue ){
        state.lightImg = newValue
    },
    changeStateDarkImg( state , newValue ){
        state.darkImg = newValue
    },
    changeStateIntroduce( state , newValue ){
        state.introduce = newValue
    },
    changeStateLocation( state , newValue ){
        state.location = newValue
    }
}

const getters = {
    getTitle: ( state ) => {
        return state.title
    },
    getWord: ( state ) => {
        return state.word
    },
    getDark: ( state ) => {
        return state.darkImg
    },
    getLight: ( state ) => {
        return state.lightImg
    },
    getIntroduce: ( state ) => {
        return state.introduce
    },
    getLocation: ( state ) => {
        return state.location
    }
}

export default new createStore({
    state,
    actions,
    mutations,
    getters
})