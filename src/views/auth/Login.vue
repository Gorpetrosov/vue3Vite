<template>
  <div class="login">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <div class="row justify-content-center">
            <div class="col-10 header-background">
              <h4 class="text-center header-background-text p-3">Login</h4>
            </div>
          </div>
        </div>
        <div class="card-body mt-2">
          <Form @submit="submit($event)" v-slot="{ errors }">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="envelope"></font-awesome-icon></span>
              </div>
              <Field name="email" class="form-control" placeholder="Email..." rules="email"/>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.email || errorFiled }}</span>
              </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="lock"></font-awesome-icon></span>
              </div>
              <Field name="password" type="password" class="form-control" rules="password"
                     placeholder="Password..."></Field>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.password }}</span>
              </div>
            </div>
            <div class="form-group text-center">
              <input type="submit" value="LETS GO" class="btn text-danger btn-outline-light m-auto p-5">
            </div>
          </Form>
          <router-link :to="{name: 'Register'}" class="text-center d-block">Have not a account? Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent, ref} from "vue"
import {Field, Form, useValidateForm } from 'vee-validate';
import {useStore} from "vuex";
export default defineComponent({
  name: "Login",
  components: {
    Field,
    Form,
  },
  setup() {
    const errorFiled = ref(null)
    const store = useStore();
    function submit(fields) {
      const validate = useValidateForm();
      validate().then(res => {
       if(res.valid){
         const data = {
           "email": fields.email,
           "password": fields.password
         }
         const res = store.dispatch('login', data).then(res => {
           console.log(res)
         }).catch(e=>{
           errorFiled.value  = e;
         })
       }
      })
    }
    return {
      submit,
      errorFiled
    }
  }
})
</script>

<style scoped>

.login {
  background-image: url('../../assets/login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Numans', sans-serif;
}

.login {
  align-content: center;
}

.error-filed {
  margin-left: 50px;
}

.card {
  height: max-content;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(250, 250, 250, 1) !important;
}

.header-background {
  background: linear-gradient(90deg, #A945BB, #872CA8);
  margin-top: -10%;
  box-shadow: 0 0 30px 5px #DBC7DE;
}

.header-background-text {
  color: #FFFFFF;
  font-weight: 900;
  font-size: 24px;
}

.input-group-prepend span {
  width: 50px;
  color: black;
  border: 0 !important;
  height: 50px;
  font-size: 25px;
  background-color: transparent;
}

input.form-control {
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

input:focus {
  outline: 0 !important;
  box-shadow: 0 0 0 0 !important;

}

.card-header {
  background-color: unset;
  border-bottom: unset;
}
</style>