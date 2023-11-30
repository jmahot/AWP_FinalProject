<template>
  <div class="my-card">
    <h2>My Shopping Card</h2>
    <!-- Display user's shopping cart contents and order summary -->
    <ul>
      <li v-for="item in shoppingCart" :key="item.productId">
        {{ item.productName }} - Quantity: {{ item.quantity }} - Subtotal: {{ item.subtotal | formatPrice }}
      </li>
    </ul>
    <div class="order-summary">
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: {{ totalPrice | formatPrice }}</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: [], // Fetch shopping cart contents from backend
    };
  },
  computed: {
    totalItems() {
      return this.shoppingCart.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.shoppingCart.reduce((total, item) => total + item.subtotal, 0);
    },
  },
  methods: {
    checkout() {
      // Implement checkout functionality
      console.log('Checkout:', this.shoppingCart);
    },
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
/* Add styles specific to the MyCard component */
.my-card {
  max-width: 600px;
  margin: 2rem auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.order-summary {
  margin-top: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  cursor: pointer;
}

/* Add more styles as needed */
</style>
