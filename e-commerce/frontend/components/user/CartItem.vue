<template>
  <div class="cart-item">
    <img :src="item.image" alt="Product Image">
    <h3>{{ item.name }}</h3>
    <p>{{ item.price }}</p>
    <button @click="removeFromCart">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  methods: {
    removeFromCart() {
      // Mettez en œuvre la logique de suppression du panier ici
      this.$emit("remove-from-cart", this.item);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant CartItem */
.cart-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
