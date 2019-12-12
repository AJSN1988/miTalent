<template>
    <header class="header">
        <button class="burger-menu" @click="openMenu($event)">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="horisontal-nav">
            <ul>
                <!-- <li>
                    <button class="burger-menu" @click="openMenu($event)">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </li>-->
                <li>
                    <a href="#">Clients</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </nav>
        <div class="logo">
            <img src="../assets/img/logo.png" alt="Main logo" />
        </div>
        <div class="search-form">
            <img src="../assets/img/search.svg" alt="Search icon" width="20" />
        </div>
        <div class="side-menu hidden"></div>
    </header>
</template>

<script>
export default {
    name: "MainHeader",
    methods: {
        openMenu(e) {
            document.querySelector(".burger-menu").classList.toggle("show");

            document.querySelector(".side-menu").classList.toggle("hidden");
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
    @include screen-899 {
        margin: 20px;
    }
    .burger-menu {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        position: fixed;
        // z-index: 11;
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
                // transition-delay: 0.5s;
                // animation: openMenu 0.5s ease 0.5s 1 normal none;
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
                // &:not(:nth-child(1)) {
                //     margin-left: 49px;
                //     @include screen-899 {
                //         display: none;
                //     }
                // }
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
        // width: 33.333%;
        margin-top: -9px;
    }
    .search-form {
        text-align: right;
        width: 30%;
        @include screen-899 {
            width: auto;
        }
    }
    .side-menu {
        transition: 0.5s ease-in;
        width: 320px;
        position: fixed;
        background-color: aquamarine;
        height: calc(100vh - 167px);
        left: 0;
        top: 167px;
        z-index: 10;
        @include screen-899 {
            top: 60px;
            height: calc(100vh - 60px);
        }
    }
    .side-menu.hidden {
        left: -320px;
    }
}
</style>