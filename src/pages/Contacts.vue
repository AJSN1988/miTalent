<template>
    <section class="contacts container">
        <main-header :options="headerOptions" />
        <side-menu />
        <contacts-main />
        <div class="footer">
            <app-footer />
        </div>
    </section>
</template>

<script>
import MenuData from "../data/menu";

import MainHeader from "../components/Header.vue";
import SideMenu from "../components/SideMenu.vue";
import ContactsMain from "../components/Contacts.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "ContactsPageComponent",
    components: {
        MainHeader,
        SideMenu,
        ContactsMain,
        AppFooter
    },
    data() {
        return {
            headerOptions: {
                navLinks: MenuData.linksOnTopNav.home,
                menuItems: MenuData.menuItems.contacts,
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
