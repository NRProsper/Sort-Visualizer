<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {shuffle as _shuffle, size} from "lodash/collection.js";
import Shuffle from 'vue-material-design-icons/Shuffle.vue';
import {useSizeStore} from "@/stores/general.js";
import {usePlayOrPause} from "@/stores/playOrPause.js";
import Bar from "@/components/Bar.vue";

const sizeStore = useSizeStore();
const pauseOrPlay = usePlayOrPause();



const array = ref([])


onMounted(() => resetArray())

// Add a function to generate an array
function resetArray() {
  array.value = []
  for(let i = 0; i < sizeStore.size; i++) {
    array.value.push(randomIntFromInterval(5, 500))
  }
}

watch(() => sizeStore.size, (newSize) => {
  resetArray()
})

const randomIntFromInterval = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);



</script>

<template>
  <div class="border border-slate-300 p-6 rounded-md shadow min-h-full shrink-0 w-full flex flex-col space-y-2 items-center justify-center">
    <TransitionGroup name="visualizer" tag="div" class="relative flex items-end gap-[3px]">
      <Bar v-for="(item, index) in array" :height="item" :number="item" :key="index"  />
    </TransitionGroup>
    <button class="py-1 px-4 bg-blue-500 hover:bg-blue-700 transition-all rounded-md" @click="resetArray">
      <Shuffle fill-color="#fff" :size="25" />
    </button>
  </div>
</template>

<style scoped>
.visualizer-move,
.visualizer-enter-active,
.visualizer-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.visualizer-leave-active {
  position: absolute;
}

.visualizer-enter-from,
.visualizer-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

</style>