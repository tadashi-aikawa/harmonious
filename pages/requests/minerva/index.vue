<script setup lang="ts">
import PageHeader from "~/components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader :pages="[{ title: '申請する' }, { title: 'Minerva' }]" />
    <iframe
      src="https://minerva.mamansoft.net/Home"
      class="w-full"
      style="height: calc(100vh - 64px); border: none"
      frameborder="0"
      scrolling="no"
    />
  </div>
</template>
