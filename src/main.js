import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/route';
import vuetify from './plugins/vuetify';



const app = createApp(App);

app.use(router)
    .use(vuetify);


app.mount('#app');