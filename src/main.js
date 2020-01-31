import Vue from "vue";
import Vuex from "vuex";
import App from "./components/App.vue";
import router from "./router";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showMenu: false
    },
    mutations: {
        toggleMenu(state) {
            state.showMenu = !state.showMenu;
        }
    }
});

new Vue({
    el: "#app",
    store,
    router,
    render: (h) => h(App)
});
