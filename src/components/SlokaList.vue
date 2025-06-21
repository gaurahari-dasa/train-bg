<script setup>
import { ref } from 'vue';

import Divider from './Divider.vue';
import Vibhaga from './VibhagaNode';
import { vibhagas } from './slokas';
import SlokaToggle from './SlokaToggle.vue';

const train = ref([]);

function enumerateSlokas(vibhaga, ix, branchLevel) {
    let sloka = vibhaga.firstSloka;
    do {
        sloka.branchLevel = branchLevel + 1;
        train.value.splice(++ix, 0, sloka)
    } while (sloka = sloka.next);
}

for (const vibhaga of vibhagas) {
    vibhaga.branchLevel = 0;
    train.value.push(vibhaga);
    enumerateSlokas(vibhaga, 0, -1);
}

function expand(node, ix) {
    if (!node.branch) {
        console.warn('Branch missing, Haribol!');
    }
    train.value.splice(++ix, 0, node.branch);
    node.branch.branchLevel = node.branchLevel + 1
    enumerateSlokas(node.branch, ix, node.branchLevel);
    node.expanded = true;
}

function collapse(ix) {
    const item = train.value[ix];
    while (train.value[ix + 1].branchLevel > item.branchLevel) {
        const node = train.value.splice(ix + 1, 1)[0];
        delete node.branchLevel;
        delete node.expanded;
    }
    delete item.expanded;
}
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(item, ix) in train" :key="`${item.chapter}_${item.sloka}`" class="sm:px-4 sm:py-4">
            <div v-if="item instanceof Vibhaga" class="relative">
                <p>{{ item.description }}</p>
                <SlokaToggle class="absolute bottom-0 right-0" />
            </div>
            <div v-else>
                <h3 class="text-lg text-center">{{ item.devanagari }}</h3>
                <p class="text-amber-600 mt-2 text-center">{{ item.translation }}</p>
                <Divider class="mt-2.5" :expanded="item.expanded" v-show="item.branch"
                    @click="item.expanded ? collapse(ix) : expand(item, ix)" />
            </div>
        </li>
    </ul>
</template>
