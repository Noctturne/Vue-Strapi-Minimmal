<template>
    <div class="row mt-2">
    <nav class="navbar navbar-expand justify-content-center">
        <ul class="nav navbar-nav" v-for="category in categories" :key="category.id">
            <router-link class="nav-link link-secondary" :to="category.slug">{{category.title}}</router-link>
        </ul>
    </nav>
</div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {getCategoriesAPI} from '../api/category';

export default {
  name: 'CatMenu',
  setup(){
    let categories = ref(null);

    onMounted(async() => {
      const res = await getCategoriesAPI();
      categories.value = res;
    })

    return{
      categories
    }
  }
}
</script>

<style>

</style>