<template>
  <a :href="link" target="_blank" class="inline-flex items-center space-x-1">
    <span>{{ msg }}</span>
    <i-heroicons-outline-external-link v-if="showIcon" class="w-3 h-3"
  /></a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  link: String,
  msg: String,
  showIcon: {
    type: Boolean,
    default: true,
  },
});
</script>
