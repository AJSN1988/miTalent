<template>
    <section class="about container">
        <main-header :options="headerOptions" />
        <about-main />
        <div class="footer">
            <app-footer />
        </div>
    </section>
</template>

<script>
import MenuData from "../data/menu";

import MainHeader from "../components/Header.vue";
import AppFooter from "../components/AppFooter.vue";
import AboutMain from "../components/AboutMainInfo.vue";

export default {
    name: "ClientsComponent",
    components: {
        MainHeader,
        AboutMain,
        AppFooter
    },
    data() {
        return {
            headerOptions: {
                navLinks: MenuData.linksOnTopNav.home,
                menuItems: MenuData.menuItems.about,
                colors: {
                    idle: "#1a1a1d",
                    hover: "#b4d3d3"
                }
            }
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
        margin: 129px 61px 49px;
        @include screen-767 {
            margin: 129px 0 49px;
        }
    }
}
</style>
