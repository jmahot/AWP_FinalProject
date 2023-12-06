<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link>
  </nav>
  <div>Welcome to User View</div>
</template>

<script>
export default {
  name: "UserView",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>