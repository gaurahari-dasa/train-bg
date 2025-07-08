<script setup>
// import SlokaList from './components/SlokaList.vue';
import Vibhaga from './components/Vibhaga.vue';
import { description, train } from './components/slokas';
import RadioGroup from './components/RadioGroup.vue';
import { ref } from 'vue';

const viewMode = ref('hierarchical');
</script>

<template>
  <main class="container mx-auto max-w-3/4">
    <h3 class="text-sm font-semibold sticky text-center top-0 left-0">Sri Guru Gauranga Jayate - Dedicated to His Divine
      Grace A. C. Bhaktivedanta Swami Prabhupada</h3>
    <div>
      <RadioGroup legend="View Modes"
        description="View Vibhaga hierarchies or drill down starting from the topmost Vibhaga" name="view-method"
        @changed="viewMode = $event" :options="[
          {
            caption: 'Divisional',
            id: 'divisional',
          },
          {
            caption: 'Drilled Down',
            id: 'drilled-down',
          },
          {
            caption: 'Singular',
            id: 'singular',
          },
        ]" />
    </div>
    <!-- <SlokaList /> -->
    <Vibhaga v-if="viewMode != 'singular'" :train :description :hidden="false" :mode="viewMode" />
  </main>
</template>
