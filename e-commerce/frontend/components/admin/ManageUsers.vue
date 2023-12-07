<template>
  <nav>
    <router-link to="/adminview">Home</router-link> |
    <router-link to="/manageusers">Manage Users</router-link> |
    <router-link to="/manageproduct">Manage Product</router-link> |
    <router-link to="/userprofile">UserProfile</router-link> |
    <a @click="logout">Logout</a>
  </nav>

  <div>
    <h1>Manage Users</h1>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="user in users" :key="user.id" :class="isAdmin(user.username) ? 'admin-user' : 'non-admin-user'">
          <td>{{ user.username }}</td>
          <td>
              <button v-if="!isAdmin(user.username)" @click="deleteUser(user.username)" class="delete-button">Delete</button>
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
    name: "ManageUser",
    setup() {
      const users = ref([]);
      const admins = ["AdminJulie", "AdminDany", "AdminOlivier"]; // Noms d'utilisateur des administrateurs
      const router = useRouter();

      const fetchUsers = () => {
        axios.get('http://localhost:5000/api/users')
          .then(response => {
            users.value = response.data;
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });
      };

      const deleteUser = (username) => {
        axios.delete(`http://localhost:5000/api/users/username/${username}`)
          .then(() => {
            fetchUsers();
          })
          .catch(error => {
            console.error("Error deleting user:", error);
          });
      };

      const isAdmin = (username) => {
        return admins.includes(username);
      };

      onMounted(fetchUsers);

      const logout = () => {
        router.push("/");
      };

      return { users, deleteUser, isAdmin, logout};
    },
  };
</script>

<style>
/* Styles de base du tableau */
body {  
  font-family: 'Arial', sans-serif; /* Police par défaut */
}

/* Styles de base du tableau */
table {
  width: 60%; /* Largeur du tableau */
  margin-left: auto; /* Centrage horizontal */
  margin-right: auto;
  border-collapse: collapse;
  background-color: #2c2f33; /* Couleur de fond légèrement différente pour le tableau */
  border-radius: 8px; /* Bords arrondis */
  overflow: hidden; /* Maintenir les bords arrondis */
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center; /* Alignement au centre */
}

th {
  background-color: #f4f4f4;
  color: black;
}

/* Styles pour les utilisateurs administrateurs */
.admin-user {
  background-color: #89B9AD; /* Vert foncé pour les admins */
}

/* Styles pour les utilisateurs non administrateurs */
.non-admin-user {
  background-color: #C7DCA7; /* Vert clair pour les non-admins */
}

/* Styles du bouton de suppression */
.delete-button {
  background-color: #CE5A67;
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