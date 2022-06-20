<template>
  <main>
    <div>
      <form @submit.prevent="createNewList()">
        <input v-model="newListName" type="text" placeholder="name" />
        <button class="btn btn-success">create new list</button>
      </form>
    </div>
    <div v-if="lists.length" class="d-flex justify-content-center align-items-center m-5">
      <form @submit.prevent="addTodo()">
        <input type="text" placeholder="name" v-model="newToDoName" />
        <input type="number" placeholder="priority" v-model="priority" />
        <select name="list" id="list" v-model="selectedList">
          <option v-for="list in lists" :key="list.id" :value="list.id">{{ list.name }}</option>
        </select>
        <button class="btn btn-success" type="submit">add Todo</button>
      </form>
    </div>
    <div v-for="list in lists" :key="list.id">
      <h2>{{ list.name }}</h2>
      <div class="maingrid">
        <div class="d-flex flex-column justify-content-start">
          <h3>ToDos</h3>
          <div>
            <div
              v-for="todo in Object.values(list.todos || {})
                .filter(t => !t.done)
                .sort(todoSortPriority)"
              :key="todo.name"
            >
              {{ todo }}
              <input type="checkbox" class="btn btn-success" @change="todo.done = true" />
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-start">
          <h3>Done</h3>
          <div>
            <div
              v-for="todo in Object.values(list.todos || {})
                .filter(t => t.done)
                .sort(todoSortPriority)"
              :key="todo.name"
            >
              {{ todo }}
              <button class="btn btn-danger" @click="deleteTodo(todo.id)">X</button>
              <button class="btn btn-success" @click="todo.done = false">&#x2713;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { todo, todoList, typescriptFix } from '@/types';
import * as API from '@/API';
import { currentUser } from '@/router';

export default defineComponent({
  data() {
    return {
      error: '',
      newListName: '',
      todos: [] as todo[],
      lists: [] as todoList[],
      doneTodos: [] as todo[],
      newToDoName: '',
      selectedListId: '',
      priority: null as number | null,
    };
  },
  computed: {
    selectedList(): todoList | undefined {
      return this.lists.find(l => l.id == this.selectedListId);
    },
  },
  async mounted() {
    console.log(typescriptFix);
    this.lists = await API.getTodoLists();
  },
  methods: {
    createNewList() {
      this.lists.push({ name: this.newListName, id: Math.random() + '', creatorId: currentUser.value!.uid, todos: {} });
    },
    addTodo() {
      if (!this.selectedList) return;
      if (this.newToDoName && this.priority != null && typeof this.priority == 'number') {
        let todo = { name: this.newToDoName, priority: this.priority, done: false, id: Math.random() + '' };
        this.selectedList.todos[todo.id] = todo;
        try {
          API.addTodo(this.selectedList);
        } catch (e) {
          this.error = "couldn't upload todo";
        }
        this.todos.push(todo);
      }
    },
    // async updateTodo(todo: todo) {
    //   try {
    //     await API.updateTodo(todo);
    //   } catch (e) {
    //     this.error = "couldn't update";
    //   }
    // },
    deleteTodo(id: string) {
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
