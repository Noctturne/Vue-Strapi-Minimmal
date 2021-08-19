<template>
  <nav class="row justify-content-evenly py-4">
    <div class="col-2 logo">
      <h1><strong>M</strong></h1>
      
    </div>
    <div class="col-6 menu">
      <ul class="nav justify-content-end border-bottom">
        <router-link to="/" class="nav-link link-secondary active">Products</router-link>
        <router-link to="/cart" class="nav-link link-secondary">Cart</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>

</style>