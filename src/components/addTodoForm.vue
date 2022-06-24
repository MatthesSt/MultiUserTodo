<template>
  <form @submit.prevent="onAddTodo()" class="form my-3">
    <div class="formInputs">
      <SexyInput type="text" placeholder="name" v-model="newToDoName" />
      <SexyInput type="number" placeholder="priority" v-model="priority" />
      <SexyInput type="select" placeholder="list" v-model="selectedListName" :options="todoLists" :optionProjection="(list:any) => list.name" />
    </div>
    <button class="btn btn-success mt-3">add Todo</button>
  </form>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { useTodos } from '@/stores/todo';

import SexyInput from '@/components/SexyInput.vue';

export default defineComponent({
  data() {
    return {
      selectedListName: '',
      newToDoName: '',
      priority: null as number | null,
    };
  },
  components: {
    SexyInput,
  },
  computed: {
    ...mapState(useTodos, ['todoLists']),
  },
  methods: {
    ...mapActions(useTodos, ['addTodo']),
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
</style>
