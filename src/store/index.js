import { createStore } from 'vuex'
import modules from "./modules";
import apiRequest from "../request";
import endpoints from "../request/endpoints";
import authentication from "../utils/authentication";
import Cookies from 'js-cookie';
import Router from "../routes/index.js";
const store =  createStore({
    modules : modules,
    state: {
        user: {
            loggedIn: Boolean(Cookies.get('token')),
        },
        isLoading: false,
    },
    getters: {
        auth(state) {
            return state.user
        }
    },
    mutations: {
        authM(state, data){
            state.user.loggedIn = data
        },
        SET_APP_LOADER(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve, reject) => {
                const data  = {
                "email": payload.email,
                "password": payload.password
            }
            apiRequest.post(endpoints.login, data).then(res =>{
                const { data } = res;
                if(data['accessToken']){
                    authentication(commit, data['accessToken'])
                }
                console.log(res)
            }).catch(e => {
                reject(e.response.data.message)
            })

            })
        },
        logout({commit}){
           apiRequest.post(endpoints.logout).then(()=>{
               Cookies.remove('token');
               apiRequest.setUserToken(null).then(() => {
                   commit('authM', false);
                   Router.push({
                       name: 'Login'
                   })
               })
           })
        },
        register({commit},payload){
           const data =  {
                "name": payload.name,
                "email": payload.email,
                "password": payload.password,
                "password_confirmation": payload.password_confirmation,
                "education_start_date": payload.education_start_date,
                "education_end_date": payload.education_end_date,
                "terms": payload.terms
            }
            apiRequest.post(endpoints.register, data).then(res => {
                const { data } = res;
                if(data['accessToken']){
                   authentication(commit, data['accessToken'])
                }
                if(res['errors']){
                    alert(JSON.stringify(res['errors']))
                }
            }).catch(e =>{
                alert(e.message)
            })
        },
        async getAppLoader({commit}, isLoading) {
            commit('SET_APP_LOADER', isLoading)
        },
    },
})
export default store;