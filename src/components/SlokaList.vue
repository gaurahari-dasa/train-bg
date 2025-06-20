<script setup>
import { ref } from 'vue';

import SlokaNode from './SlokaNode';
import Vibhaga from './VibhagaNode';
import { vibhagas } from './slokas';

const train = ref([]);

function enumerateSlokas(vibhaga, ix) {
    let sloka = vibhaga.firstSloka;
    do {
        if (ix === undefined) {
            train.value.push(sloka);
        } else {
            train.value.splice(++ix, 0, sloka)
        }
    } while (sloka = sloka.next);
}

for (const vibhaga of vibhagas) {
    train.value.push(vibhaga);
    enumerateSlokas(vibhaga);
}

function expand(node, ix) {
    if (!node.branch) {
        console.warn('Branch missing, Haribol!');
    }
    train.value.splice(++ix, 0, node.branch);
    enumerateSlokas(node.branch, ix);
    node.expanded = true;
}

function collapse(node, ix) {
    delete node.expanded;
}
</script>

<template>
    <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(item, ix) in train" :key="`${item.chapter}_${item.sloka}`" class="sm:px-4 sm:py-4">
            <div v-if="item instanceof Vibhaga">
                <p>{{ item.description }}</p>
            </div>
            <div v-else>
                <h3 class="text-lg text-center">{{ item.devanagari }}</h3>
                <p class="text-amber-600 mt-2 text-center">{{ item.translation }}</p>
                <button class="mt-2.5" v-show="item.branch"
                    @click="item.expanded ? collapse(item, ix) : expand(item, ix)">{{ item.expanded ? 'Collapse' :
                        'Expand'
                    }}</button>
            </div>
        </li>
    </ul>
</template>
