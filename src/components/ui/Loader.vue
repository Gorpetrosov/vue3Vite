<template>
  <div v-if="appLoader" class="col-12">
    <div class="row justify-content-center">
         <div class="col-6 col-sm-4 col-md-2">
           <div  class="loadingio-spinner-spinner-77ypzl258en">
             <div class="ldio-hu3w7n5n17k">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
             </div>
           </div>
         </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, computed} from "vue"
import {useStore} from "vuex";

export default defineComponent({
  name: "Loader",
  setup() {
    const state = useStore();
    const appLoader = computed(()=> state.state.isLoading);
    return {
      appLoader
    }
  }
})
</script>

<style scoped>
@keyframes ldio-hu3w7n5n17k {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

.ldio-hu3w7n5n17k div {
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-hu3w7n5n17k linear 1s infinite;
  background: red;
  width: 12px;
  height: 24px;
  border-radius: 6px / 12px;
  transform-origin: 6px 52px;
}

.ldio-hu3w7n5n17k div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.75s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.5s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.25s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
  background: red;
}

.ldio-hu3w7n5n17k div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
  background: red;
}

.loadingio-spinner-spinner-77ypzl258en {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  position: fixed;
  top: 25%;
  z-index: 99999;
}

.ldio-hu3w7n5n17k {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-hu3w7n5n17k div {
  box-sizing: content-box;
}
</style>