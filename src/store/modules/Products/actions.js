import endpoint from "../../../request/endpoints";
import apiRequest from "../../../request";

export default {
    ProductPaginateStateA({commit}, page = 1) {
        apiRequest.get(endpoint.productsPaginate, {
            page
        }).then(response => {
            commit('ProductListStateM', response.data.data)
        });
    },
    ProductStateResetA({commit}) {
            commit('ProductListStateResetM')
    }
}
