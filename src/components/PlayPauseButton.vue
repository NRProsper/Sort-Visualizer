<script setup>
import {ref} from "vue";
import Play from 'vue-material-design-icons/Play.vue'
import Pause from 'vue-material-design-icons/Pause.vue'
import {usePlayOrPause} from "@/stores/playOrPause.js";

const playOrPause = new usePlayOrPause();



</script>

<template>

  <button class="p-[3px] rounded-full bg-blue-500 hover:bg-blue-700 transition-all flex items-center justify-center" @click="playOrPause.togglePayer">
    <Play  v-if="playOrPause.isPaused" :size ="30" fill-color="white" />
    <Pause v-else :size ="30" fill-color="white" />
  </button>

</template>

<style scoped>

</style>