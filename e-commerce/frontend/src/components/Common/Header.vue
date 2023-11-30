<template>
  <header class="header">
    <div class="logo">My E-Commerce</div>
    <!-- Add navigation links based on user role -->
    <nav v-if="isLoggedIn">
      <router-link to="/product-list">Product List</router-link>
      <router-link to="/my-card">My Card</router-link>
      <router-link to="/user-profile">{{ userName }}</router-link>
      <router-link to="/logout">Logout</router-link>
    </nav>
    <nav v-else>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Replace with actual authentication status
      userName: 'John Doe', // Replace with actual username
    };
  },
};
</script>

<style scoped>
/* Add styles specific to the Header component */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

/* Add more styles as needed */
</style>
