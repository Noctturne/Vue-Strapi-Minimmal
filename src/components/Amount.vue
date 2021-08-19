<template>
    <div class="container bg-light text-secondary p-2">
        <div class="row row-cols-2 border-bottom mx-4">
            <div class="col text-start"><p> Subtotal </p></div>
            <div class="col text-end"><p> {{Number(total).toFixed(2)}}€ </p></div>
        </div>
        <div class="row row-cols-2 border-bottom mx-4 pt-2">
            <div class="col text-start"><p> Total </p></div>
            <div class="col text-end"><p><strong>{{Number(total).toFixed(2)}}€</strong></p></div>
        </div>
        <div class="row">
            <div class="col-12 my-2">
                <router-link to="/orders" class="btn btn-outline-dark">Checkout</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import {ref, watchEffect} from 'vue';
export default {
    name: "Amount",
    props:{
        products: Array,
    },
    setup(props){
        let total = ref(0);

        watchEffect(() => {
            props.products;
            let totalTemp = 0;
            props.products.forEach((product)=> {
                totalTemp += product.price * product.quantity;
            });
            total.value = totalTemp.toFixed(2);
        });

        return{
            total,
        }
    }
}
</script>

<style>

</style>