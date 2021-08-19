<template>
  <div class="home">
  <Noheader>
    <div class="container-fluid bg-light" style="height: 150px"></div>
    <div class="container">
        <div class="alert alert-warning text-center m-2" role="alert">
          <strong>!Note -> This is only a sample, you cannot send this form. </strong>
          <small id="alert"></small>
        </div>
      <div class="row m-2">
        <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 py-4">
            <div class="row row-cols-2 border-bottom mx-2">
              <div class="col text-start"><p><strong>Checkout</strong></p></div>
              <div class="col text-end back"><a @click="$router.go(-1)" class="link-dark">back to cart</a></div>
            </div>
        </div>
      </div>

      <Register/>

        <div class="row m-2">
          <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 py-4">
            <h2 class="text-center"> Shipping </h2>
            <div class="row mx-2 my-2">
              <div class="col">
                <input class="form-control form-control" id="address" type="text" placeholder="Address" >
              </div>
            </div>
            <div class="row row-cols-2 mx-2 my-2">
              <div class="col">
                <input class="form-control form-control" id="city" type="text" placeholder="City" >
                </div>
              <div class="col">
                <input class="form-control form-control" id="state" type="text" placeholder="State" >
              </div>
            </div>
            <div class="row row-cols-2 mx-2 my-2">
              <div class="col">
                <input class="form-control form-control" id="postcode" type="text" placeholder="Postcode / ZIP" >
                </div>
              <div class="col">
                <input class="form-control form-control" id="country" type="text" placeholder="Country" >
              </div>
            </div>
          </div>
        </div>
        <div class="row m-2">
          <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 py-4">
            <h2 class="text-center border-bottom pb-2"> Summary </h2>
            <div class="row row-cols-2" v-for="product in products" :key="product.id">
              <div class="col">
                <p>{{product.name}}</p>
                </div>
              <div class="col text-end">
                <small>{{Number(product.price).toFixed(2)}}€</small>
              </div>
            </div>
          <div class="row row-cols-2 border-top pt-2">
              <div class="col text-start"><p> Total </p></div>
              <div class="col text-end"><p><strong>{{Number(total).toFixed(2)}}€</strong></p></div>
          </div>
          </div>
          <button class="btn btn-outline-dark btn-sm" disabled> Place Order </button>
        </div>
    </div>
    <div class="container-fluid bg-light" style="height: 150px"></div>
  </Noheader>
</div>
</template>

<script>
import Noheader from '../layout/Noheader.vue';
import Register from '../components/users/Register.vue';
import {ref, onMounted} from 'vue';
import {getProductsCartAPI} from '../api/cart';

export default {
  name: 'Orders',
  components: {
    Noheader,
    Register
  },
  setup(){
    let products = ref(null);
    let total = ref(0);

    const getTotal = () => {
      let totalTemp = 0;
      products.value.forEach(product => {
        totalTemp += product.price * product.quantity;
      });
      total.value = totalTemp.toFixed(2);
    }


    onMounted(async () => {
      const res = await getProductsCartAPI();
      products.value = res;
      getTotal();
    })

    return{
      products,
      total
    }

  }
}
</script>

<style>
  .back{
    cursor: pointer;
  }
</style>