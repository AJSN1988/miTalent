<template>
    <section class="home container">
        <main-header :options="headerOptions" />
        <top-models :models="models" />
        <app-footer />
    </section>
</template>

<script>
import MenuData from "../data/menu";
import ModelsData from "../data/models";

import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModelsClients.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "ClientsComponent",
    components: {
        MainHeader,
        TopModels,
        AppFooter
    },
    data() {
        return {
            headerOptions: {
                navLinks: MenuData.linksOnTopNav.clients,
                menuItems: MenuData.menuItems.clients,
                colors: {
                    idle: "#919196",
                    hover: "#b4d3d3"
                }
            },
            models: ModelsData
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1920px;
    margin: auto;
}
</style>
