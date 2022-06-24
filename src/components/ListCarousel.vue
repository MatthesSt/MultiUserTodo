<template>
  <div id="listCarousel" class="carousel slide" data-bs-interval="false">
    <div class="carousel-indicators">
      <button
        v-for="(list, index) in todoLists"
        :key="list.id"
        type="button"
        data-bs-target="#listCarousel"
        :data-bs-slide-to="index"
        :class="{ active: index == 0 }"
        aria-current="true"
        :aria-label="`Slide ${index}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(list, index) in todoLists" :key="list.id" class="carousel-item" :class="{ active: index == 0 }">
        <h2 class="listheader">
          {{ list.name }}
          <Modal :title="'title'" :affirmText="'bestätigen'" :negativeText="'Abbrechen'" :affirm-action="async () => onUpdateList(list)">
            <div>ModalBody</div>
            <template v-slot:button>
              <i role="button" class="fas fa-cogs"></i>
            </template>
          </Modal>
        </h2>
        <div class="list">
          <div class="d-flex flex-column align-items-center">
            <h3>ToDos</h3>
            <ul>
              <li v-for="todo in list.todos.filter(t => !t.done).sort(todoSortPriority)" :key="todo.id" class="d-flex align-items-center w-100 my-2">
                <input type="radio" class="" @click="todo.done = true" />
                <div class="text-start ms-4">{{ todo.name }}</div>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column align-items-center">
            <h3>Done</h3>
            <ul>
              <li v-for="todo in list.todos.filter(t => t.done)" :key="todo.id" class="d-flex align-items-center justify-content-between w-100 my-2">
                <div class="text-start ms-4">{{ todo.name }}</div>
                <div>
                  <button class="btn btn-danger" @click.stop="onDeleteTodo(todo.id, list)">X</button>
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
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { Todo, TodoList } from '@/types';
import { useTodos } from '@/stores/todo';
import { mapActions, mapState } from 'pinia';
import Modal from '@/components/Modal.vue';

export default defineComponent({
  data() {
    return {};
  },
  components: {
    Modal,
  },
  computed: {
    ...mapState(useTodos, ['todoLists', 'error']),
  },
  methods: {
    ...mapActions(useTodos, ['deleteTodo', 'updateList']),
    todoSortPriority(a: Todo, b: Todo) {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    },
    onDeleteTodo(todoId: string, list: TodoList) {
      let todoList = this.todoLists.find(l => l.id == list.id);
      if (!todoList) return;
      this.deleteTodo(todoId, todoList);
    },
    onUpdateList(list: TodoList) {
      console.log(list);
      // TODO:
    },
  },
});
</script>
<style lang="scss" scoped>
$sizes: 0px, 550px, 600px, 750px, 900px, 1150px, 1400px, 1800px;
$bg-dark: #222;
$text-light: white;
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
  .listheader {
    display: flex;
    justify-content: center;
    border: 1px solid lighten($bg-dark, 5%);
    width: 70%;
    margin-inline: auto;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 1em;
    ul {
      list-style-type: none;

      $widths: 100%, 80%, 70%, 60%, 50%, 40%, 30%, 20%;
      @for $i from 1 to length($sizes) {
        @media (min-width: nth($sizes,$i)) {
          width: nth($widths, $i);
        }
      }
    }
  }
}
</style>
