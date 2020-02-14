<template>
    <header class="news-header">
        <div class="logo">
            <picture>
                <source srcset="../assets/img/logo_small.png" media="(max-width: 767px)" />
                <img srcset="../assets/img/logo.png" alt="Main logo default" />
            </picture>
        </div>
        <div class="controls">
            <div class="search-form">
                <input id="search" type="text" placeholder="SEARCH POST" />
                <button>
                    <img
                        src="../assets/img/search.svg"
                        alt="Search button icon"
                        width="20"
                        @click="goSearch($event)"
                    />
                </button>
            </div>
            <button class="burger-menu" @click="openMenu($event)">
                <span />
                <span />
                <span />
            </button>
        </div>

        <div class="menu-wrapper" :class="{ hidden: !visibleMenu }">
            <app-menu :items="options.menuItems" />
        </div>
    </header>
</template>

<script>
import AppMenu from "./AppMenu.vue";

export default {
    name: "NewsHeaderComponent",
    components: {
        AppMenu
    },
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    computed: {
        visibleMenu() {
            return this.$store.state.showMenu;
        },
        navLinksStyle() {
            return {
                "--color": this.$props.options.colors.idle,
                "--color-hover": this.$props.options.colors.hover
            };
        }
    },
    methods: {
        openMenu() {
            this.$store.commit("toggleMenu");
        },
        goSearch(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.news-header {
    font-family: "NunitoExtraBold", Arial, sans-serif;
    @include flex-row-wrap;
    justify-content: space-between;
    margin: 76px 61px 88px auto;

    z-index: 10;
    max-width: 994px;
    @include screen-899 {
        margin: 20px;
    }
    @include screen-1279 {
        margin: 35px 20px;
        max-width: calc(100% - 40px);
    }
    @include screen-1280-1779 {
        max-width: calc(100% - 122px);
        width: 100%;
        // margin: 76px 61px;
    }
    .logo {
        margin-top: -9px;
        @include screen-599 {
            width: 100%;
            text-align: center;
        }
    }
    .controls {
        width: 49.3951%;
        @include flex-row-nowrap;
        justify-content: space-between;
        @include screen-599 {
            width: 100%;
            margin-top: 20px;
            flex-direction: row-reverse;
        }
    }
    .burger-menu {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background: none;
        align-self: center;
        &:hover {
            cursor: pointer;
        }
        span {
            display: block;
            border-bottom: 2px solid #000000;
            width: 20px;
            transition: 0.3s ease-in;
            &:not(:nth-child(3)) {
                margin-bottom: 5px;
            }
        }
    }
    .burger-menu.show {
        span {
            &:nth-child(1) {
                transform: translateY(7px) rotate(45deg);
            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        }
    }

    .search-form {
        @include flex-row-nowrap;
        justify-content: space-between;
        width: 85.7142%;
        border-left: 2px solid $menuTileBackground1;
        align-self: center;
        @include screen-899 {
            width: auto;
        }
        input {
            margin-left: 42px;
            width: 80%;
            border: none;
            outline: none;
            font-family: "NunitoExtraBold", Arial, sans-serif;
            font-size: 0.875em;
            letter-spacing: 3px;
            color: $greyTextColor;
            &::placeholder {
                font-family: "NunitoExtraBold", Arial, sans-serif;
                font-size: 0.875em;
                letter-spacing: 3px;
                color: $greyTextColor;
            }
        }
        button {
            border: none;
            outline: none;
            background: none;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .menu-wrapper {
        transition: 0.5s ease-in;
        top: 0;
        left: 61px;
        position: absolute;
        width: 100%;
        z-index: 11;
        @include screen-999 {
            left: 0;
        }
        @include screen-1000-1279 {
            left: 20px;
        }
    }
    .menu-wrapper.hidden {
        top: -200px;
        @include screen-999 {
            top: 0;
            left: -220px;
        }
    }
}
</style>
