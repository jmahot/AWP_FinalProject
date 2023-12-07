<!-- MyCard.vue -->
<template>
  <nav>
    <router-link to="/userview">Home for User</router-link> |
    <router-link to="/userview/mycard">MyCard</router-link> |
    <router-link to="/userview/productlist">ProductList</router-link> |
    <router-link to="/userview/userprofile">UserProfile</router-link> |
    <a @click="logout">Logout</a>
  </nav>
  <div class="my-card" v-if="product">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.author }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.releaseDate }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "MyCard",
  props: {
    product: Object,
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push("/");
    };

    return { logout };
  },
  methods: {
    addToCart() {
      // Implementez la logique d'ajout au panier ici
      if (this.product) {
        console.log(`Added ${this.product.name} to cart`);
        this.$emit("add-to-cart", this.product); // Émettre un événement pour informer le parent
      }
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant MyCard */
.my-card {
  display: flex;
  border: 1px solid #ddd;
  margin: 10px;
}

.product-image {
  max-width: 100%;
  max-height: 50px;
  object-fit: cover;
}

.product-details {
  padding: 10px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
