import NotFound from '@render/views/Error.vue'

const routes = [
    {
        path: '/',
        redirect: 'home',
        component: null,
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@render/views/home.vue'),
    },
]

export default routes
