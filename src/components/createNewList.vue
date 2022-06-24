<template>
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
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useTodos } from '@/stores/todo';

import SexyInput from '@/components/SexyInput.vue';

export default defineComponent({
  data() {
    return { newListName: '' };
  },
  components: {
    SexyInput,
  },
  computed: {
    ...mapState(useTodos, ['todoLists']),
  },
  methods: {
    ...mapActions(useTodos, ['createNewList']),
    onCreateList(listName: string) {
      if (this.todoLists.find(l => l.name === listName)) return;
      this.createNewList(listName);
    },
  },
});
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
