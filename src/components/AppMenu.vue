<template>
    <section class="main-menu-section">
        <div class="menu-items">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="item"
                :style="{ background: `url('${item.photo}') scroll no-repeat center center` }"
            >
                <div
                    class="link"
                    role="link"
                    @click="linkClickHandler('link', item.link)"
                >{{ item.name }}</div>
                <div class="cover" />
            </div>
            <div class="close item">
                <div
                    class="link"
                    role="link"
                    @mouseenter="toggleCloseButton($event)"
                    @mouseleave="toggleCloseButton($event)"
                    @click="linkClickHandler('close', null)"
                >
                    Close
                    <hr />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppMenuComponent",
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            lockMenu: false
        };
    },
    methods: {
        linkClickHandler(action, routeName) {
            if (this.lockMenu) return false;
            if (action === "close") {
                this.$store.commit("toggleMenu");
                return false;
            }
            this.$store.commit("toggleMenu");
            setTimeout(() => {
                this.$router.push(routeName);
            }, 500);
        },
        toggleCloseButton(e) {
            const hr = e.target.querySelector("hr");
            if (e.type === "mouseenter") {
                hr.classList.add("hovered");
                return false;
            }
            hr.classList.remove("hovered");
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.main-menu-section {
    position: fixed;
    width: calc(100% - 122px);
    max-width: 1798px;
    top: inherit;
    height: 190px;
    background-color: $menuBackground;
    letter-spacing: 3px;
    @include screen-999 {
        height: 100vh;
        width: 190px;
    }
    @include screen-1000-1279 {
        width: calc(100% - 40px);
    }
    .menu-items {
        @include flex-row-wrap;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-family: "PoppinsRegular", Arial, sans-serif;
        text-transform: uppercase;
        @include screen-999 {
            flex-direction: column;
        }
        .item {
            height: 150px;
            align-self: center;
            @include flex-column-nowrap;
            justify-content: flex-end;
            position: relative;
            background-size: 100%;
            -webkit-transition: background-size 0.3s linear;
            -moz-transition: background-size 0.3s linear;
            -o-transition: background-size 0.3s linear;
            -ms-transition: background-size 0.3s linear;
            transition: background-size 0.3s linear;
            @include screen-h-799 {
                height: 55px;
            }
            &:hover {
                background-size: 120%;
            }
            &:not(:last-child) {
                width: 150px;
                margin-right: 20px;
                @include screen-999 {
                    margin-right: 0;
                }
                .cover {
                    background-color: $menuTileBackground2;
                }
            }
            &:last-child {
                width: 250px;
                @include screen-999 {
                    width: auto;
                }
            }
            .cover {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .link {
                align-self: center;
                z-index: 1;
                &:not(:last-child) {
                    padding: 15px 0;
                    width: 100%;
                    text-align: center;
                    background-color: $menuTileBackground1;
                    transition: 0.5s ease-in;
                    @include screen-h-799 {
                        background-color: $menuLinkSMBackground;
                        padding: 16px 0;
                    }
                    &:hover {
                        letter-spacing: 4.5px;
                    }
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .close {
            @include flex-column-nowrap;
            justify-content: center;
            .link {
                font-size: 2em;
                position: relative;
                transition: 0.3s ease;
                &:hover {
                    transform: scale(1.2);
                }
                hr {
                    position: absolute;
                    width: 0;
                    margin: 0;
                    border: 1px solid;
                    color: $menuHrColor;
                    transition: 0.4s linear;
                }
                hr.hovered {
                    width: calc(100% - 2px);
                }
            }
        }
    }
}
</style>
