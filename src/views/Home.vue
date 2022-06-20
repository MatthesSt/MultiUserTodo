<template>
  <main>
    <div class="d-flex justify-content-center align-items-center m-5">
      <form @submit.prevent="addTodo()">
        <input type="text" />
        <button class="btn btn-success" type="submit">add Todo</button>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      todos: [] as todo[]
    };
  },
  methods: {
    addTodo() {
      console.log('todo');
    },
  },
});
</script>
<style lang="scss" scoped>
main {
  height: 100vh;
}
</style>
