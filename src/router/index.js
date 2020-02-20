import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import Clients from "../pages/Clients.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";
import Contacts from "../pages/Contacts.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: Home
        },
        {
            path: "/clients",
            name: "ClientsPage",
            component: Clients
        },
        {
            path: "/news",
            name: "NewsPage",
            component: News
        },
        {
            path: "/about",
            name: "AboutPage",
            component: About
        },
        {
            path: "/contacts",
            name: "ContactsPage",
            component: Contacts
        }
    ],
    mode: "history"
});
