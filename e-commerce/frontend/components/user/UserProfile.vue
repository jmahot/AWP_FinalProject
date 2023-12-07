<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link> |
    <a @click="logout">Logout</a>
  </nav>
  <div>
    <h2>User Profile</h2>
    <div>
      <p><strong>Username:</strong> {{user.username}}</p>
      <p><strong>Email:</strong> {{user.email}}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "UserProfile",
  created() {},
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push("/");
    };

    return { logout };
  },
  data() {
    return {
      user: {
        username: 'exampleUser',
        email: 'user@example.com',
      },
    }
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>