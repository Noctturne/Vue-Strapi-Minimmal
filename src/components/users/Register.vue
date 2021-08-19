<template>
      <form @submit.prevent="register">
        <div class="row m-2">
          <div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 py-4">
            <h2 class="text-center"> Contact Information </h2>
            <div class="row row-cols-2 mx-2 my-2">
              <div class="col">
                <input class="form-control form-control" id="name" type="text" placeholder="First name" v-model="formData.name" :class="{error: formError.name}">
                </div>
              <div class="col">
                <input class="form-control form-control" id="surname" type="text" placeholder="Last name" v-model="formData.surname" :class="{error: formError.surname}">
              </div>
            </div>
            <div class="row row-cols-2 mx-2 my-2">
              <div class="col">
                <input class="form-control form-control" id="email" type="email" placeholder="Email" v-model="formData.email" :class="{error: formError.email}">
                </div>
              <div class="col">
                <input class="form-control form-control" id="phone" type="number" placeholder="Phone" v-model="formData.phone" :class="{error: formError.phone}">
              </div>
            </div>
          </div>
           <button type="submit" class="btn btn-outline-dark btn-sm" disabled> Next</button>
        </div>
      </form>
</template>

<script>
import {ref} from 'vue';
import * as Yup from 'yup';
import {registerAPI} from '../../api/user';

export default {
    name: "Register",
    setup(){
      let formData = ref({});
      let formError = ref({});

      const schemaForm = Yup.object().shape({
        name: Yup.string().required(true),
        surname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        phone: Yup.string().required(false)

      });

      const register = async () => {
        formError.value = {};

          try {
            await schemaForm.validate(formData.value, {abortEarly: false});
            try {
              const res = await registerAPI(formData.value);
            } catch (e) {
              return;
            }
          } catch (e) {
            e.inner.forEach(err => {
              formError.value[err.path] = err.message;
            });
          }
      }

      return{
        formData,
        register,
        formError
      }
    }
}
</script>

<style>
input.error{
  border-color: red;
}
</style>