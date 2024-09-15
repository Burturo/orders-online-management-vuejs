<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import LoginView from './views/LoginView.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoginView
  }
}
</script>

<style>

</style>
