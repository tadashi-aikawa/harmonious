<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div>
    <h1>Bye World</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>
