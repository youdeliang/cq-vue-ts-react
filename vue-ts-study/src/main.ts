import { createApp } from "vue";
import App from "./01_选项式API与TS.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
