<template>
  <ul class="w-full">
    <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center mb-3 border-b-2 pb-3">
      <div>
          <input type="checkbox" v-model="task.checked" class="mr-3">
          <span v-if="index !== edited" :class="{ checked: task.checked }">{{
            task.task
          }}</span>
          <input v-else :value="modelValue" @input="updateModelValue" class="border rounded py-2 pl-1.5" />
      </div>
      <div class="flex justify-between w-1/2 items-center">
        <button class="bg-blue-700 text-white rounded py-2 w-1/2 mr-2" v-if="index === edited" @click.prevent="saveEdit">valider</button>
        <button v-else @click.prevent="editTask(index)" class="bg-green-700 text-white rounded py-2 w-1/2 mr-2">Éditer</button>
        <button class="bg-red-800 text-white rounded py-2 w-1/2" @click.prevent="removeTask(index)">Supprimer</button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { tasks } = defineProps(['tasks', 'edited', 'newTask', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'removeTask', 'editTask', 'saveEdit'])

const updateModelValue = (event: any) => {
  emit('update:modelValue', event.target.value);
}

const removeTask = (index: number) => {
  emit('removeTask', index)
}

const editTask = (index: number) => {
  emit('editTask', index)
  tasks.modelValue = tasks[index].task
}

const saveEdit = () => {
  if (tasks.modelValue.trim() !== '') {
    console.log('tasks.modelValue', tasks.modelValue)
    emit('saveEdit', tasks.modelValue )
  }
}
</script>

<style lang="scss" scoped>
.checked {
  text-decoration: line-through;
  font-style: italic;
}
</style>