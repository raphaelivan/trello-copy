
<script setup>

  import { nanoid } from 'nanoid';
  import Draggable from 'vuedraggable';

  const alt = useKeyModifier('Alt');

  const columns = useLocalStorage('task-board', [
    {
      id: nanoid(),
      title: 'Backlog',
      tasks: []
    },
    {
      id: nanoid(),
      title: 'In Progress',
      tasks:[]
    },

    {
      id: nanoid(),
      title: 'Block',
      tasks:[]
    },

    {
      id: nanoid(),
      title: 'Done',
      tasks:[]
    }
  ]);

  function addTask(column, task) {
    column.tasks.push(task)
  }
</script>

<template>
  <div>
    <Draggable
        v-model="columns"
        group="columns"
        itemKey="id"
        :animation="150"
        :handle="'.drag-handle'"
        class="flex gap-4 overflow-x-auto items-start">

        <template #item="{element : column}">
          <div
            class="column bg-gray-200 rounded p-5 min-w-[250px]"
            >
            <header
              class="font-bold mb-4"
            >
              <DragHandle />

              {{ column.title }}
            </header>

            <Draggable
              v-model="column.tasks"
              :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
              itemKey="id"
              handle=".drag-handle"
              :animation="150"
              @move="console.log('onMove', $event)">


              <template #item="{element : task}">
                <TrelloBoardTask :task="task" />
              </template>

            </Draggable>

            <footer>
              <!-- Listen the add event from NewTask-->
              <NewTask
                @add="addTask(column, $event)"
              />
            </footer>

          </div>
        </template>
    </Draggable>
  </div>

</template>
