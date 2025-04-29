<script setup lang="ts">
import { ListIcon, Settings2, WorkflowIcon } from "lucide-vue-next";
import MinervaLogo from "./logo/MinervaLogo.vue";
import NeovimLogo from "./logo/NeovimLogo.vue";
import ObsidianLogo from "./logo/ObsidianLogo.vue";
import NavAdmin from "./NavAdmin.vue";
import NavMain from "./NavMain.vue";
import NavUser from "./NavUser.vue";
import TeamSwitcher from "./TeamSwitcher.vue";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  type SidebarProps,
} from "./ui/sidebar";
import Sidebar from "./ui/sidebar/Sidebar.vue";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

// This is sample data.
const data = {
  user: {
    name: "tadashi-aikawa",
    email: "tadashi-aikawa@example.com",
    avatar:
      "https://publish-01.obsidian.md/access/35d05cd1bf5cc500e11cc8ba57daaf88/favicon-64.png",
  },
  teams: [
    {
      name: "Minerva",
      logo: MinervaLogo,
      plan: "Enterprise",
    },
    {
      name: "Obsidian",
      logo: ObsidianLogo,
      plan: "Startup",
    },
    {
      name: "Neovim",
      logo: NeovimLogo,
      plan: "Free",
    },
  ],
  main: [
    {
      title: "申請する",
      url: "#",
      icon: WorkflowIcon,
      isActive: true,
      items: [
        {
          title: "OSS開発",
          url: "/requests/oss",
        },
        {
          title: "Bluesky",
          url: "/requests/bluesky",
        },
        {
          title: "Minerva",
          url: "/requests/minerva",
        },
      ],
    },
    {
      title: "申請一覧",
      url: "#",
      icon: ListIcon,
      isActive: true,
      items: [
        {
          title: "承認者として確認する",
          url: "/coming-soon",
        },
        {
          title: "申請者として確認する",
          url: "/coming-soon",
        },
      ],
    },
  ],
  admin: [
    {
      title: "申請フロー管理",
      url: "#",
      icon: WorkflowIcon,
      items: [
        {
          title: "作成する",
          url: "/coming-soon",
        },
        {
          title: "一覧を見る",
          url: "/coming-soon",
        },
      ],
    },
    {
      title: "設定",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "TODO",
          url: "/coming-soon",
        },
      ],
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.main" />
      <NavAdmin :items="data.admin" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
