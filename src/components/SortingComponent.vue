<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {shuffle as _shuffle, size} from "lodash/collection.js";
import Shuffle from 'vue-material-design-icons/Shuffle.vue';
import {useSizeStore} from "@/stores/general.js";
import {usePlayOrPause} from "@/stores/playOrPause.js";
import Bar from "@/components/Bar.vue";
import {mergeSort} from "@/algorithms/sortingAlgorithms.js";

const sizeStore = useSizeStore();
const pauseOrPlay = usePlayOrPause();



const array = ref([])


onMounted(() => resetArray()) //Initialize the bars when the component is mounted in the DOM

// Add a function to generate an array
function resetArray() {
  array.value = []
  // const uniques = new Set();
  for(let i = 0; i < sizeStore.size; i++) {
    // uniques.add(randomIntFromInterval(5, 500))
    array.value.push(randomIntFromInterval(5, 500))
  }
  // array.value = Array.from(uniques)
}

function merge() {
  console.log("Hello")
}

watch(() => sizeStore.size, (newSize) => {
  resetArray()
})

const randomIntFromInterval = (min, max) => Math.floor(Math.random()*(max - min + 1) + min); //From stackOverflow

const barWidth = computed(()=> {
  const availableWidth = 600
  return availableWidth/sizeStore.size
})



const sortedArray = computed(() => mergeSort([...array.value]))


function testAllAlgorithms() {
  for(let i = 0; i < 100; i++) {
    const array = [];
    const length = randomIntFromInterval(1, 1000);
    for(let i = 0; i < length; i++) {
      array.push(randomIntFromInterval(1000, 1000))
    }
    const javascriptSortedArray = array.slice().sort((a, b) => a-b);
    const mergeSortedArray = mergeSort(array.slice())
    console.log(areArrayEqual(javascriptSortedArray, mergeSortedArray))
  }
}

function areArrayEqual(arrayOne, arrayTwo) {
  if(arrayOne.length !== arrayTwo.length) return false;
  for(let i = 0; i <  arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) return false
  }
  return true
}



</script>

<template>
  <div class="border border-slate-300 p-6 rounded-md shadow min-h-full shrink-0 w-full flex flex-col space-y-4 items-center justify-center">
    <TransitionGroup name="visualizer" tag="div" class="relative flex items-end gap-[3px] ">
      <Bar v-for="(item, index) in array" :height="item" :width="barWidth" :key="item"  />
    </TransitionGroup>
    <div>
      <button class="py-1 px-4 bg-blue-500 hover:bg-blue-700 transition-all rounded-md" @click="resetArray">
        <Shuffle fill-color="#fff" :size="25" />
      </button>
      <button @click="testAllAlgorithms" class="bg-gray-300">Are equal ?</button>
    </div>
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
  //transform: translate(2px, 0);
}

@media screen {
  
}



</style>