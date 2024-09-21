<template>
  <v-app id="app">
    <router-view />
    <v-btn color="red" @click="showMessage">Click me</v-btn>
  </v-app>
</template>

<script>
import LoginView from './views/LoginView.vue'
 

export default {
  
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoginView,
  },
  methods: {
    showMessage() {
      alert('Vuetify is working!'); 
    },
  }
}
</script>

<style>

</style>
