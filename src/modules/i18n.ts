import { createI18n } from "vue-i18n";
import { UserModule } from "./types";
//vite自动加载locales文件夹中的资源文件到messages
import messages from "@intlify/vite-plugin-vue-i18n/messages";

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    locale: "en",
    messages,
  });
  app.use(i18n);
};
