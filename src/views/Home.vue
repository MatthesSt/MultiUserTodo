<template>
  <main>
    <Exp :maxValue="100" :progress="20" :secondaryTicks="100"></Exp>
    <div class="d-flex justify-content-center">
      <div class="listCreation">
        <SexyInput
          v-model="newListName"
          type="text"
          placeholder="name"
          sideWidth="25%"
          btnText="create list"
          :btnAction="() => onCreateList(newListName)"
        />
      </div>
    </div>
    <form @submit.prevent="onAddTodo()" v-if="todoLists.length" class="form my-3">
      <div class="formInputs">
        <SexyInput type="text" placeholder="name" v-model="newToDoName" />
        <SexyInput type="number" placeholder="priority" v-model="priority" />
        <SexyInput type="select" placeholder="list" v-model="selectedListName" :options="todoLists" :optionProjection="(list:any) => list.name" />
      </div>
      <button class="btn btn-success mt-3">add Todo</button>
    </form>
    <ListCarousel></ListCarousel>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TYPESCRIPT_FIX } from '@/types';
import { useTodos } from '@/stores/todo';
import { mapActions, storeToRefs } from 'pinia';
import { mapState } from 'pinia';

import SexyInput from '@/components/SexyInput.vue';
import Modal from '@/components/Modal.vue';
import ListCarousel from '@/components/ListCarousel.vue';
import Exp from '@/components/Exp.vue';

export default defineComponent({
  setup() {
    return { console };
  },
  data() {
    return {
      newListName: '',
      newToDoName: '',
      selectedListName: '',
      priority: null as number | null,
    };
  },
  components: {
    SexyInput,
    Modal,
    ListCarousel,
    Exp,
  },
  computed: {
    ...mapState(useTodos, ['todoLists', 'error']),
  },
  async mounted() {
    console.log(TYPESCRIPT_FIX);

    await this.getLists();
  },
  methods: {
    ...mapActions(useTodos, ['createNewList', 'getLists', 'addTodo']),
    onCreateList(listName: string) {
      if (this.todoLists.find(l => l.name === listName)) return;
      this.createNewList(listName);
    },
    onAddTodo() {
      if (!this.selectedListName) return;
      if (this.newToDoName && this.priority != null && typeof this.priority == 'number') {
        let list = this.todoLists.find(l => l.name == this.selectedListName);
        if (!list) return;
        this.addTodo(this.newToDoName, this.priority, list);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
$sizes: 0px, 550px, 600px, 750px, 900px, 1150px, 1400px, 1800px;
$bg-dark: #222;
$text-light: white;

main {
  min-height: 100vh;
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
}
</style>
