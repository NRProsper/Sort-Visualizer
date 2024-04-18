<script setup>

import PlayPauseButton from "@/components/PlayPauseButton.vue";
</script>

<template>
<header class="w-full fixed inset-0 h-[60px] p-6 bg-white shadow-md flex items-center justify-center gap-[300px] hover:shadow-lg">
  <h1 class="text-md font-bold text-slate-900 uppercase">Sorting Visualizer</h1>
  <div class="flex items-center space-x-2">
    <select class="py-2 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
      <option selected="">Sorting Algorithm</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>

    <PlayPauseButton />

  </div>
</header>
</template>

<style scoped>

</style>