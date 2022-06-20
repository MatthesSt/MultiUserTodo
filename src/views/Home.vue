<template>
  <main>
    <div class="d-flex justify-content-center align-items-center m-5">
      <form @submit.prevent="addTodo()">
        <input type="text" placeholder="name" v-model="newToDoName" />
        <input type="number" placeholder="priority" v-model="priority" />
        <button class="btn btn-success" type="submit">add Todo</button>
      </form>
    </div>
    <div class="maingrid">
      <div class="d-flex flex-column justify-content-start">
        <h3>ToDos</h3>
        <div v-for="todo in todos.filter(t => !t.done).sort(todoSortPriority)" :key="todo.name">
          {{ todo }}
          <input type="checkbox" class="btn btn-success" @change="todo.done = true" />
        </div>
      </div>
      <div class="d-flex flex-column justify-content-start">
        <h3>Done</h3>
        <div v-for="todo in todos.filter(t => t.done).sort(todoSortPriority)" :key="todo.name">
          {{ todo }}
          <button class="btn btn-danger" @click="deleteTodo(todo.id)">X</button>
          <button class="btn btn-success" @click="todo.done = false">&#x2713;</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { todo, typescriptFix } from '@/types';

export default defineComponent({
  data() {
    return {
      todos: [] as todo[],
      doneTodos: [] as todo[],
      newToDoName: '',
      priority: null as number | null,
    };
  },
  mounted() {
    console.log(typescriptFix);
  },
  methods: {
    addTodo() {
      if (this.newToDoName && this.priority != null && typeof this.priority == 'number') {
        this.todos.push({
          name: this.newToDoName,
          priority: this.priority,
          done: false,
          id: Math.random(),
        });
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter(t => t.id != id);
    },
    todoSortPriority(a: todo, b: todo) {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    },
  },
});
</script>
<style lang="scss" scoped>
main {
  height: 100vh;
  padding-inline: 20px;
}
.maingrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
}
</style>
