
<template>
    <nav>
    <router-link to="/adminview">Home</router-link> |
    <router-link to="/manageusers">Manage Users</router-link> |
    <router-link to="/manageproduct">Manage Product</router-link> |
    <span>NickName</span> |
    <a @click="logout">Logout</a>
  </nav>

  <div>
  <p>
    <label for="title">title</label>
    <input id="title" v-model="title" type="text" name="title" autocomplete="title" />
  </p>
  <p>
    <label for="image">image</label>
    <input id="image" v-model="image" type="text" name="image" autocomplete="image" />
  </p>
  <p>
    <label for="illustrator">illustrator</label>
    <input id="illustrator" v-model="illustrator" type="text" name="illustrator" autocomplete="illustrator" />
  </p>
  <p>
    <label for="publicationDate">publicationDate</label>
    <input id="publicationDate" v-model="publicationDate" type="text" name="publicationDate" autocomplete="publicationDate" />
  </p>
  <p>
    <label for="price">price</label>
    <input id="price" v-model="price" type="number" name="price" autocomplete="price" />
    </p>

    <p>
        <label for="ISBN">ISBN</label>
        <input id="ISBN" v-model="ISBN" type="text" name="ISBN" autocomplete="ISBN" />
    </p>

  <p>
    <label for="Note">Note</label>
    <input id="Note" v-model="note" type="text" name="Note" autocomplete="Note" />
  </p>
  <button @click="createProduct">Create New product</button>
  
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: "AddProduct",
    data() {
        return {
            title: "",
            image: "",
            illustrator: "",
            publicationDate: "",
            price: "",
            ISBN: "",
            note: "",
        };
    },
    methods: {
        createProduct() {
            axios.post("http://localhost:5001/api/product", {
                title: this.title,
                image: this.image,
                illustrator: this.illustrator,
                publicationDate: this.publicationDate,
                price: this.price,
                ISBN: this.ISBN,
                note: this.note,
            })
            .then(response => {
                console.log("Product created successfully:", response.data);
                // Reset fields after successful creation
                this.title = "";
                this.image = "";
                this.illustrator = "";
                this.publicationDate = "";
                this.price = "";
                this.ISBN = "";
                this.note = "";
            })
            .catch(error => {
                console.error("Error creating product:", error);
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>