
// import { add } from "~/add";
// const s: string = "hello ts";
// console.log(s + add(3,3));
// document.querySelector("#app")!.innerHTML = "hello";

// import { createApp, h } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "nprogress/nprogress.css";
//import routes from "~pages";
// import { createPinia } from "pinia";
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)
//运行时阶段vue不具备模板语法，所以纯vue只能用render函数写
// const App = {
//   render() {
//     return h("div", null, [String("hello vue")]);
//   },
// };
const router = createRouter({
  history: createWebHistory(),
  routes,
});
import "uno.css";
// const pinia = createPinia();
const app = createApp(App);
Object.values(
  import.meta.glob("./modules/*.ts", { eager: true })
).forEach((i: any) => {
  i.install?.({ app,router,isClient:true });
});
app.use(router)
app.mount("#app");
