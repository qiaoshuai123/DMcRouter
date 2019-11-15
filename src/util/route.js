export default [{
    path: '/user',
    meta:{
        userInfo:[1,2]
    },
    name: 'user',
    component: () => import('@/views/user'),
    children: [{
        path: '/user/userOne',
        name: 'userOne',
        meta:{
            userInfo:[1]
        },
        component: () => import('@/views/user/userOne')
    }, {
        path: '/user/userTwo',
        meta:{
            userInfo:[1,2]
        },
        name: 'userTwo',
        component: () => import('@/views/user/userTwo')
    }]
}]