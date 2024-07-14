import { createApp } from "vue";
import { router } from "vue-router";

/*Переключатель приложений*/
//import App from "./App.vue";
import App from "./components/Apps/App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
