<template>
  <div class="py-3 space-y-2 font-mono text-sm">
    <span class="inline-flex items-center px-2 font-bold lowercase">
      <mdi:chevron-right />
      <span>cd ./{{ title }}</span>
    </span>
    <div class="text-neutral-400">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: String,
  subtitle: String,
});
</script>
  