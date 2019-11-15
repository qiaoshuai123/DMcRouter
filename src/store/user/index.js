const state ={
    num:2,
    getList:[],
    dataLister:[]
}
const actions={
   async getLiter(){
        fs = await new me()   
    } ,
    setData({state},routes){
        console.log(routes.routes)
      state.dataLister = routes.routes
    }
}
const mutations={
    getData(state){
        console.log(state.getList)
         state.getList = [1,2,3]
        console.log(state.getList)
    },
  
}

export default{
    namespaced:true,
    state,
    actions,
    mutations
}