<template>
    <section class="news container">
        <news-header :options="headerOptions" />
        <news :news="news" />
        <div class="footer">
            <app-footer />
        </div>
    </section>
</template>

<script>
import MenuData from "../data/menu";
import NewsData from "../data/news";

import NewsHeader from "../components/NewsHeader.vue";
import News from "../components/News.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "NewsComponent",
    components: {
        NewsHeader,
        News,
        AppFooter
    },
    data() {
        return {
            headerOptions: {
                menuItems: MenuData.menuItems.news,
                colors: {
                    idle: "#919196",
                    hover: "#b4d3d3"
                }
            },
            news: NewsData
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.container {
    max-width: 1920px;
    margin: auto;
    .footer {
        margin: 169px 61px 49px;
        @include screen-767 {
            margin: 169px 0 49px;
        }
    }
}
</style>
