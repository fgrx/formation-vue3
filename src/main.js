import { createApp } from "vue";
import App from "./App.vue";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import router from "./router";
import store from './store'

const app = createApp(App).use(store);

app.use(VuesticPlugin, {
  colors: {
    // Default colors
    primary: "#28d025",
    secondary: "#002c85",
    success: "#40e583",
    info: "#2c82e0",
    danger: "#e34b4a",
    warning: "#ffc200",
    gray: "#babfc2",
    dark: "#34495e",

    // Custom colors
    navTextColor: "#73ef71",
  },
});

app
  .use(router)
  .use(VuesticPlugin)
  .mount("#app");
