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
</script>

<template>
  <main class="px-10">
    <div class="space-y-5">
      <template v-for="(obj, ix) in train">
        <div v-if="obj instanceof Vibhaga">
          <p>{{ obj.description }}</p>
        </div>
        <div v-else>
          <h3 class="text-lg text-center">{{ obj.devanagari }}</h3>
          <p class="text-amber-600 mt-2">{{ obj.translation }}</p>
          <button class="mt-2.5" v-show="obj.branch" @click="expand(obj, ix)">{{ obj.expanded ? 'Collapse' : 'Expand'
            }}</button>
        </div>
      </template>
    </div>
  </main>
</template>
