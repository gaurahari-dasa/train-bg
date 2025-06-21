<script setup>
import { ref } from 'vue';
import { MinusCircleIcon, Bars3Icon } from '@heroicons/vue/20/solid';

const emit = defineEmits(['click']);
const props = defineProps(['expanded']);
const expanded = ref(props.expanded);

function toggle() {
    emit('click', expanded.value ? 'collapse' : 'expand');
    expanded.value = !expanded.value;
}
</script>

<template>
    <span @click="toggle()">
        <MinusCircleIcon v-if="expanded" class="size-5" />
        <Bars3Icon v-else class="size-5" />
    </span>
</template>