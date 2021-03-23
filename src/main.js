import App from "./App.vue"
import router from "./router.js"
import { createApp } from "vue"
import './index.css'

createApp(App).use(router).mount("#app")