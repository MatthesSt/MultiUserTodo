<template>
  <div class="d-flex justify-content-center align-items-center container">
    <div class="card w-100" style="margin-top: 25%">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="login()" autocomplete="off" class="d-flex flex-column align-items-center">
          <div class="m-4 alert alert-danger text-center" v-if="error">Username or password is not correct</div>
          <div class="w-50">
            <SexyInput placeholder="email" id="email" type="email" name="email" v-model="email" required autocomplete="email" />
          </div>
          <div class="w-50">
            <SexyInput placeholder="password" id="password" type="password" name="password" v-model="password" required autocomplete="password" />
          </div>
          <div>
            <button class="btn btn-success m-4" type="submit" v-if="!loggingIn">sign in</button>
            <span v-if="loggingIn" class="m-4 spinner-border spinner-border-sm text-primary"></span>
            <button class="btn btn-info m-4" type="button" @click="router.push('/register')">register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as API from '@/API';
import SexyInput from '@/components/SexyInput.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const password = ref('');
const email = ref('');
const error = ref();
const loggingIn = ref(false);

async function login() {
  error.value = false;
  if (!email.value) return (error.value = true);
  if (!password.value) return (error.value = true);
  loggingIn.value = true;
  try {
    await API.login(email.value, password.value);
    console.log('logged in with:' + email.value);
    email.value = '';
    password.value = '';
    router.push('/home');
  } catch (e) {
    console.error({ "couldn't login": e });
  } finally {
    password.value = '';
    error.value = true;
    loggingIn.value = false;
  }
}
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}
</style>
