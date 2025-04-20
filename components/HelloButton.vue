<script setup lang="ts">
defineProps<{
  hogeName: string;
}>();
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <div>{{ hogeName }}</div>
  </div>
</template>
