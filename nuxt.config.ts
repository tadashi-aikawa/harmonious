import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/harmonious",
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-01",
  ssr: false,
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@pinia/nuxt",
  ],

  // インポート用(Auto-imports含む)の型定義に追加するためスキャンしない
  imports: { scan: false },

  // コンポーネントとして扱うディレクトリを指定しない
  components: { dirs: [] },

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
