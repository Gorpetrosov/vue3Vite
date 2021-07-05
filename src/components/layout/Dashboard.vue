<template>
  <div class="row m-0 background justify-content-center">
    <Loader/>
    <div class="col-12">
      <Header/>
    </div>
    <div class="col-12 col-sm-10 mt-5 p-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Header from "./Header.vue";
import Loader from "../ui/Loader.vue";
export default defineComponent({
  name: "Dashboard",
  components: {
    Header,
    Loader
  }
})
</script>

<style scoped>
.background {
  background-color: #EEEEEE;
  min-height: 100vh;
}
</style>