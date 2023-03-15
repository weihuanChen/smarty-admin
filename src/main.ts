// import { add } from "~/add";
// const s: string = "hello ts";
// console.log(s + add(3,3));
// document.querySelector("#app")!.innerHTML = "hello";

import { createApp, h } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
//运行时阶段vue不具备模板语法，所以纯vue只能用render函数写
// const App = {
//   render() {
//     return h("div", null, [String("hello vue")]);
//   },
// };
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("~/pages/index.vue"),
    },
    {
      path: "/login",
      component: () => import("~/pages/Login.vue"),
    },
  ],
});
import "uno.css";
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app");
