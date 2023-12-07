<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link> |
    <span>NickName</span> |
    <a @click="logout">Logout</a>
  </nav>
  <div>
    <h2>Welcome to our E-Commerce Store!</h2>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "UserView",
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push("/");
    };

    return { logout };
  },
};
</script>

<style lang="scss" scoped></style>