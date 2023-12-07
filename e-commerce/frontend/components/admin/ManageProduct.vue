<template>
  <div class="manage-products">
    <nav>
      <router-link to="/adminview">Home</router-link> |
      <router-link to="/manageusers">Manage Users</router-link> |
      <router-link to="/manageproduct">Manage Product</router-link> |
      <router-link to="/userprofile">UserProfile</router-link> |
      <a @click="logout">Logout</a>
    </nav>
    <router-link to="/addproduct" class="add-product-button">Add Product</router-link>
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
          <th>Note</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.ISBN">
          <td>{{ product.title }}</td>
          <td><img :src="product.image" alt="Product image" style="width: 100px; height: auto;"></td>
          <td>{{ product.illustrator }}</td>
          <td>{{ product.publicationDate }}</td>
          <td>{{ product.price }} $</td>
          <td>{{ product.ISBN }}</td>
          <td>{{ product.note }}</td>
          <td>
            <button class="delete-button" @click="deleteProduct(product.ISBN)">Delete</button>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: "ManageProduct",
  setup() {
    const router = useRouter();
    const products = ref([]);

    const fetchProducts = () => {
      axios.get('http://localhost:5001/api/product')
        .then(response => {
          products.value = response.data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    };

    const deleteProduct = (ISBN) => {
      axios.delete(`http://localhost:5001/api/product/${ISBN}`)
        .then(() => {
          fetchProducts();
        })
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    };

    const logout = () => {
      router.push("/");
    };

    onMounted(fetchProducts);

    return { products, deleteProduct, logout };
  },
};
</script>

<style scoped>
.manage-products {
  max-width: 1500px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.add-product-button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.add-product-button:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

thead {
  background-color: #333;
  color: white;
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

tr {
  background-color: white;
}

tr:hover {
  background-color: #EBF3E8;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  opacity: 0.8;
}

.delete-button {
  background-color: #CE5A67; /* Red */
  color: white;
}

img {
  width: 100px;
  border-radius: 4px;
}
</style>

