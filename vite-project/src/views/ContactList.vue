<template>
  <div>
    <h1>Contacts</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.lastName }} {{ contact.firstName }}
        </router-link>
      </li>
    </ul>
    <button type="submit">  <router-link to="/new-contact">New Contact</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, lastName: "Aaron", firstName: "John", number: "1-800-2345" },
        { id: 2, lastName: "Abigail", firstName: "Mary", number: "647-981-2345" },
        { id: 3, lastName: "Baron", firstName: "George", number: "1-234-5678" },
        { id: 4, lastName: "Barkley", firstName: "Floyd", number: "1-567-5890" },
      ],
    };
  },
};
</script>
