import apiRequest from "../request";
import Router from "../routes";
import Cookies from 'js-cookie';

export default function (commit, token){
    Cookies.set('token',token);
    apiRequest.setUserToken(token).then(() => {
        commit('authM', true)
        Router.push({
            name: 'Products'
        })
    })
}