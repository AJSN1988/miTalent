<template>
    <section class="home container">
        <main-header :options="headerOptions" />
        <top-models :models="models" />
        <actors-catalog :actors="actors" />
        <stories :stories="stories" />
        <div class="latest-news-section">
            <div class="label">Latest news</div>
            <hr />
            <latest-news :news="news.slice(0, 6)" />
        </div>
        <div class="footer">
            <app-footer />
        </div>
    </section>
</template>

<script>
import MenuData from "../data/menu";
import ModelsData from "../data/models";
import ActorsData from "../data/actors";
import StoriesData from "../data/twitter";
import NewsData from "../data/news";

import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModelsClients.vue";
import ActorsCatalog from "../components/ActorsCatalog.vue";
import Stories from "../components/Stories.vue";
import LatestNews from "../components/HotNews.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "ClientsComponent",
    components: {
        MainHeader,
        TopModels,
        ActorsCatalog,
        Stories,
        LatestNews,
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
            actors: ActorsData,
            stories: StoriesData,
            news: NewsData.hotNews
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.container {
    max-width: 1920px;
    margin: auto;
    .latest-news-section {
        margin-top: 124px;
        .label {
            font-family: "PoppinsRegular", Arial, sans-serif;
            font-size: 3.75rem;
            text-align: center;
        }
        hr {
            margin-top: 35px;
            margin-left: auto;
            margin-bottom: 69px;
            width: 150px;
            border: none;
            height: 2px;
            background-color: $textColor;
        }
    }
    .footer {
        margin: 129px 61px 49px;
    }
}
</style>
