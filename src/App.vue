<script setup>
// import SlokaList from './components/SlokaList.vue';
import Vibhaga from './components/Vibhaga.vue';
import { description, train } from './components/slokas';
</script>

<template>
  <main class="container mx-auto max-w-3/4">
    <h3 class="text-sm font-semibold sticky text-center top-0 left-0">Sri Guru Gauranga Jayate - Dedicated to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada</h3>
    <!-- <SlokaList /> -->
     <Vibhaga :train :description :hidden="false" mode="hierarchical" />
  </main>
</template>
