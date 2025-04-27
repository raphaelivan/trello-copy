<script setup>

  defineProps({
    task: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div
    :title="task.createdAt.toLocaleString()"
    class="task bg-white rounded p-2 mb-2 shadow-sm max-w-[250px]"
    >

    <span>
      {{ task.title }}
    </span>
  </div>
</template>
