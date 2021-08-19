<template>
  <div class="container-fluid m-0 p-0">
      <Header/>
        <main class="content">
            <slot/>
        </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    name: "Basic",
    components:{
        Header,
    }
}
</script>

<style>

</style>