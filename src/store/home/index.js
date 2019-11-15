import arr from '../../util/route'
import { getRouters } from '../../util/getUser'
import Router from '../../router/'
const state = {
    num: 1,
    userFo: null,
}

const mutations = {
    getInfoS(state, arr) {
        console.log(arr)
        state.userFo = arr
    },
    getRouter(state) {
        console.log(132)
        // state.userFo = 1
    },

}

const actions = {
     getInfo({commit},s) {
        commit('getInfoS',s)
        return s
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}