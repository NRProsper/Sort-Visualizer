<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {shuffle as _shuffle, size} from "lodash/collection.js";
import Shuffle from 'vue-material-design-icons/Shuffle.vue';
import {useSizeStore} from "@/stores/general.js";
import {usePlayOrPause} from "@/stores/playOrPause.js";
import Bar from "@/components/Bar.vue";

const sizeStore = useSizeStore();
const pauseOrPlay = usePlayOrPause();


const getInitialItems = () => [80, 20, 100, 110, 90, 70, 60, 50, 30, 40];
const items = ref(getInitialItems())

function shuffle ()  {
  items.value = _shuffle(items.value)
}

let i;
let j;
let sortingTimeout;

function bubbleSort() {
  const arr = [...items.value];
  const len = arr.length;
  let swapped;

  i = 0;
  j = 0;

  const animateSort = () => {
    if (i < len - 1) {
      if (j < len - i - 1) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          items.value = [...arr]; // Update items after each swap
        }
        j++;
      } else {
        j = 0;
        i++;
      }
      sortingTimeout = setTimeout(animateSort, 100); // Adjust the delay as needed
    }
  };

  animateSort();
}

watch(()=>pauseOrPlay.isPaused, (newValue)=>{
  if(!newValue) {
    bubbleSort()
  }else {
    clearTimeout(sortingTimeout)
  }
})

</script>

<template>
  <div class="border border-slate-300 p-6 rounded-md shadow min-h-full shrink-0 w-full flex items-center justify-center">
<!--    <button @click="shuffle">-->
<!--      <Shuffle fill-color="#333" :size="25" />-->
<!--    </button>-->
    <TransitionGroup name="visualizer" tag="div" class="relative flex items-end gap-2">
      <Bar v-for="(item, index) in items" :height="item" :number="item" :key="item" :checked="index === j || index + 1 === j" />
    </TransitionGroup>
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