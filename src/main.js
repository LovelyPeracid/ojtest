import { createApp } from "vue";
import App from "./layouts/BasicLayout.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import "@arco-design/web-vue/dist/arco.css";
import store from "./store";
import "@/access";
createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
//# sourceMappingURL=main.js.map