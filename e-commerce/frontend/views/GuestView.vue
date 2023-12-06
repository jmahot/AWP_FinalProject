<!-- GuestView.vue -->

<template>
  <div>
    <div>
      <router-link to="/loginview">Login</router-link>
      <router-link to="/registerview">Register</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestView",
};
</script>

<style lang="scss" scoped></style>
