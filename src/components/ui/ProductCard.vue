<template>
  <div class="product-grid mt-2">
    <div class="product-image">
      <a href="#" class="image">
        <img alt="ty" class="pic-1 mt-5" :src="data.picture">
      </a>
    </div>
    <div class="product-content">
      <h3 class="title">{{ data.name }}</h3>
      <div class="row mt-4 mb-1">
        <div class="col-6">
          <div class="price">$ {{ data.price }}</div>
        </div>
        <div class="col-6">
          <button class="btn btn-danger rounded" @click="showPopUpEmitter(data.id)">DETAILS</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "ProductCard",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props, {emit}){
    function showPopUpEmitter(id){
      emit('showItemOnClick', id)
    }
    return {
      showPopUpEmitter
    }
  }
})
</script>

<style scoped>
.product-grid{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  transition: all 0.5s;
  background-color: #FFFFFF;
}
.product-grid .product-image{
  position: relative;
  /*overflow: hidden;*/
}
.product-grid .product-image a.image{
  display: block;
  padding: 8px
}
.product-grid .product-image img{
  width: 100%;
  height: auto;
  margin-top: -25%!important;
  z-index: 99999;
}
.product-image .pic-1{
  opacity: 1;
  backface-visibility: hidden;
  transition: all 0.5s;
}
.product-grid .product-content{
  padding: 15px;
}
.product-grid .title{
  font-size: 18px;
  text-transform: capitalize;
  margin: 0 0 5px;
}
.product-grid .title a{
  color: #111;
  transition: all 500ms;
}
.product-grid .price{
  color: #707070;
  font-size: 17px;
}
.rounded {
  font-size: 10px;
  background-color: #E91E63;
  border-radius: 15px!important;
}

</style>