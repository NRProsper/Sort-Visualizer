import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlayOrPause = defineStore('playOrPause', ()=> {
    const isPaused = ref(true)

    function togglePayer() {
        isPaused.value = !isPaused.value
    }

    return {isPaused, togglePayer}


})