<script setup>
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import {ref} from "vue";

const isPaused = ref(true)

</script>

<template>

  <button class="rounded-full bg-blue-500 flex items-center justify-center" @click="isPaused =! isPaused">
    <Play  v-if="isPaused" :size ="30" fill-color="white" />
    <Pause v-else :size ="30" fill-color="white" />
  </button>

</template>

<style scoped>

</style>