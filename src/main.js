import { createApp } from "vue";

import App from "./components/App.vue";
import router from "./routers.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
