import { createApp } from "vue";
import router from "./routers.js";

const app = createApp({ template: "<router-view />" });
app.use(router).mount("#app");
