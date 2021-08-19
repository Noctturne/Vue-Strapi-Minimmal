<template>
<div class="home">
  <Basic>
    <CatMenu/>
    <section class="container px-4 products">
      <div class="row">
        <div class="col-sm-6 col-lg-4 mb-2" v-for="product in products" :key="product.id">
            <Product :product="product"/>
        </div>
      </div>
    </section>
    <button @click="scrollTop" class="btn btn-dark btn-floating" title="Go to top"><i class="fas fa-angle-up"></i></button>
  </Basic>
</div>
</template>

<script>

import Basic from '../layout/Basic.vue';
import CatMenu from '../components/CatMenu.vue';
import Product from '../components/Product.vue';
import {getProductsAPI} from '../api/product';
import {ref, onMounted} from 'vue';

export default {
  name: 'Home',
  components: {
    Basic,
    CatMenu,
    Product
  },
  setup(){
    let products = ref(null);

    const scrollTop = () => {
      window.scroll(0, window.pageYOffset - 4000);
    }

    onMounted(async() => {
      const res = await getProductsAPI(20);
      products.value = res;
    })

    return{
      products,
      scrollTop
    }
  }
}
</script>
<style scoped>
  .btn-floating{
    position: fixed; 
    bottom: 50px; 
    right: 45px; 
    z-index: 99; 
    cursor: pointer; 
  }

</style>
