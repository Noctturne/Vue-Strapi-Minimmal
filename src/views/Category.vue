<template>
  <Basic>
      <CatMenu/>
      <section class="container px-4 categories">
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-2" v-for="product in products" :key="product.id">
            <Product :product="product"/>
          </div>
      </div>
    </section>
  </Basic>
</template>

<script>
import Basic from '../layout/Basic.vue';
import CatMenu from '../components/CatMenu.vue';
import {getProductsCategoryAPI} from '../api/product';
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import Product from '../components/Product.vue';
export default {
  name: 'Home',
  components: {
    Basic,
    CatMenu,
    Product
  },
  watch:{
    $route(to, from){
      this.getProducts(to.params.category);
    }
  },
  setup(){
    let products = ref(null);
    const {params} = useRoute();

    onMounted(() => {
      getProducts(params.category);
    });

    const getProducts = async (category) => {
      if(category === "all"){
        const res = await getProducts(20);
        products.value = res;
      }else{
        const res = await getProductsCategoryAPI(category);
        products.value = res;
      }
    }

    return{
      getProducts,
      products
    }
  }
}
</script>

<style>

</style>