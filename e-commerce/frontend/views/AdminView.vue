<template>
  <nav>
    <router-link to="/adminview">Home</router-link> |
    <router-link to="/manageusers">Manage Users</router-link> |
    <router-link to="/manageproduct">Manage Product</router-link> |
    <span>NickName</span> |
    <a @click="logout">Logout</a>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "AdminView",
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