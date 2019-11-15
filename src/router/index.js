import Vue from 'vue'
import Router from 'vue-router'
import { getRouters } from '../util/getUser'
import routes from '../util/route'
import store from '../store'
import user from '../store/user'
Vue.use(Router)

 const router =  new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:()=>import('@/views/home')
    }
  ]
})
router.beforeEach((to,from,next)=>{
  console.log(from.path)
  if(to.name != 'home'){
    console.log(1)
    const userFo =store.state.home.userFo
    if(!userFo){
      const routs =getRouters(2,routes)
      store.dispatch('home/getInfo',getRouters(2,routes)).then(res=>{
        if(res.length){
              router.addRoutes(routs)
        }
      })
   
      // router.push(to.path)
    }
  }else{
    console.log(2)
    next()
  }
next()
   
    // store.dispatch('home/getInfo').then(res=>{
    //   if(res){
    //     next()
    //   }
    // })

  
  // }else{
  //   next()
  // }
})
export default router
