import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', {
  state: () => ({
    tasks: ref([] as string[]),
    taskEdited: ref<number | null>(null),
    searchedTask: ref([] as string[])
  }),
  actions: {
    addTodo(newTask: string) {
      this.tasks.push(newTask)
    },
    removeTask(idx: number) {
      this.tasks.splice(idx, 1)
    },
    onEdit(idx: number) {
      this.taskEdited = idx
    },
    editTask({ idx, newValue }: { idx: number; newValue: string }) {
      this.tasks[idx].task = newValue
      this.taskEdited = null
    }
  }
})
