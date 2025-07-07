<script setup>
// import SlokaList from './components/SlokaList.vue';
import Vibhaga from './components/Vibhaga.vue';
import { description, train } from './components/slokas';
import RadioGroup from './components/RadioGroup.vue';
import { ref } from 'vue';

const mode = ref('hierarchical');
</script>

<template>
  <main class="container mx-auto max-w-3/4">
    <h3 class="text-sm font-semibold sticky text-center top-0 left-0">Sri Guru Gauranga Jayate - Dedicated to His Divine
      Grace A. C. Bhaktivedanta Swami Prabhupada</h3>
    <div>
      <RadioGroup legend="View Modes"
        description="View Vibhaga hierarchies or drill down starting from the topmost Vibhaga" name="view-method"
        @changed="mode = $event" :views="[
          {
            caption: 'Divisional',
            id: 'divisional',
          },
          {
            caption: 'Drilled Down',
            id: 'drilled-down',
          },
        ]" />
    </div>
    <!-- <SlokaList /> -->
    <Vibhaga :train :description :hidden="false" :mode />
  </main>
</template>
