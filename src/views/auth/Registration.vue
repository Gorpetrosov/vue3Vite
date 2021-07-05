<template>
  <div class="register">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
              <h4 class="text-center p-5">Register</h4>
        </div>
        <div class="card-body mt-2">
          <Form @submit="submit($event)" v-slot="{ errors }">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="grin"></font-awesome-icon></span>
              </div>
              <Field name="name" type="text" class="form-control" rules="name"
                     placeholder="Name..."></Field>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.name }}</span>
              </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="envelope"></font-awesome-icon></span>
              </div>
              <Field name="email" class="form-control" placeholder="Email..." rules="email"/>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.email }}</span>
              </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="calendar-alt"></font-awesome-icon></span>
              </div>
              <Field name="startDate" type="date" class="form-control" rules="startDate"
                     placeholder="Education Start Time"></Field>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.startDate }}</span>
              </div>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="calendar-alt"></font-awesome-icon></span>
              </div>
              <Field name="endDate" type="date" class="form-control" rules="endDate"
                     placeholder="Education End Time"></Field>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.endDate }}</span>
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
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><font-awesome-icon icon="lock"></font-awesome-icon></span>
              </div>
              <Field name="confirmation" type="password" class="form-control" rules="confirmed:@password"
                     placeholder="Confirm Password"></Field>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.confirmation }}</span>
              </div>
            </div>
            <div class="input-group form-group">
              <Field name="agreement" value="true" rules="agreement" class="form-check-input" type="checkbox" id="flexCheckChecked"></Field>
                <label class="form-check-label" for="flexCheckChecked">
                   I agree to the <router-link target="_blank" :to="{name: 'Terms'}">terms and conditions</router-link>
                </label>
            </div>
            <div class="row">
              <div class="col-12">
                <span class="text-danger error-filed">{{ errors.agreement }}</span>
              </div>
            </div>
            <div class="form-group text-center">
              <input type="submit" value="LETS GO" class="btn text-danger btn-outline-light m-auto p-5">
            </div>
          </Form>
          <router-link :to="{name: 'Login'}" class="text-center d-block">Have a account? Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue"
import {Field, Form, useField, useValidateForm, useFormValues} from 'vee-validate';
import { useStore } from 'vuex'
export default defineComponent({
  name: "Registration",
  components: {
    Field,
    Form,
  },
  setup() {
    const store = useStore();
    function submit(fields) {
      const validate = useValidateForm();
      validate().then(res => {
        if(res.valid){
          const data = {
            "name": fields.name,
            "email": fields.email,
            "password": fields.password,
            "password_confirmation": fields.confirmation,
            "education_start_date": fields.startDate,
            "education_end_date": fields.endDate,
            "terms": Boolean(fields.terms)
          }
          store.dispatch('register',data)
        }
      })
    }
    return{
     submit,
    }
  }
})
</script>

<style scoped>
.register {
  background-image: url('../../assets/login.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: 'Numans', sans-serif;
}

.register {
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
.form-check-label {
  margin-left: 5px!important;
}
.form-check-input {
  margin-left: 15px!important;
  width: 20px;
  height: 20px;
}
</style>