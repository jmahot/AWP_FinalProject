<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link>
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
export default {
  name: "UserProfile",
  created() {},
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