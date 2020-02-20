<template>
    <div class="side-menu-wrapper" :class="{ hidden: hideSideMenu || this.$store.state.showMenu }">
        <button @click="openMenu()">Menu</button>
    </div>
</template>

<script>
export default {
    name: "SideMenuComponent",
    data() {
        return {
            hideSideMenu: true
        };
    },
    mounted() {
        document.addEventListener("scroll", this.showSideMenuHandler);
    },
    destroyed() {
        document.removeEventListener("scroll", this.showSideMenuHandler);
    },

    methods: {
        openMenu() {
            this.$store.commit("toggleMenu");
        },
        showSideMenuHandler() {
            const offset =
                document.documentElement.scrollTop || document.body.scrollTop;
            const screenHeight = window.screen.height;

            if (offset > screenHeight) {
                this.hideSideMenu = false;
            } else {
                this.hideSideMenu = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.side-menu-wrapper {
    z-index: 9;
    position: fixed;
    padding-bottom: 70px;
    transition: padding-bottom 0.5s linear, opacity 0.7s ease-in-out;
    top: calc(50% - 181px);
    transform: rotate(-90deg);
    opacity: 1;
    @include screen-767 {
        padding-bottom: 65px;
        top: calc(50% - 160px);
    }
    button {
        background-color: $menuHrColor;
        border: none;
        outline: none;
        font-family: "PoppinsRegular", Arial, sans-serif;
        font-size: 1.25em;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: $mainWhite;
        padding: 10px 20px 10px 25px;
        width: 120px;
        transition: all 0.5s linear;
        &:hover {
            cursor: pointer;
            color: $greyTextColor;
            letter-spacing: 5px;
        }
        @include screen-767 {
            font-size: 1em;
            padding: 5px 10px 5px 12px;
            width: 100px;
        }
    }
}
.side-menu-wrapper.hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
