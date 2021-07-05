<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div v-if="product" class="modal-body">
          <div class="product-content product-wrap clearfix">
            <div class="row">
              <div class="col-md-5 col-sm-12 col-xs-12">
                <div class="product-image">
                  <img :src="product.picture" alt="194x228" style="width: 194px; height: 228px" class="img-responsive">
                </div>
              </div>
              <div class="col-md-7 col-sm-12 col-xs-12">
                <div class="product-deatil">
                  <h4 class="name">
                    <a href="#">
                      {{product.name}}
                    </a>
                  </h4>
                  <p class="price-container">
                    <span>${{product.price}}</span>
                  </p>
                  <span class="tag1"></span>
                </div>
                <div class="description">
                  <p> {{product.description}} </p>
                </div>
                <div class="product-info smart-form">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                      <button class="btn btn-danger rounded">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted} from "vue"
export default defineComponent({
  name: "Popup",
  props: {
    product: {
      required: true,
      type: Object,
    }
  },
  setup(props){

    return{
    }
  }
})
</script>

<style scoped>
.modal-dialog {
  margin-top: 15%;
  border: 3px solid #000000;
}
.btn-close {
  font-weight: 900!important;
  color: #000000!important;
}
.product-content {
  margin-bottom: 20px;
  margin-top: 12px;
  background: #fff;
  padding: 4px;
}

.product-content{
  margin-left: 0
}

.product-content .product-image {
  background-color: #fff;
  display: block;
  min-height: 238px;
  overflow: hidden;
  position: relative
}

.product-content .product-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 0;
  position: relative;
  background: #fff
}

.product-content .product-deatil h4 a {
  font-size: 15px;
  font-weight: 900;
  color: #000000;
  line-height: 19px;
  text-decoration: none;
  padding-left: 0;
  margin-left: 0
}

.product-content .product-deatil h4 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px
}

.product-content .product-deatil span.tag1 {
  border-radius: 50%;
  color: #fff;
  font-size: 15px;
  height: 50px;
  padding: 13px 0;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 10px;
  width: 50px
}


.product-content .description {
  font-size: 12.5px;
  line-height: 20px;
  padding: 10px 14px 16px 19px;
  background: #fff
}

.product-content .product-info {
  padding: 11px 19px 10px 20px
}


.product-info.smart-form .btn {
  padding: 6px 12px;
  margin-left: 12px;
  margin-top: -10px
}

.product-entry .product-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 16px;
  position: relative
}

.product-entry .product-deatil h4 a {
  color: #000000;
  font-weight: 900;
  font-size: 15px;
  line-height: 19px;
  text-decoration: none
}

.product-entry .product-deatil h4 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px
}

.product-block .product-deatil p.price-container span,
.product-content .product-deatil p.price-container span,
.product-entry .product-deatil p.price-container span,
.shipping table tbody tr td p.price-container span,
.shopping-items table tbody tr td p.price-container span {
  color: #21c2f8;
  font-family: Lato, sans-serif;
  font-size: 24px;
  line-height: 20px
}
.rounded {
  font-size: 10px;
  background-color: #E91E63;
  border-radius: 15px!important;
}

.product-deatil {
  padding: 30px 30px 50px
}
.product-deatil .product-image {
  border-right: 0 solid #fff !important
}

.product-deatil .name {
  margin-top: 0;
  margin-bottom: 0
}

.product-deatil .name small {
  display: block
}

.product-deatil .name a {
  margin-left: 0
}

.product-deatil .price-container {
  font-size: 24px;
  margin: 0;
  font-weight: 300
}

.product-deatil .price-container small {
  font-size: 12px
}

.product-deatil .fa-2x>h4 {
  font-size: 12px;
  margin: 0
}

.product-deatil .fa-2x+a,
.product-deatil .fa-2x+a+a {
  font-size: 13px
}
.product-deatil .certified ul {
  padding-left: 0
}

.product-deatil .certified ul li:not(first-child) {
  margin-left: -3px
}

.product-deatil .certified ul li {
  display: inline-block;
  background-color: #f9f9f9;
  padding: 13px 19px
}

.product-deatil .certified ul li:first-child {
  border-right: none
}

.product-deatil .certified ul li a {
  text-align: left;
  font-size: 12px;
  color: #6d7a83;
  line-height: 16px;
  text-decoration: none
}

.product-deatil .certified ul li a span {
  display: block;
  color: #21c2f8;
  font-size: 13px;
  font-weight: 700;
  text-align: center
}

@media only screen and (min-width:1024px) {
  .product-wrap div[class*=col-md-5] {
    padding-right: 0
  }
  .product-wrap div[class*=col-md-7] {
    padding: 0 13px 0 0
  }
  .product-content .product-image {
    border-right: 1px solid #dfe5e9
  }
  .product-content .product-info {
    position: relative
  }
}
</style>