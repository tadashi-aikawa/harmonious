<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";

defineProps<{
  pages: {
    title: string;
  }[];
}>();
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <template v-for="(page, i) in pages" :key="page.title">
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbPage>{{ page.title }}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              v-if="i < pages.length - 1"
              class="hidden md:block"
            />
          </template>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
</template>
