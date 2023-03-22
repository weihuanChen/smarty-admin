import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core", "@vueuse/head"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true, //支持Vue 模版自动引入
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/],
      dts: "src/components.d.ts",
      dirs: ["src/components", "src/pages/**/components"],
    }),
    Layouts(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "locales/**")],
    }),
  ],
});
