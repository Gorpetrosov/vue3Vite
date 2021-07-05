export default {
    ProductListStateM(state, payload){
        state.products = [...state.products,...payload]
    },
    ProductListStateResetM(state){
        state.products = []
    }
}
