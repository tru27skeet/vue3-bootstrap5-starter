import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import BooksView from '../views/BooksView.vue'

declare module 'vue-router' {
    interface RouteMeta {
        // must be declared by every route
        transition: string
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { transition: 'scale-slide' },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView,
            meta: { transition: 'scale-slide' },
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
            meta: { transition: 'scale-slide' },
        },
        {
            path: '/books',
            name: 'books',
            component: BooksView,
            meta: { transition: 'scale-slide' },
        },
    ]
})

export default router
