<template>
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
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>
              <!-- Afficher le bouton de suppression seulement si l'utilisateur n'est pas un administrateur -->
              <button v-if="!isAdmin(user.username)" @click="deleteUser(user.username)">Delete</button>
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
  name: "ManageUser",
  setup() {
    const users = ref([]);
    const admins = ["AdminJulie", "AdminDany", "AdminOlivier"]; // Noms d'utilisateur des administrateurs

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

    return { users, deleteUser, isAdmin };
  },
};
</script>

<style>
/* Ajoutez votre CSS ici */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}
</style>