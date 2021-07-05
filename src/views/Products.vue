<template>
  <div class="row justify-content-center" ref="scrollComponent">
    <div class="col-12 col-sm-6 col-md-4 mt-custom" v-for="(item,index) in list" :key="index">
      <product-card :data="item" @showItemOnClick="showPopUpOnClick"></product-card>
    </div>
    <popup :product="propsData"></popup>
  </div>
  <div v-if="!list.length" class="col-12">
    <h2 class="text-center">No Products to show</h2>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted, computed, onUnmounted} from "vue"
import ProductCard from "../components/ui/ProductCard.vue";
import Popup from "../components/ui/Popup.vue";
import {Modal} from 'bootstrap'
import {useStore} from "vuex";

export default defineComponent({
  name: "Products",
  components: {
    ProductCard,
    Popup,
  },
  setup() {
    const propsData = ref(null);
    const scrollComponent = ref(null);
    const store = useStore()
    const list = computed(() => store.state.product.products);
    const page = ref(1);
    function showPopUpOnClick(id) {
      propsData.value = list.value.find(item => item.id === id)
      const myModal = new Modal(document.getElementById('exampleModal'), {
        keyboard: true
      })
      myModal.show();
    }

    function handleScroll(e) {
      let element = scrollComponent.value;
      console.log(element.getBoundingClientRect().bottom ,'bottom')
      if (Math.floor(element.getBoundingClientRect().bottom) <= window.innerHeight) {
        page.value += 1;
        store.dispatch('product/ProductPaginateStateA', page.value);
      }
    }

    onMounted(() => {
      store.dispatch('product/ProductStateResetA').then(()=>{
        page.value = 1;
        store.dispatch('product/ProductPaginateStateA');
        window.addEventListener('scroll', handleScroll)
      })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      list,
      scrollComponent,
      showPopUpOnClick,
      propsData,
    }
  }
})
</script>

<style scoped>
.mt-custom {
  margin-top: 10%;
}

@media only screen and (max-width: 568px) {
  .mt-custom {
    margin-top: 30%;
  }
}
</style>