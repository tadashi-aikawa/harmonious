<script setup lang="ts">
import PageHeader from "~/components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader :pages="[{ title: '申請する' }, { title: 'OSS開発' }]" />
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <img
          src="https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/Notes/attachments/vim-adr.webp"
          class="rounded-xl"
        />
        <img
          src="https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/Notes/attachments/obs-adr.webp"
          class="rounded-xl"
        />
        <img
          src="https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/%F0%9F%92%BFADR/attachments/minerva-adr.webp"
          class="rounded-xl"
        />
      </div>
      <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  </div>
</template>
