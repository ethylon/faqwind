<template>
  <h2 :id="id" class="group ml-[-1.5rem] space-x-1">
    <a :href="'#' + id" class="transition duration-100 opacity-0 group-hover:opacity-100">#</a>
    <span>{{ msg }}</span>
  </h2>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  id: String,
  msg: String,
});
</script>
