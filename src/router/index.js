import { createRouter, createWebHashHistory } from "vue-router";
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import NotFound from '../pages/404.vue'
//路由地址配置
const routes = [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

//添加到创建的路由中
const router = createRouter({
    // createWebHashHistory设置路径代码#
    history: createWebHashHistory(),
    routes
})
export default router
