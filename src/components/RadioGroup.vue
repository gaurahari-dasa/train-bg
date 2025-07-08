<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-gray-900">{{ legend }}</legend>
    <p class="mt-1 text-sm/6 text-gray-600">{{ description }}</p>
    <div class="mt-6 space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
      <div v-for="option in options" :key="option.id" class="flex items-center">
        <input :id="`${option.id}-${name}-radio`" :name type="radio" :checked="option.id === options[0].id" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" @change="$emit('changed', option.id)" />
        <label :for="`${option.id}-${name}-radio`" class="ml-3 block text-sm/6 font-medium text-gray-900">{{ option.caption }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
defineProps(['legend', 'description', 'options', 'name'])
defineEmits(['changed'])

</script>