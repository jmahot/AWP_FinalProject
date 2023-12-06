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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: "LoginView",
  setup() {
    const loginUsername = ref("");
    const loginPassword = ref("");
    const router = useRouter();

    const loginUser = () => {
      axios
        .post("http://localhost:5000/api/login", {
          username: loginUsername.value,
          password: loginPassword.value,
        })
        .then((response) => {
          if (loginUsername.value == "	AdminJulie" || loginUsername.value == "AdminDany" || loginUsername.value == "AdminOlivier"){
            console.log(response.data.message);
            router.push("/adminview");
          }
          else {
            console.log(response.data.message);
            router.push("/");}
          
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    };

    return { loginUsername, loginPassword, loginUser };
  },
};
</script>

<style lang="scss" scoped></style>
