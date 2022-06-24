<template>
  <main>
    <Exp :maxValue="100" :progress="20" :secondaryTicks="100"></Exp>
    <createNewList></createNewList>
    <addTodoForm v-if="todoLists.length"></addTodoForm>
    <ListCarousel></ListCarousel>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TYPESCRIPT_FIX } from '@/types';
import { useTodos } from '@/stores/todo';
import { mapActions, mapState } from 'pinia';

import ListCarousel from '@/components/ListCarousel.vue';
import Exp from '@/components/Exp.vue';
import addTodoForm from '@/components/addTodoForm.vue';
import createNewList from '@/components/createNewList.vue';

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
    ListCarousel,
    Exp,
    addTodoForm,
    createNewList,
  },
  computed: {
    ...mapState(useTodos, ['todoLists', 'error']),
  },
  async mounted() {
    console.log(TYPESCRIPT_FIX);

    await this.getLists();
  },
  methods: {
    ...mapActions(useTodos, ['getLists']),
  },
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
