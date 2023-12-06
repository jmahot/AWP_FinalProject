<template>
  <div>
    <p>
      <label for="loginUsername">Username</label>
      <input id="loginUsername" v-model="loginUsername" type="text" name="loginUsername" />
    </p>
    <p>
      <label for="loginPassword">Password</label>
      <input id="loginPassword" v-model="loginPassword" type="password" name="loginPassword" />
    </p>
    <button @click="loginUser">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginView",
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
    };
  },
  methods: {
    loginUser() {
      axios.post("http://localhost:5000/api/login", {
        username: this.loginUsername,
        password: this.loginPassword,
      })
      .then(response => {
        console.log(response.data.message); // Display the server response
        // Redirect to home view or perform other actions on successful login
        const router = useRouter();

        
        router.push('/home'); 
      })
      .catch(error => {
        console.error("Error during login:", error);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
