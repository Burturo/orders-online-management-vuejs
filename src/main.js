import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/route';
// import 'vuetify/styles'; // Styles Vuetify
// import { createVuetify } from './plugins/vuetify';

const app = createApp(App);
// const vuetify = createVuetify();

app.use(router);
// app.use(vuetify);


app.mount('#app');
