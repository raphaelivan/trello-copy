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
    :class="task.done ? 'done' : ''"

    @mouseover="task.taskInFocus = true"
    @mouseleave="task.taskInFocus = false"
    >

    <DragHandle class='pr-2' />

    <span class="task-title">
      <input
        v-model="task.done"
        v-show="task.taskInFocus || task.done"
        type="checkbox"
        class="align-middle"
        />

      {{ task.title }}
    </span>
  </div>
</template>

<style>
.sortable-drag {
  transform: rotate(3deg);
}

.sortable-chosen {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
}

.sortable-ghost {
  opacity: 0.5;
  padding: 8px;
  background: rgb(134, 134, 134);
}

.done {
  background: rgb(174, 233, 174);
}

.done span.task-title {
  @apply line-through
}
</style>
