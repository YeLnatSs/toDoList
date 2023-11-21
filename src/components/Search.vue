<template>
  <button @click.prevent="toggleSearchInput" class="w-5 block ml-auto">
    <img src="@/assets/img/loupe.svg"/>
  </button>
  <input
    v-if="showSearch"
    type="text"
    placeholder="Chercher dans la liste"
    :value="modelValue"
    @input="updateModelValue"
    class="w-1/2 border-b-2 mb-3 py-2 pl-1.5"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
defineProps({modelValue: String})

const showSearch: Ref<boolean> = ref(false)
const emit = defineEmits(['update:modelValue'])

const updateModelValue = (event: any) => {
  emit('update:modelValue', event.target.value);
}

const toggleSearchInput = () => {
  showSearch.value = !showSearch.value;
}
</script>