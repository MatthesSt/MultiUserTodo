<template>
  <div class="d-flex justify-content-center align-items-center container">
    <div class="card w-100" style="margin-top: 25%">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="register()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">Username or password is not correct</div>
          <div class="form-group row mb-4">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
            <div class="col-md-6">
              <input id="email" type="email" name="email" value="" required autocomplete="email" class="form-control" />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
            <div class="col-md-6">
              <input id="password" type="password" name="password" required autocomplete="password" class="form-control" />
            </div>
          </div>
          <div class="form-group row">
            <label for="confirmPassword" class="col-md-4 col-form-label text-md-right">Password bestätigen</label>
            <div class="col-md-6">
              <input id="confirmPassword" type="password" name="confirmPassword" required autocomplete="password" class="form-control" />
            </div>
          </div>
          <button class="btn btn-success m-4 col-2" type="submit" v-if="!loggingIn">Registrieren</button>
          <span v-if="loggingIn" class="m-4 spinner-border spinner-border-sm text-primary"></span>
          <button class="btn btn-info m-4 col-2" type="button" @click="login()">Anmelden</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as API from '@/API';
export default defineComponent({
  data() {
    return {
      password: '',
      email: '',
      error: false,
      loggingIn: false,
    };
  },
  methods: {
    async register() {
      this.error = false;

      if (!this.email) return (this.error = true);
      if (!this.password) return (this.error = true);
      this.loggingIn = true;
      try {
        await API.register(this.email, this.password);
        console.log('logged in with:' + this.email);
        this.email = '';
        this.password = '';
        this.$router.push('/home');
      } catch (e) {
        console.error({ "couldn't login": e });
      } finally {
        this.password = '';
        this.error = true;
        this.loggingIn = false;
      }
    },
    login() {
      this.$router.push('/');
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}
</style>
