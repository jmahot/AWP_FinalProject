<!-- GuestView.vue -->

<template>
  <div>
    <nav>
        <router-link to="/guestview">Home</router-link> |
        <router-link to="/loginview">Login</router-link> |
        <router-link to="/registerview">Register</router-link>
    </nav>

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
