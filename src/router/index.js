import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import News from "../views/News";
import NewsPage from "../views/NewsPage"
import Page404 from "../pages/Page404"
import Galery from "../views/Galery"

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/News',
        name: 'News',
        component: News
    },
    {
        path: '/News/:id',
        name: 'NewsPage',
        component: NewsPage
    },
    {
        path: '/Galery',
        name: 'Galery',
        component: Galery
    },
    {
        path: '*/*',
        redirect: {
            name: 'News'
        }
    },
    {
        path: '*',
        name: 'Page404',
        component: Page404
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
