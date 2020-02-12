<template>
    <section class="home container">
        <main-header :options="headerOptions" />
        <top-models :models="modelsForTopList" />
        <short-actors-catalog :actors-catalog="shortActorsCatalog" />
        <latest-news :news="news" />
        <div class="footer">
            <app-footer />
        </div>
    </section>
</template>

<script>
import MenuData from "../data/menu";
import Models from "../data/models";
import Actors from "../data/actors";
import News from "../data/news";

import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModels.vue";
import ShortActorsCatalog from "../components/ShortActorsCatalog.vue";
import LatestNews from "../components/LatestNews.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "HomeComponent",
    components: {
        MainHeader,
        TopModels,
        ShortActorsCatalog,
        LatestNews,
        AppFooter
    },
    data() {
        return {
            headerOptions: {
                navLinks: MenuData.linksOnTopNav.home,
                menuItems: MenuData.menuItems.home,
                colors: {
                    idle: "#919196",
                    hover: "#b4d3d3"
                }
            },
            shortActorsCatalog: Actors,
            modelsForTopList: Models,
            news: News
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1920px;
    margin: auto;
    .footer {
        margin: 169px 61px 49px;
    }
}
</style>
