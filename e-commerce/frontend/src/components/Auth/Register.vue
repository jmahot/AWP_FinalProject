<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <label for="nickname">Nickname:</label>
      <input type="text" id="nickname" v-model="nickname" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      email: '',
      password: '',
    };
  },
  methods: {
    registerUser() {
      console.log('Register user:', this.nickname);
    },
  },
};
</script>

<style scoped>
.register {
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
