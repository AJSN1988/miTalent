import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import Clients from "../pages/Clients.vue";
import News from "../pages/News.vue";

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
        }
    ],
    mode: "history"
});
