<script setup>
import { ref } from 'vue';
import { MinusCircleIcon, Bars3Icon } from '@heroicons/vue/20/solid';

defineProps(['expanded']);
</script>

<template>
    <span>
        <MinusCircleIcon v-if="expanded" class="size-5" />
        <Bars3Icon v-else class="size-5" />
    </span>
</template>