import axios from "axios";
import Cookies from 'js-cookie';
import Router from "../routes/index.js";
import store from "../store";

class AxiosRequest {
    token = Cookies.get('token');
    constructor() {
        this.requestApi = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            timeout: import.meta.env.VITE_REQUEST_TIMEOUT,
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Access-Control-Allow-Origin': '*',
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.requestApi.interceptors.request.use((config) => {
            store.dispatch('getAppLoader',true)
            return config;
        }, (error) => {
            store.dispatch('getAppLoader',false)
            return Promise.reject(error);
        })
        this.requestApi.interceptors.response.use((response) => {
            store.dispatch('getAppLoader',false)
            if(response.config.method === 'put' || response.config.method === 'delete'){
            }
            return response;
        }, (error) => {
            if(error.response){
                if (error.response.status === 401) {
                    Cookies.remove('token');
                    Router.push({
                        name: 'Login'
                    })
                }
                if (error.response.status === 404) {
                    Router.push({
                        name: 'Products'
                    })
                }
                store.dispatch('getAppLoader',false)
            }else{
            }
            return Promise.reject(error);
        })
    }

    async setUserToken(token) {
        this.token = token;
        Object.assign(this.requestApi.defaults, {headers: {authorization: `Bearer ${token}`}});
    }

    async get(url = null, params = null) {
        return await this.requestApi.get(url, {
            params
        })
    }

    async post(url = null, data = {}, params = null) {
        return await this.requestApi.post(url, data, params)
    }

    async put(url = null, data = null) {
        return await this.requestApi.put(url, data)
    }

    async patch(url = null, data = null) {
        return await this.requestApi.patch(url, data)
    }

    async delete(url = null, params = null) {
        return await this.requestApi.delete(url, {data : params})
    }
}

const apiRequest =  new AxiosRequest();
export default apiRequest;