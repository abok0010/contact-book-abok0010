<!-- NewContact.vue -->

<template>
    <div>
      <h1>Create New Contact</h1>
      <form @submit.prevent="createContact">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="newContact.lastName">
  
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="newContact.firstName">
  
        <label for="number">Phone:</label>
        <input type="text" id="number" v-model="newContact.number">
  
        <button type="submit">Add Contact</button>
      </form>
      <router-link to="/">Back to Contact List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newContact: { lastName: "", 
                firstName: "",
                number: "" },
      };
    },


    methods: {
      createContact() {
 
        this.newContact.id = this.contacts.length + 1;
  

        this.contacts.push({ ...this.newContact });
  

        localStorage.setItem("items", JSON.stringify(this.contacts));
        
        this.$router.push('/');
      },
    },
  };
  </script>
  