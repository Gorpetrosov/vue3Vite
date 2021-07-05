import store from "./store";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const ProductModule = {
    namespaced: true,
    state: () => (store),
    mutations: mutations,
    getters: getters,
    actions: actions,
}
export default ProductModule;