<template>
  <div>
    <p>
  <label for="username">Username</label>
  <input id="username" v-model="username" type="text" name="username" autocomplete="username" />
</p>
<p>
  <label for="password">Password</label>
  <input id="password" v-model="password" type="text" name="password" autocomplete="current-password" />
</p>
<button @click="createUser">Create New User</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "GuestView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    createUser() {
      // Envoyer les données au backend
      axios.post("http://localhost:5000/api/users", {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        console.log("User created successfully:", response.data);
        // Réinitialiser les champs après l'enregistrement
        this.username = "";
        this.password = "";
      })
      .catch(error => {
        console.error("Error creating user:", error);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
