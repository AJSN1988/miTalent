<template>
    <section class="home container">
        <main-header :options="headerOptions" />
        <top-models :models="models" />
        <actors-catalog :actors="actors" />
        <stories />
        <app-footer />
    </section>
</template>

<script>
import MenuData from "../data/menu";
import ModelsData from "../data/models";
import ActorsData from "../data/actors";

import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModelsClients.vue";
import ActorsCatalog from "../components/ActorsCatalog.vue";
import Stories from "../components/Stories.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "ClientsComponent",
    components: {
        MainHeader,
        TopModels,
        ActorsCatalog,
        Stories,
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
            models: ModelsData,
            actors: ActorsData
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
