
<template>
    <div>
    <h1>Here the Contact Details <span @click="updateItem">{{ id }} </span> </h1>
      <form @submit.prevent="updateItem">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="contact.lastName">
  
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="contact.firstName">
  
        <label for="number">Phone:</label>
        <input type="text" id="number" v-model="contact.number">
  
        <button type="submit">Update Contact</button>
      </form>
  
      <p>{{ status }}</p>
      
      <p>Last Name: {{ contact.lastName }}</p>
      <p>First Name: {{ contact.firstName }}</p>
      <p>Phone: {{ contact.number }}</p>
  
      <router-link to="/">Back to Contact List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        status: '',
        contact: {},
        contacts: [],
      };
    },

  

    methods: {
      updateItem: function () {
        localStorage.setItem(
          'items',
          JSON.stringify(
            this.contacts.map((contact) =>
              contact.id == this.id ? { ...this.contact } : contact
            )
          )
        );
        this.$router.push('/');
      },
    },
  };
  </script>