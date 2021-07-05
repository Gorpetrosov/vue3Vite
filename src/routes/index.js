import { createRouter,createWebHistory} from 'vue-router'
import routes from "./paths";
import store from "../store";
import middlewarePipeline from "./middlewarePipeline";
const Router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})
Router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default Router;