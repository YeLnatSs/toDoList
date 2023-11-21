<template>
  <div class="max-w-lg mx-auto flex flex-col items-center justify-center h-screen">
    <h1 class="text-center text-3xl mb-5 font-bold">To do list</h1>
    <search-input v-model="search" />
    <Form v-model="item" @submit="submit" />
    <Lists v-model="newTask" :tasks="filtered" :edited="listStore.taskEdited" @removeTask="removeTask" @editTask="editTask" @saveEdit="saveEdit" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useListStore } from '@/stores/lists'
import SearchInput from '@/components//Search.vue'
import Form from '@/components//Form.vue'
import Lists from '@/components//Lists.vue'

const listStore = useListStore()

const item: Ref<string> = ref('')
const newTask: Ref<string> = ref('')
const search: Ref<string> = ref('')

const submit = () => {
  if (item.value.trim() !== '') {
    listStore.addTodo({ task: item.value, checked: false })
    item.value = ''
  }
}

const filtered = computed(() => {
  const searchTerm = search.value.trim().toLowerCase()

  if (searchTerm === '') {
    return listStore.tasks
  } else {
    return listStore.tasks.filter((task) => task.task.toLowerCase().includes(searchTerm))
  }
})

const removeTask = (index: number) => {
  listStore.removeTask(index)
}

const editTask = (index: number) => {
  listStore.onEdit(index)
  newTask.value = listStore.tasks[index].task
}

const saveEdit = () => {
  if (newTask.value.trim() !== '') {
    listStore.editTask({ idx: listStore.taskEdited!, newValue: newTask.value })
    newTask.value = ''
  }
}

</script>
