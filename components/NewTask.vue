<script setup>
  import { nanoid } from 'nanoid';

  const emit = defineEmits('add', payload);

  const title   = ref('');
  const focused = ref(false);

  function createTask(e) {
    if(title.value.trim())  {
      e.preventDefault();

      emit('add', {
        id: nanoid(),
        title: title.value,
        createdAt: new Date(),
        done: false,
        taskInFocus: false
      })
    }

    title.value = '';
  }
</script>

<template>
  <div>
    <textarea
      v-model="title"
      @keydown.tab="createTask"
      @keydown.enter="createTask"
      class="focus:bg-white focus:shadow resize-none border-none rounded p-2 w-full"
      :class="{
        'h-10': !focused,
        'h-20': focused
      }"

      @focus="focused = true"
      @blur="focused = false"

      :placeholder="!focused ? '+ Add Card' : 'Enter a title of task'"
      />
  </div>
</template>

<style>

</style>
