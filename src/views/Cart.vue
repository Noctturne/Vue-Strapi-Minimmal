<template>
<div class="cart-page">
  <Basic>
    <section class="cart">
      <div class="row text-center">
        <h2 class="mb-2"> Cart </h2>

          <div class="container py-2">
              <div class="row border-top border-bottom py-2 px-2 align-items-center"  v-for="product in products" :key="product.id">
                  <div class="col-2">
                    <button class="btn btn-outline-dark btn-sm" @click="deleteProduct(product.id)"><i class="fas fa-times"></i></button>
                  </div>
                  <div class="col-2">
                    <img class="img-fluid rounded" :src="imgURL+product.image.url" :alt="product.name"/>
                  </div>
                <div class="col-4">
                    <p class="p-0 m-0"><strong>{{product.name}}</strong></p>
                    <small>{{Number(product.price).toFixed(2)}}€</small>
                </div>
                <div class="col-4">
                  <button class="btn btn-outline-dark btn-sm m-2" @click="increaseQuantity(product.id)"><i class="fas fa-plus"></i></button>
                  <input class="form-control form-control-sm text-center" type="text" :placeholder="product.quantity" disabled>
                  <button class="btn btn-outline-dark btn-sm m-2" @click="decreaseQuantity(product.id)"><i class="fas fa-minus"></i></button>
                </div>
              </div>
          </div>
          <Amount :products="products" v-if="products"/>
      </div>
    </section>
  </Basic>
</div>
</template>

<script>
import Basic from '../layout/Basic.vue';
import Amount from '../components/Amount.vue';
import {getProductsCartAPI, addProductAPI, deleteProductAPI, deleteProductsCartAPI} from '../api/cart';
import {ref, onMounted, watchEffect} from 'vue';
export default {
    name: "Cart",
    components: {
    Basic,
    Amount
  },
  setup(){
    let products = ref(null);
    const imgURL = `${process.env.VUE_APP_API_URL}`;
    let reload = ref(false);

    const getProductsCart = async() => {
      const res = await getProductsCartAPI();
      products.value = res;
    }

    const deleteProduct = (id) => {
      deleteProductsCartAPI(id);
      changeReload(); 
    }

    const increaseQuantity = (id) => {
      addProductAPI(id);
      changeReload(); 
    }

    const decreaseQuantity = (id) => {
      deleteProductAPI(id);
      changeReload();
    }

    watchEffect(() => {
      reload.value;
      getProductsCart();
    })

    const changeReload = () => {
      reload.value = !reload.value;
    }

    onMounted(async() => {
      getProductsCart();
    })

    return{
      products,
      imgURL,
      deleteProduct,
      increaseQuantity,
      decreaseQuantity,
      changeReload

    }
  }
}
</script>

<style scoped>
img{
  width: 70px;
  height: 50px;
}

@media (min-width: 768px) { 

 }


@media (min-width: 992px) { 

 }
</style>