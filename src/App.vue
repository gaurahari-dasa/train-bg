<script setup>
import { ref } from 'vue';
import SlokaNode from './SlokaNode';
import Vibhaga from './VibhagaNode';

var v1 = new SlokaNode();
v1.devanagari = `तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।
वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ ६१ ॥
`
import { vibhagas } from './slokas';
const train = ref([]);
for (const vibhaga of vibhagas) {
  train.value.push(vibhaga);
  let sloka = vibhaga.firstSloka;
  do {
    train.value.push(sloka);
  } while (sloka = sloka.next);
}
</script>

<template>
  <main class="px-10">
    <div class="flex flex-col gap-10">
      <template v-for="obj in train">
        <div v-if="obj instanceof Vibhaga">
          <p>{{ obj.description }}</p>
        </div>
        <div v-else>
          <h3 class="text-lg text-center">{{ obj.devanagari }}</h3>
          <p class="text-amber-600">{{ obj.translation }}</p>
        </div>
      </template>
    </div>
  </main>
</template>
