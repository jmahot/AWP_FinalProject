<template>
  <div class="admin-view">
    <h2>Welcome, Admin!</h2>
    <!-- Add admin-specific content and functionality -->
    <router-link to="/manage-product">Manage Products</router-link>
    <router-link to="/manage-users">Manage Users</router-link>
  </div>
</template>

<style scoped>
/* Add styles specific to the AdminView component */
.admin-view {
  max-width: 600px;
  margin: 2rem auto;
}

/* Add more styles as needed */
</style>
