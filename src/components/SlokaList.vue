<script setup>
import { ref } from 'vue';

import Divider from './Divider.vue';
import { vibhagas } from './slokas';
import SlokaToggle from './SlokaToggle.vue';

const train = ref([]);

function enumerateSlokas(vibhaga, ix) {
    let sloka = vibhaga.firstSloka;
    do {
        sloka = { ...sloka }
        sloka.branchLevel = vibhaga.branchLevel;
        train.value.splice(++ix, 0, sloka)
    } while (sloka = sloka.next);
    vibhaga.expanded = true;
}

for (let vibhaga of vibhagas) {
    vibhaga = { ...vibhaga };
    vibhaga.branchLevel = 0;
    train.value.push(vibhaga);
    enumerateSlokas(vibhaga, 0, -1);
}

function expand(ix) {
    const item = train.value[ix];
    if (!item.branch) {
        console.warn('Branch missing, Haribol!');
        return;
    }
    const vibhaga = { ...item.branch };
    train.value.splice(++ix, 0, vibhaga);
    vibhaga.branchLevel = item.branchLevel + 1
    enumerateSlokas(vibhaga, ix);
    item.expanded = true;
}

function collapse(ix, branchLevel) {
    const item = train.value[ix];
    while (train.value[ix + 1].branchLevel > branchLevel) {
        train.value.splice(ix + 1, 1);
    }
    item.expanded = false;
}

function toggleSloka(ix, ev) {
    const vibhaga = train.value[ix];
    if (ev === 'expand') {
        enumerateSlokas(vibhaga, ix);
    } else if (ev === 'collapse') {
        collapse(ix, vibhaga.branchLevel - 1);
    }
}
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(item, ix) in train" :key="`${item.chapter}_${item.sloka}`" class="sm:px-4 sm:py-4">
            <div v-if="Object.hasOwn(item, 'description')" class="relative">
                <p>{{ item.description }}</p>
                <SlokaToggle v-show="item.branchLevel > 0" :expanded="item.expanded" class="absolute bottom-0 right-0" @click="toggleSloka(ix, $event)" />
            </div>
            <div v-else>
                <h3 class="text-lg text-center">{{ item.devanagari }}</h3>
                <p class="text-amber-600 mt-2 text-center">{{ item.translation }}</p>
                <Divider class="mt-2.5" :expanded="item.expanded" v-show="item.branch"
                    @click="item.expanded ? collapse(ix, item.branchLevel) : expand(ix)" />
            </div>
        </li>
    </ul>
</template>
