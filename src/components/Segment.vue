<script setup>
defineProps(['slokas'])
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(item, ix) in slokas" :key="`${item.chapter}_${item.sloka}`">
            <div class="sm:px-4 sm:py-4 m-4 w-3/4">
                <h3 class="text-lg text-center">{{ item.devanagari }}</h3>
                <p class="text-amber-600 mt-2 text-center">{{ item.translation }}</p>
            </div>
        </li>
    </ul>
</template>