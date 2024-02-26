import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./style.css";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

let app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);
app.mount("#app");
