export function auth ({ next, store }){
    if(!store.getters.auth.loggedIn){
        return next({
            name: 'Login'
        })
    }

    return next()
}

export function guest ({ next, store }){
    if(store.getters.auth.loggedIn){
        return next({
            name: 'Products'
        })
    }

    return next()
}