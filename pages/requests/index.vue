<script setup lang="ts">
import { Search } from "lucide-vue-next";
import PageHeader from "~/components/PageHeader.vue";
import type { Flow } from "~/components/RequestFlowCard.vue";
import RequestFlowCard from "~/components/RequestFlowCard.vue";
import ScrollArea from "~/components/ui/scroll-area/ScrollArea.vue";

const flows: Flow[] = [
  {
    id: "silhouette",
    title: "Silhouetteのプルリクエスト作成",
    description:
      "Silhouetteにcontributeするときの申請フローです。silhouette.nvimやsilhouette-coreも含みます。",
    kind: "OSS開発",
    stageNum: 1,
    approverNum: 1,
    coverUrl:
      "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/%F0%9F%92%BFADR/attachments/minerva-adr.webp",
    createdUser: "Minerva",
    lastUpdated: "2023-10-01 10:01:01",
  },
  {
    id: "bluesky",
    title: "BlueskyでNeovimの質問",
    description:
      "BlueskyでNeovimを質問するための申請フローです。ほとんどの場合は直接質問しても大丈夫です。",
    kind: "Bluesky",
    stageNum: 2,
    approverNum: 2,
    coverUrl:
      "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/Notes/attachments/vim-adr.webp",
    createdUser: "Neovimちゃん",
    lastUpdated: "2023-10-02 10:02:02",
  },
  {
    id: "obsidian-plugin",
    title: "Obsidianプラグインのpublish",
    description:
      "ObsidianのプラグインをCommunity Pluginとしてpublishするための申請フローです。",
    kind: "Obsidian",
    stageNum: 2,
    approverNum: 4,
    coverUrl:
      "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/Notes/attachments/obs-adr.webp",
    createdUser: "Obsidianさん",
    lastUpdated: "2023-10-03 10:03:03",
  },
];

const activeFlow = ref<Flow | null>(null);
const pages = computed(() => {
  const base = [{ title: "申請フロー管理" }, { title: "一覧を見る" }];
  return activeFlow.value ? [...base, { title: activeFlow.value.title }] : base;
});
</script>

<template>
  <div>
    <PageHeader :pages="pages" />

    <div class="flex h-[400px] gap-8">
      <div class="w-[400px]">
        <div
          class="bg-background/95 supports-[backdrop-filter]:bg-background/60 p-4 backdrop-blur"
        >
          <form>
            <div class="relative">
              <Search
                class="text-muted-foreground absolute top-2.5 left-2 size-4"
              />
              <Input placeholder="Search" class="pl-8" />
            </div>
          </form>
        </div>
        <ScrollArea class="flex h-[calc(100vh_-_150px)]">
          <div class="flex flex-1 flex-col gap-2 p-4 pt-0">
            <TransitionGroup name="list" appear>
              <RequestFlowCard
                v-for="flow in flows"
                :key="flow.id"
                :flow="flow"
                :active="activeFlow?.id === flow.id"
                @click="activeFlow = flow"
              />
            </TransitionGroup>
          </div>
        </ScrollArea>
      </div>

      <ScrollArea class="h-[calc(100vh_-_100px)] pt-4">
        <div v-if="activeFlow" class="flex flex-col gap-4">
          <h1 class="text-2xl font-extrabold">
            {{ activeFlow?.title }}
          </h1>
          <img
            :src="activeFlow.coverUrl"
            class="h-[calc(100vh_-_300px)] rounded-xl"
          />
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
