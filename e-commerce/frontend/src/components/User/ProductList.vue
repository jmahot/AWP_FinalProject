<template>
  <div class="product-list">
    <h2>Product List</h2>
    <!-- Display product list with filtering options -->
    <div class="filter-options">
      <label for="priceRange">Price Range:</label>
      <select id="priceRange" v-model="selectedPriceRange">
        <option value="0-25">$0 - $25</option>
        <option value="26-50">$26 - $50</option>
        <!-- Add more options as needed -->
      </select>
    </div>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - {{ product.price | formatPrice }} <!-- Add more product details -->
        <button @click="addToCart(product.id)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], // Fetch products from backend
      selectedPriceRange: '0-25',
    };
  },
  computed: {
    filteredProducts() {
      // Implement filtering logic based on selectedPriceRange
      return this.products.filter(product => {
        const [min, max] = this.selectedPriceRange.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });
    },
  },
  methods: {
    addToCart(productId) {
      // Implement add to cart functionality
      console.log('Add to cart:', productId);
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
/* Add styles specific to the ProductList component */
.product-list {
  max-width: 800px;
  margin: 2rem auto;
}

.filter-options {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

label {
  font-weight: bold;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  cursor: pointer;
}

/* Add more styles as needed */
</style>
