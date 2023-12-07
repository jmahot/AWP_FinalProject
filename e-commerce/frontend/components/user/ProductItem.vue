<template>
  <div class="product-item">
    <img :src="product.image" alt="Product Image">
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      // Mettez en œuvre la logique d'ajout au panier ici
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant ProductItem */
.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 260px;
}

h3 {
  word-wrap: break-word;
}

img {
  width: 250px;
}
</style>
