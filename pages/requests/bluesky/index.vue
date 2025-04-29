<script setup lang="ts">
import PageHeader from "~/components/PageHeader.vue";

useHead({
  script: [
    {
      src: "https://embed.bsky.app/static/embed.js",
      async: true,
    },
  ],
});
</script>

<template>
  <div>
    <PageHeader :pages="[{ title: '申請する' }, { title: 'Bluesky' }]" />
    <div class="flex items-center justify-center gap-8">
      <blockquote
        class="bluesky-embed"
        data-bluesky-uri="at://did:plc:bi2l5vkitdtgw364ixidbint/app.bsky.feed.post/3lntgy3fvs223"
        data-bluesky-cid="bafyreihia2oue6d5zn6bo6y4i3dmpyr2v7wktna2eptrmx34zhaxjc6avi"
        data-bluesky-embed-color-mode="system"
      >
        <p lang="ja">
          先週のWeekly Reportです。 minerva.mamansoft.net/%F0%9F%93%B0...<br /><br /><a
            href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint/post/3lntgy3fvs223?ref_src=embed"
            >[image or embed]</a
          >
        </p>
        &mdash; tadashi-aikawa (<a
          href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint?ref_src=embed"
          >@tadashi-aikawa.bsky.social</a
        >)
        <a
          href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint/post/3lntgy3fvs223?ref_src=embed"
          >Apr 28, 2025 at 8:50</a
        >
      </blockquote>

      <blockquote
        class="bluesky-embed"
        data-bluesky-uri="at://did:plc:bi2l5vkitdtgw364ixidbint/app.bsky.feed.post/3lnog36vekk2y"
        data-bluesky-cid="bafyreifjph3bjn3yktatilwcwsmxcmnq34u7pcrz2j2wdragceskksku6i"
        data-bluesky-embed-color-mode="system"
      >
        <p lang="ja">
          border周りは特にハマりやすいので勉強になる。
          speakerdeck.com/mu_zaru/padd...<br /><br /><a
            href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint/post/3lnog36vekk2y?ref_src=embed"
            >[image or embed]</a
          >
        </p>
        &mdash; tadashi-aikawa (<a
          href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint?ref_src=embed"
          >@tadashi-aikawa.bsky.social</a
        >)
        <a
          href="https://bsky.app/profile/did:plc:bi2l5vkitdtgw364ixidbint/post/3lnog36vekk2y?ref_src=embed"
          >Apr 26, 2025 at 8:51</a
        >
      </blockquote>
    </div>
  </div>
</template>
