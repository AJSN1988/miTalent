<template>
    <header class="header">
        <button class="burger-menu" @click="openMenu($event)">
            <span />
            <span />
            <span />
        </button>
        <nav class="horisontal-nav">
            <ul>
                <li>
                    <a href="#">Clients</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </nav>
        <div class="logo">
            <picture>
                <source srcset="../assets/img/logo_small.png" media="(max-width: 767px)" />
                <img srcset="../assets/img/logo.png" alt="Main logo default" />
            </picture>
        </div>
        <div class="search-form">
            <img src="../assets/img/search.svg" alt="Search icon" width="20" />
        </div>
        <div class="menu-wrapper" :class="{ hidden: !visibleMenu }">
            <app-menu />
        </div>
    </header>
</template>

<script>
import AppMenu from "./AppMenu.vue";

export default {
    name: "MainHeader",
    components: {
        AppMenu
    },
    computed: {
        visibleMenu() {
            return this.$store.state.showMenu;
        }
    },
    methods: {
        openMenu() {
            // document.querySelector(".burger-menu").classList.toggle("show");
            // document.querySelector(".menu-wrapper").classList.toggle("hidden");
            this.$store.commit("toggleMenu");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.header {
    font-family: "NunitoExtraBold", Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    margin: 76px 61px;
    position: relative;
    z-index: 10;
    @include screen-899 {
        margin: 20px;
    }
    @include screen-1279 {
        margin: 35px 20px;
    }
    .burger-menu {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        position: absolute;
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
    .horisontal-nav {
        font-size: 0.875rem;
        margin-left: 20px;
        width: 30%;
        @include screen-899 {
            width: auto;
        }
        ul {
            display: inline-flex;
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                margin-left: 49px;
                @include screen-899 {
                    display: none;
                }
                text-transform: uppercase;
                a {
                    &:link {
                        color: $textColor;
                    }
                    &:visited {
                        color: $textColor;
                    }
                    &:hover {
                        color: $hoveredLink;
                    }
                    text-decoration: none;
                }
            }
        }
    }
    .logo {
        margin-top: -9px;
    }
    .search-form {
        text-align: right;
        width: 30%;
        @include screen-899 {
            width: auto;
        }
    }
    .menu-wrapper {
        transition: 0.5s ease-in;
        top: 0;
        position: absolute;
        width: 100%;
        @include screen-999 {
            left: -20px;
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
