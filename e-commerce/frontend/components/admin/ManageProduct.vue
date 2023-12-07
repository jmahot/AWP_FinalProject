<template>
  <div>
    <router-link to="/addproduct">Add Product</router-link>
    <h1>Manage Products</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Illustrator</th>
          <th>Publication Date</th>
          <th>Price</th>
          <th>ISBN</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td><img :src="product.image" alt="Product Image" style="width: 100px; height: auto;"></td>
          <td>{{ product.illustrator }}</td>
          <td>{{ product.publicationDate }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.codeEAN }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button @click="deleteProduct(product.codeEAN)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: "ManageProduct",
  setup() {
    const products = ref([]);

    const fetchProducts = () => {
      axios.get('http://localhost:5001/api/products')
        .then(response => {
          products.value = response.data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    };

    const deleteProduct = (isbn) => {
      axios.delete(`http://localhost:5001/api/products/isbn/${isbn}`)
        .then(() => {
          fetchProducts();
        })
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    };

    onMounted(fetchProducts);

    return { products, deleteProduct };
  },
};
</script>


//test


//test

<style>
/* Styles de base du tableau */
table {
  width: 100%;
  margin: auto;
  border-collapse: collapse;
  background-color: #f4f4f4;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #8a2be2;
  color: white;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: darkred;
}
</style>