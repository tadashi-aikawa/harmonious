<script setup lang="ts">
import { UsersRoundIcon, WorkflowIcon } from "lucide-vue-next";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export type Flow = {
  id: string;
  title: string;
  description: string;
  kind: "OSS開発" | "Bluesky" | "Obsidian";
  stageNum: number;
  approverNum: number;
  createdUser: string;
  lastUpdated: string;
  coverUrl: string;
};

defineProps<{
  flow: Flow;
  active: boolean;
}>();

const emit = defineEmits<{
  click: [flow: Flow];
}>();
</script>

<template>
  <button
    :class="
      cn(
        'hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all',
        active && 'bg-muted',
      )
    "
    @click="emit('click', flow)"
  >
    <div class="flex w-full flex-col gap-1">
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-2">
          <div class="font-semibold">
            {{ flow.title }}
          </div>
        </div>

        <div class="ml-auto">
          <Badge v-if="flow.kind === 'OSS開発'" variant="outline">
            OSS開発
          </Badge>
          <Badge v-else-if="flow.kind === 'Bluesky'" variant="outline">
            Bluesky
          </Badge>
          <Badge v-else-if="flow.kind === 'Obsidian'" variant="outline">
            Obsidian
          </Badge>
        </div>
      </div>
    </div>
    <div class="text-muted-foreground line-clamp-2 text-xs">
      {{ flow.description.substring(0, 300) }}
    </div>

    <div class="flex w-full items-center justify-between gap-2 text-xs">
      <div class="text- text-success-foreground flex items-center gap-1">
        <div class="flex items-center gap-1">
          <UsersRoundIcon class="size-4" />
          <span class="text-sm">{{ flow.approverNum }}</span>
        </div>
        <div class="flex items-center gap-1">
          <WorkflowIcon class="size-4" />
          <span class="text-sm">{{ flow.stageNum }}</span>
        </div>
      </div>
      <div :class="active ? 'text-foreground' : 'text-muted-foreground'">
        {{ flow.lastUpdated }}
      </div>
    </div>
  </button>
</template>
