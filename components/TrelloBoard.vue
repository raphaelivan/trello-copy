
<script setup>

  import { nanoid } from 'nanoid';
  import Draggable from 'vuedraggable';

  const columns = ref([
    {
      id: nanoid(),
      title: 'Backlog',
      tasks: [
        {
          id: nanoid(),
          title: 'Task 1',
          createdAt: new Date()
        },
        {
          id: nanoid(),
          title: 'Task 2',
          createdAt: new Date()
        }
      ]
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks:[]
    },

    {
      id: nanoid(),
      title: 'QA',
      tasks:[]
    }
  ]);
</script>

<template>
  <div>
    <Draggable
        v-model="columns"
        group="columns"
        itemKey="id"
        class="flex gap-4 overflow-x-auto items-start">

        <template #item="{element : column}">
          <div
            class="column bg-gray-200 rounded p-5 min-w-[250px]"
            >
            <header
              class="font-bold mb-4"
            >
              {{ column.title }}
            </header>

            <TrelloBoardTask
              v-for="task in column.tasks"
              :key="task.id"
              :task="task"
            />

            <footer>
              <button class="text-gray-500 mt-4">
                + Add Card
              </button>
            </footer>
          </div>
        </template>
    </Draggable>

  </div>
</template>
