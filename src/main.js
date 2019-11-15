import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import head from './components/head'
import Profile from './util/extend'
Vue.use(ElementUI);

import store from './store'
Vue.config.productionTip = false

Vue.prototype.$Profile =Profile
Vue.component('vHeader',head)
Vue.directive('num',{
    bind() {//更改
        
    },
    inserted:(el,a)=>{//项目初始化渲染
    //  console.log(el,'el')
    //  console.log(a,'a')
     el.style.background = `${a.expression}`
    }
    
})
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
