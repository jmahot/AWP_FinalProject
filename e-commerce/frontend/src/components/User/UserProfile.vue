<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <!-- Display user profile information and order history -->
    <div class="profile-info">
      <p>Nickname: {{ nickname }}</p>
      <p>Email: {{ email }}</p>
      <router-link to="/edit-profile">Edit Profile</router-link>
    </div>
    <div class="order-history">
      <h3>Order History</h3>
      <ul>
        <li v-for="order in orderHistory" :key="order.orderId">
          {{ order.date }} - Total: {{ order.total | formatPrice }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: 'JohnDoe', // Replace with actual user data
      email: 'john.doe@example.com', // Replace with actual user data
      orderHistory: [], // Fetch order history from backend
    };
  },
  filters: {
    formatPrice(price) {
      // Implement price formatting as needed
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
/* Add styles specific to the UserProfile component */
.user-profile {
  max-width: 600px;
  margin: 2rem auto;
}

.profile-info {
  margin-bottom: 1rem;
}

.order-history {
  margin-top: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

/* Add more styles as needed */
</style>
