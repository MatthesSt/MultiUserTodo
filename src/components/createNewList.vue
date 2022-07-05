<template>
  <div class="d-flex justify-content-center">
    <div class="listCreation">
      <SexyInput v-model="newListName" type="text" placeholder="name" sideWidth="25%" btnText="create list" :btnAction="() => onCreateList()" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTodos } from '@/stores/todo';

import SexyInput from '@/components/SexyInput.vue';

const todoStore = useTodos();

const newListName = ref('');

function onCreateList() {
  if (todoStore.todoLists.find(l => l.name === newListName.value)) return;
  todoStore.createNewList(newListName.value);
}
</script>
<style lang="scss" scoped>
$sizes: 0px, 550px, 600px, 750px, 900px, 1150px, 1400px, 1800px;
.listCreation {
  $widths: (90%, 80%, 70%, 60%, 50%, 40%, 30%, 20%);
  @for $i from 1 to length($sizes) {
    @media (min-width: nth($sizes,$i)) {
      width: nth($widths, $i);
    }
  }
}
</style>
