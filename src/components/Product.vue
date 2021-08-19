<template>
<div class="card text-center">
    <img class="card-img" :src="imgURL+product.image.url" :alt="product.name"/>
    <div class="card-body">
      <h5 class="card-title"><strong>{{product.name}}</strong></h5>
      <p class="card-text float-start pt-2">{{Number(product.price).toFixed(2)}}€</p>
      <button class="btn btn-outline-dark float-end" @click="addProductAPI(product.id)"><i class="fas fa-shopping-cart"></i></button>
  </div>
</div>
  
</template>

<script>
import {addProductAPI} from '../api/cart';
export default {
    name: "Product",
    props:{
      product: Object
    },
    setup(){
      const imgURL = `${process.env.VUE_APP_API_URL}`;

      return{
        imgURL,
        addProductAPI
      }
    }
}
</script>

<style scoped>
  img{ cursor: pointer; transition: all 0.5s ease-out; }

  img:hover{ -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */ filter: grayscale(100%); }

  button:hover{ animation: wiggle 2s linear infinite; }

  @keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}
</style>