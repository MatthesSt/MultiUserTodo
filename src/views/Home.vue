<template>
  <main>
    <div class="d-flex justify-content-center">
      <div class="w-25"><SexyInput v-model="newListName" type="text" placeholder="name" btnText="create list" :btnAction="createNewList" /></div>
    </div>
    <div v-if="lists.length" class="d-flex justify-content-center align-items-center m-5">
      <form @submit.prevent="addTodo()">
        <SexyInput type="text" placeholder="name" v-model="newToDoName" />
        <SexyInput type="number" placeholder="priority" v-model="priority" />
        <SexyInput type="select" placeholder="list" v-model="selectedListId" :options="lists" :optionProjection="list => list.name" />

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
import { Todo, TodoList, TYPESCRIPT_FIX } from '@/types';
import * as API from '@/API';
import { currentUser } from '@/router';
import SexyInput from '@/components/SexyInput.vue';

export default defineComponent({
  data() {
    return {
      error: '',
      newListName: '',
      todos: [] as Todo[],
      lists: [] as TodoList[],
      newToDoName: '',
      selectedListId: '',
      priority: null as number | null,
    };
  },
  components: {
    SexyInput,
  },
  computed: {
    selectedList(): TodoList | undefined {
      return this.lists.find(l => l.name == this.selectedListId);
    },
  },
  async mounted() {
    console.log(TYPESCRIPT_FIX);
    this.lists = await API.getTodoLists();
  },
  methods: {
    createNewList() {
      this.lists.push({ name: this.newListName, id: Math.random() + '', creatorId: currentUser.value!.uid, todos: {} });
    },
    addTodo() {
      if (!this.selectedList) return;
      if (this.newToDoName && this.priority != null && typeof this.priority == 'string') {
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
    todoSortPriority(a: Todo, b: Todo) {
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
