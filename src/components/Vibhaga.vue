<script setup>
import Segment from './Segment.vue';
import Divider from './Divider.vue';
import { ref, watch } from 'vue';
import SlokaToggle from './SlokaToggle.vue';

const props = defineProps(['train', 'caption', 'description', 'hidden', 'mode']);
const expanded = ref();
const childHidden = ref();
watch(() => props.mode, function(mode) {
    expanded.value = mode === 'drilled-down';
    childHidden.value = mode === 'drilled-down';
}, {
    immediate: true,
});
/*
* Haribol
* A Vibhaga consists of a caption, description, a train of slokas,
* whether the slokas should be shown (expanded), whether the Vibhaga should itself be shown (hidden).
* A train of slokas consists of an array of bogeys. A bogey consists of a list of slokas (leading), a
* (possibly null) vibhaga (branch) and a (possibly empty) trailing list of slokas.
*/
</script>

<template>
    <div v-show="!hidden">
        <div class="relative m-4 w-3/4">
            <h3 class="text-lg text-center font-semibold">{{ caption }}</h3>
            <p>{{ description }}</p>
            <SlokaToggle :expanded class="absolute bottom-0 right-0" @click="expanded = !expanded" />
        </div>

        <div v-for="bogey in train">
            <Segment v-show="expanded" :slokas="bogey.leading" />
            <div v-if="bogey.branch">
                <Divider class="mt-2.5" :hidden="childHidden" @click="childHidden = !childHidden" />
                <Vibhaga class="ml-20" :train="bogey.branch.train" :caption="bogey.branch.caption" :description="bogey.branch.description" :hidden="childHidden" :mode />
            </div>
            <Segment v-show="expanded" :slokas="bogey.trailing" />
        </div>
    </div>
</template>