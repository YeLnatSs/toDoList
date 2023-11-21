<template>
  <form @submit.prevent="submit" class="w-1/2 mb-5">
    <input
      :value="modelValue"
      @input="updateModelValue"
      placeholder="Ajouter une tâche"
      class="border-b-2 w-full mb-4 py-2 pl-1.5"
      />
    <button class="block mx-auto text-white bg-slate-900 rounded py-2 px-8 uppercase font-bold" type="submit">Ajouter</button>
  </form>
</template>

<script setup lang="ts">
defineProps({modelValue: String})

const emit = defineEmits(['update:modelValue', 'submit'])

const updateModelValue = (event: any) => {
  emit('update:modelValue', event.target.value);
}

const submit = () => {
  emit('submit');
}
</script>