<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      console.log('Login user:', this.email);
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  cursor: pointer;
}

/* Add more styles as needed */
</style>
