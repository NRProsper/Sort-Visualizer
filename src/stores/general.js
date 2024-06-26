import { ref } from "vue";
import { defineStore } from "pinia";

export const useSizeStore = defineStore('size', () => {
    const size = ref(10);

    function changeSize(newSize) {
        size.value = newSize
    }

    return {size, changeSize}
}, {
    persist: true

})