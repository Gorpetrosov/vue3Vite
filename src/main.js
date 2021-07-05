import { createApp } from 'vue';
import App from './App.vue';
import store from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./utils/validations/validationFields.js"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faEnvelope, faLock, faGrin, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faEnvelope, faLock, faGrin, faCalendarAlt)

import Router from "./routes";
const app = createApp(App)
app.use(Router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
export default app;
