import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/route';

const app = createApp(App);

app.use(router);


app.mount('#app');