<template>
  <div>
    <nav>
      <router-link to="/adminview">Home</router-link> |
      <router-link to="/manageusers">Manage Users</router-link> |
      <router-link to="/manageproduct">Manage Product</router-link> |
      <router-link to="/userprofile">UserProfile</router-link> |
      <a @click="logout">Logout</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
};
</script>

<style lang="scss" scoped></style>