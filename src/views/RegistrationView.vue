<template>
  <div class="body1">
    <form @submit.prevent="handleRegistration" class="conteneur register card d-flex flex-row mx-auto">
      <div class="p-4 d-flex flex-column mx-auto">
        <div class="text-center">
          <h2>Registration</h2>
        </div>

        <div class="mb-2 mt-2">
          <label for="username" class="form-label">Username</label>
          <input type="text" v-model="username" class="form-control" id="username" name="username" required placeholder="Enter your username">
          <div v-if="errors.username" class="text-danger">{{ errors.username[0] }}</div>
        </div>

        <div class="mb-2">
          <label for="InputEmail" class="form-label">Email address</label>
          <input type="email" v-model="email" required class="form-control" id="InputEmail" aria-describedby="emailHelp" name="email" placeholder="Enter your e-mail">
          <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
        </div>

        <div class="mb-2">
          <label for="InputPassword" class="form-label">Password</label>
          <input type="password" v-model="password" required class="form-control" id="InputPassword" name="password" placeholder="Enter your password">
          <div v-if="errors.password" class="text-danger">{{ errors.password[0] }}</div>
        </div>

        <div class="mb-2">
          <label for="password_confirmation" class="form-label">Confirm Password</label>
          <input type="password" v-model="password_confirmation" class="form-control" id="password_confirmation" name="password_confirmation" required placeholder="Enter password to confirm">
          <div v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation[0] }}</div>
        </div>

        <div class="mb-2">
          <label for="direction" class="form-label">Direction</label>
          <select v-model="direction" class="form-select" name="direction" required>
            <option value="" disabled selected>Select direction</option>
            <option value="Etudiant">Etudiant</option>
            <option value="Professeur">Professeur</option>
          </select>
          <div v-if="errors.direction" class="text-danger">{{ errors.direction[0] }}</div>
        </div>

        <button type="submit" class="btn my-3 text-white" style="background-color: #0F366F; width: 330px;">Sign up</button>

        <div class="d-flex justify-content-center">
          <label>You have an account?</label>
          <router-link to="/login"><label class="ms-3 fw-bold" style="color: #0F366F;">Sign in</label></router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import AuthService from '../services/AuthService'; // Import the AuthService

export default {
  name: 'RegistrationView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      direction: '',
      errors: {} // Pour gérer les erreurs de validation
    };
  },

  methods: {
    async handleRegistration() {
      // Vérification que les mots de passe correspondent
      if (this.password !== this.password_confirmation) {
        alert("Passwords do not match!");
        return;
      }
      
      document.querySelector('meta[name="csrf-token"]').getAttribute('register');

      try {
        const response = await AuthService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation, // Ajout explicite
          direction: this.direction
        });
        console.log(response.data);
        this.$router.push('/home/dashboard'); // Redirection vers le tableau de bord après l'inscription réussie
      } catch (error) {
        this.errors = error.response.data.errors || {}; // Gestion des erreurs de validation
      }
    }
  }
}
</script>

<style scoped>
/* Styles personnalisés */
</style>
