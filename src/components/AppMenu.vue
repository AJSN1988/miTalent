<template>
    <section class="main-menu-section">
        <div class="menu-items">
            <div class="news item">
                <div class="link" role="link" @click="linkClickHandler('news')">News</div>
                <div class="cover" />
            </div>
            <div class="clients item">
                <div class="link" role="link" @click="linkClickHandler('clients')">Clients</div>
                <div class="cover" />
            </div>
            <div class="about item">
                <div class="link" role="link" @click="linkClickHandler('about')">About</div>
                <div class="cover" />
            </div>
            <div class="contacts item">
                <div class="link" role="link" @click="linkClickHandler('contacts')">Contact</div>
                <div class="cover" />
            </div>
            <div class="close item">
                <div
                    class="link"
                    role="link"
                    @mouseenter="toggleCloseButton($event)"
                    @mouseleave="toggleCloseButton($event)"
                    @click="linkClickHandler('close')"
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
    methods: {
        linkClickHandler(action) {
            if (action === "close") {
                this.$store.commit("toggleMenu");
            }
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
    @include screen-768-999 {
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
        .news {
            background: url("../assets/img/menu/news.png") scroll no-repeat
                center center;
        }
        .clients {
            background: url("../assets/img/menu/clients.png") scroll no-repeat
                center center;
        }
        .about {
            background: url("../assets/img/menu/about.png") scroll no-repeat
                center center;
        }
        .contacts {
            background: url("../assets/img/menu/contacts.png") scroll no-repeat
                center center;
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
            &:hover {
                background-size: 120%;
            }
            &:not(:last-child) {
                width: 150px;
                margin-right: 20px;
                .cover {
                    background-color: $menuTileBackground2;
                }
            }
            &:last-child {
                width: 250px;
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
    // .close-button {
    // }
}
</style>
