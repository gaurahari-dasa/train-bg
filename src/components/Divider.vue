<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="bg-white px-2 text-gray-500" @click="clicked()">
        <PlusIcon v-show="!expanded" class="size-5 text-gray-500" aria-hidden="true" />
        <MinusIcon v-show="expanded" class="size-5 text-gray-500" aria-hidden="true" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlusIcon, MinusIcon } from '@heroicons/vue/20/solid'

const emit = defineEmits(['click']);
const expanded = ref(false);

function clicked() {
  emit('click');
  expanded.value = !expanded.value;
}
</script>