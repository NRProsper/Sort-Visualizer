<script setup>
import {onMounted, ref} from 'vue';
import {useSizeStore} from "@/stores/general.js";

import PlayPauseButton from "@/components/PlayPauseButton.vue";

const sizeStore = new useSizeStore();



function handleSizeChange(event) {
  sizeStore.changeSize(parseInt(event.target.value))
}



</script>

<template>
<header class="w-full z-10 fixed inset-0 h-[60px] p-8 bg-white shadow-md flex items-center justify-center gap-[300px] hover:shadow-lg">
  <h1 class="text-md font-bold text-slate-900 uppercase">Sorting Visualizer</h1>
  <div class="flex items-center space-x-6">
    <select class="py-2 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
      <option selected disabled>Sorting Algorithm</option>
      <option value="bubble">Bubble Sort</option>
      <option value="merge">Merge Sort</option>
      <option value="quick">Quick Sort</option>
    </select>

    <PlayPauseButton />

    <label class="block">
      <span class="block">Size: {{ sizeStore.size }}</span>
      <input
          v-model="sizeStore.size"
          @input="handleSizeChange"
          type="range" min="50" max="300"
          class="w-[150px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      >
    </label>

  </div>
</header>
</template>

<style scoped>

</style>