<template>
    <section class="top-model-clients-section">
        <div class="models-wrapper">
            <div v-for="model in models" :key="model.id" class="model">
                <div class="model-description-wrapper">
                    <div class="model-description">
                        <div class="socials">
                            <ul>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial(model.links.facebook)"
                                >
                                    <img
                                        src="../assets/img/facebook.svg"
                                        alt="Facebook social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/facebook_hovered.svg"
                                        alt="Facebook hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial(model.links.instagram)"
                                >
                                    <img
                                        src="../assets/img/instagram.svg"
                                        alt="Instagram social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/instagram_hovered.svg"
                                        alt="Instagram hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial(model.links.youtube)"
                                >
                                    <img
                                        src="../assets/img/youtube.svg"
                                        alt="Youtube social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/youtube_hovered.svg"
                                        alt="Youtube hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial(model.links.twitter)"
                                >
                                    <img
                                        src="../assets/img/twitter.svg"
                                        alt="Twitter social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/twitter_hovered.svg"
                                        alt="Twitter hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <div class="header">Our talent</div>
                            <div class="text">
                                <hr />
                            </div>
                            <button></button>
                        </div>
                    </div>
                </div>
                <div class="model-info">
                    <div class="photo"></div>
                    <div class="bottom">
                        <div class="annotation">
                            <div class="description"></div>
                            <div class="name"></div>
                        </div>
                        <div class="navs"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="model-number-label"></div>
    </section>
</template>

<script>
export default {
    name: "TopModelClientsComponent",
    props: {
        models: {
            type: Array,
            required: true
        }
    },
    methods: {
        toggleSocialColor(e) {
            const svgElements = e.target.children;
            let initElementVisible = "initial";
            let hoveredElementVisible = "none";

            if (e.type === "mouseenter") {
                initElementVisible = "none";
                hoveredElementVisible = "initial";
            }
            svgElements[0].style.display = initElementVisible;
            svgElements[1].style.display = hoveredElementVisible;
        },
        goToModelSocial(link) {
            window.open(link);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-model-clients-section {
    @include screen-min-1280 {
        min-height: 720px;
    }
    height: 100vh;
    margin-top: -181px;
    @include screen-767 {
        height: 650px;
    }
    @include screen-1279 {
        margin-top: -99px;
    }
    @include screen-768-1279 {
        min-height: 650px;
    }
    position: relative;
    @include screen-min-h-1200 {
        height: 1080px;
    }
    .models-wrapper {
        .model {
            @include flex-row-nowrap;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .model-description-wrapper {
                width: 59.8958%;
                @include flex-column-nowrap;
                justify-content: center;
                background: rgb(181, 212, 212);
                background: linear-gradient(
                    280deg,
                    rgba(181, 212, 212, 1) 50%,
                    rgba(216, 230, 230, 1) 86%
                );
                .model-description {
                    margin-left: 61px;
                    height: 50.1851%;
                    @include flex-row-nowrap;
                    justify-content: flex-end;
                    .socials {
                        width: 16.3452%;
                        ul {
                            margin: 0;
                            padding: 0;
                            list-style: none;
                            li {
                                &:hover {
                                    cursor: pointer;
                                }
                                .hovered {
                                    display: none;
                                }
                                &:not(nth-last-child) {
                                    margin-bottom: 40px;
                                }
                            }
                        }
                    }
                    .description {
                        width: 83.6547%;
                        background-color: $mainWhite;
                        padding-left: 145px;
                        @include flex-column-nowrap;
                        justify-content: center;
                        .header {
                            font-family: "PoppinsRegular", Arial, sans-serif;
                            font-size: 6.25em;
                        }
                    }
                }
            }
            .model-info {
                width: 40.1041%;
            }
        }
    }
}
</style>
