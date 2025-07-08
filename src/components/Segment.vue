<script setup>
defineProps(['slokas']);
function splitText(sloka) {
    const ix = sloka.indexOf('।');
    if (ix !== -1) {
        sloka = `<span>${sloka.slice(0, ix + 1)}</span><br><span>${sloka.slice(ix + 1)}</span>`;
    }
    return sloka;
}
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(item, ix) in slokas" :key="`${item.chapter}_${item.sloka}`">
            <div class="sm:px-4 sm:py-4 m-4 w-3/4">
                <h3 v-if="item.speaker" class="mb-2 text-center font-semibold">{{ item.speaker }}</h3>
                <h3 class="text-lg text-center" v-html="splitText(item.devanagari)"></h3>
                <p class="text-amber-600 mt-2 text-center">{{ item.translation }}</p>
            </div>
        </li>
    </ul>
</template>