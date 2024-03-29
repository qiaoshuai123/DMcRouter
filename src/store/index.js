import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        user
    }
})