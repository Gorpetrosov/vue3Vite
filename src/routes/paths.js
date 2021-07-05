import {guest, auth} from "./middlewares";
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Registration.vue'),
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/',
        name: 'Main',
        component: () => import('../components/layout/Dashboard.vue'),
        children: [
            {
                path: '/products',
                name: 'Products',
                component: () => import('../views/Products.vue'),
                meta: {
                    middleware: [
                        auth
                    ]
                }
            },
        ]
    },
    {
        path: '/terms',
        name: 'Terms',
        component: () => import('../views/Terms.vue'),
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('../views/Products.vue'),
        meta: {
            middleware: [
                auth
            ]
        }
    },
]
export default routes;