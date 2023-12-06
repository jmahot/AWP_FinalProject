<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link>
  </nav>
  <div>
    <h1>Welcome to ProductList</h1>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>