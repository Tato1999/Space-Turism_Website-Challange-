import { createRouter, createWebHistory} from 'vue-router'


import Home from '../components/main.vue'
import dest from '../components/destination.vue'
import crew from '../components/crew.vue'
import tech from '../components/technology.vue'

const routes = [
    {
        path: '/',
        component : Home
    },
    {
        path: '/destination',
        component : dest
    },
    {
        path: '/crew',
        component : crew
    },
    {
        path: '/technology',
        component : tech
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router