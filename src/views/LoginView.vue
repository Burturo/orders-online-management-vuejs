<template>
  <div class="body1">
    <form class="conteneur card d-flex flex-row mx-auto">
      <div class="p-4 d-flex flex-column mx-auto">
          <div class="text-center">
              <h1>Login</h1>
              <label>Hi, enter your details to get login to your account</label>
          </div>
  
          <div class="mb-2 mt-4">
              <label for="email" class="form-label">Email address</label>
              <input v-model="email" type="email" required class="form-control" placeholder="Enter your e-mail">
          </div>
          <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" type="password" required class="form-control" placeholder="Enter your password">
          </div>
  
          <div class="d-flex flex-sm-row flex-column justify-content-between text-sm-center mt-3">
              <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="rememberMe">
                  <label class="form-check-label" for="rememberMe">Remember me</label>
              </div>
              <label class="fw-bold">Forgot password?</label>
          </div>
  
          <router-link to="/home/dashboard">
          <button type="submit" class="btn my-4 text-white" style="background-color: #0F366F;width: 320px;">Sign in</button>

          </router-link>
          <div class="d-flex justify-content-center">
              <label>Don't have an account?</label>
              <router-link to="/registration"><label class="ms-3 fw-bold" style="color: #0F366F;">Sign up</label></router-link>
          </div>
      </div>
    </form>
  </div>
    
  </template>
  
  <script>
 import AuthService from '../services/AuthService'; // Import the AuthService

 export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        });
        // Handle successful login here (e.g., redirect, store token)
        console.log(response.data);
        this.$router.push('/home/dashboard'); // Redirect to dashboard
      } catch (error) {
        // Handle login error here
        console.error('Login failed', error);
      }
    }
  }
}
</script>
  