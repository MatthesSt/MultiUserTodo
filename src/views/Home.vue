<template>
  <main>
    <Exp :maxValue="100" :progress="20" :secondaryTicks="100"></Exp>
    <createNewList></createNewList>
    <addTodoForm v-if="todoStore.todoLists.length"></addTodoForm>
    <ListCarousel></ListCarousel>
  </main>
</template>

<script setup lang="ts">
import { TYPESCRIPT_FIX } from '@/types';
import { useTodos } from '@/stores/todo';
import { onBeforeMount } from 'vue';

import ListCarousel from '@/components/ListCarousel.vue';
import Exp from '@/components/Exp.vue';
import addTodoForm from '@/components/addTodoForm.vue';
import createNewList from '@/components/createNewList.vue';

const todoStore = useTodos();

onBeforeMount(async () => {
  await todoStore.getLists();
});
</script>
<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding-inline: 30px;
  background-color: #222;
  color: white;
}
</style>
