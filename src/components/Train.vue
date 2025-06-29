<script setup>
import Vibhaga from './Vibhaga.vue';
import Segment from './Segment.vue';

defineProps(['train']);
</script>

<template>
    <template v-for="bogey in train">
        <Segment :slokas="bogey.prefix" />
        <Vibhaga :branch="bogey.branch" />
        <Segment :slokas="bogey.suffix" />
    </template>
</template>