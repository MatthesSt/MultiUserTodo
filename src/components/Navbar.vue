<template>
  <div id="nav" v-if="currentUser">
    <router-link to="/home" @keydown.enter.prevent>Home</router-link>
    <a>|</a>
    <router-link to="/groups" @keydown.enter.prevent>Groups</router-link>
    <a>|</a>
    <a class="pointer" @click="logout()" @keydown.enter.prevent>LogOut</a>
  </div>
</template>

<script setup lang="ts">
import { currentUser } from '@/router';
import * as API from '@/API';
function logout() {
  API.logout();
}
</script>

<style scoped lang="scss">
a {
  margin-left: 1vw;
}
#nav {
  padding: 3vh;
  height: 8vh;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  a {
    font-weight: bold;
    color: rgb(255, 255, 255);

    &.router-link-exact-active {
      color: rgb(101, 211, 255);
    }
  }
}
</style>
