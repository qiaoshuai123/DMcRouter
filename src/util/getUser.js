export function getRouters(num, router) {
    const routers = router.filter(item => item.meta.userInfo.includes(num))
        if (routers.length) {
         routers.forEach(item => {
             if(item.children){
                item.children=getRouters(num,item.children)
             }
        });
        return routers
    }
}