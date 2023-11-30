<template>
  <div class="manage-product">
    <h2>Manage Products</h2>
    <!-- Add product management functionality for admin -->
    <!-- Display product list, edit, delete, and add products -->
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - <button @click="editProduct(product.id)">Edit</button> <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
    <!-- Add form for adding new product -->
    <form @submit.prevent="addProduct">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" v-model="newProduct.name" required>

      <!-- Add more fields for product details -->

      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], // Fetch products from backend
      newProduct: {
        name: '',
        // Add more fields for product details
      },
    };
  },
  methods: {
    editProduct(productId) {
d      console.log('Edit product:', productId);
    },
    deleteProduct(productId) {
      // Implement delete product functionality
      console.log('Delete product:', productId);
    },
    addProduct() {
      // Implement add product functionality
      console.log('Add product:', this.newProduct);
    },
  },
};
</script>

<style scoped>
.manage-product {
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

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #333;
  color: white;
  cursor: pointer;
}
</style>
