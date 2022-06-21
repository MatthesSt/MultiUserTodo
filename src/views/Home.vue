<template>
  <main>
    <div class="d-flex justify-content-center">
      <div class="listCreation" style="position: relative; left: 0%">
        <SexyInput v-model="newListName" type="text" placeholder="name" sideWidth="25%" btnText="create list" :btnAction="createNewList" />
      </div>
    </div>
    <div v-if="lists.length" class="my-3">
      <form @submit.prevent="addTodo()" class="form">
        <div class="formInputs">
          <div class="formInputWrapper">
            <SexyInput type="text" placeholder="name" v-model="newToDoName" />
          </div>
          <div class="formInputWrapper">
            <SexyInput type="number" placeholder="priority" v-model="priority" />
          </div>
          <div class="formInputWrapper">
            <SexyInput type="select" placeholder="list" v-model="selectedListName" :options="lists" :optionProjection="(list:any) => list.name" />
          </div>
        </div>
        <div><button class="btn btn-success mt-3">add Todo</button></div>
      </form>
    </div>
    <div id="listCarousel" class="carousel slide" data-bs-interval="false">
      <div class="carousel-indicators">
        <button
          v-for="(list, index) in lists"
          :key="list.id"
          type="button"
          data-bs-target="#listCarousel"
          :data-bs-slide-to="index"
          class="active"
          aria-current="true"
          :aria-label="`Slide ${index}`"
        ></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(list, index) in lists" :key="list.id" class="carousel-item" :class="{ active: index == 0 }">
          <h2>{{ list.name }}</h2>
          <div class="list">
            <div class="d-flex flex-column align-items-center">
              <h3>ToDos</h3>
              <ul class="d-flex flex-column justify-content-start">
                <li
                  v-for="todo in Object.values(list.todos || {})
                    .filter(t => !t.done)
                    .sort(todoSortPriority)"
                  :key="todo.name"
                  class="d-flex align-items-center w-100 my-2"
                >
                  <input type="radio" class="" @click="todo.done = true" />
                  <div class="text-start ms-4">{{ todo.name }}</div>
                </li>
              </ul>
            </div>
            <div class="d-flex flex-column align-items-center">
              <h3>Done</h3>
              <ul class="d-flex flex-column justify-content-start">
                <li
                  v-for="todo in Object.values(list.todos || {}).filter(t => t.done)"
                  :key="todo.name"
                  class="d-flex align-items-center justify-content-between w-100 my-2"
                >
                  <div class="text-start ms-4">{{ todo.name }}</div>
                  <div>
                    <button class="btn btn-danger" @click.stop="deleteTodo(todo.id)">X</button>
                    <button class="btn btn-success" @click.stop="todo.done = false">&#x2713;</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#listCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#listCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
      selectedListName: '',
      priority: null as number | null,
    };
  },
  components: {
    SexyInput,
  },
  computed: {
    selectedList(): TodoList | undefined {
      return this.lists.find(l => l.name == this.selectedListName);
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
      console.log(id);
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
$sizes: 0px, 550px, 600px, 750px, 900px, 1150px, 1400px, 1800px;
$bg-dark: #222;
$text-light: white;

main {
  height: 100vh;
  padding-inline: 30px;
  background-color: $bg-dark;
  color: $text-light;

  .listCreation {
    $widths: (90%, 80%, 70%, 60%, 50%, 40%, 30%, 20%);
    @for $i from 1 to length($sizes) {
      @media (min-width: nth($sizes,$i)) {
        width: nth($widths, $i);
      }
    }
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    .formInputs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      width: 70%;
    }
    @media (max-width: nth($sizes,2)) {
      display: block;
      button {
        width: 50%;
      }
      .formInputs {
        width: 100%;
      }
    }
    $margins: (0px, 0px, 0px, 100px, 150px, 250px, 300px, 400px);
    @for $i from 1 to length($sizes) {
      @media (min-width: nth($sizes,$i)) {
        margin-inline: nth($margins, $i);
      }
    }
  }
  .carousel {
    background-color: $bg-dark;
    .carousel-item {
      padding: 50px;
    }
    .carousel-control-next,
    .carousel-control-prev {
      width: auto;
      padding-inline: 0px;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 1em;
      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;

        $widths: 100%, 80%, 70%, 60%, 50%, 40%, 30%, 20%;
        @for $i from 1 to length($sizes) {
          @media (min-width: nth($sizes,$i)) {
            width: nth($widths, $i);
          }
        }
      }
    }
  }
}
</style>
