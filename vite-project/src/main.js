import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, 
    createWebHashHistory} from 'vue-router'
import ContactList from './views/ContactList.vue'
import ContactDetails from './views/ContactDetails.vue'
import NewContact from './views/NewContact.vue';

const routes = [
        { path: '/', component: ContactList },
        { path: '/contact/:id', component: ContactDetails, props: true },
        { path: '/new-contact', component: NewContact }
    ]
    
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})



createApp(App).use(router).mount('#app')
