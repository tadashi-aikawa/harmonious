<script setup lang="ts">
import AppSidebar from "~/components/AppSidebar.vue";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <main>
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
