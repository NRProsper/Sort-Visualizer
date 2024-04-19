<script setup>
const props = defineProps({
  height: {
    type: Number,
    required: true
  },
  width: {
    type:Number,
    required:true
  },
  checked: {
    type: Boolean
  }
})

</script>

<template>
  <div id="bar"
       class="rounded text-white text-[12px] w-[2px]  flex justify-center items-end"
       :style="{
        height:`${height}px`,
        width: `${width}px`
          }"
       :class="{'bg-orange-500':checked, 'bg-blue-500':!checked}"
  />
</template>

<style scoped>

#bar {
  box-shadow: 0 5px 13px 1px rgba(0, 0, 0, .2);;
}

</style>