<template>
    <section class="about-main-section">
        <div class="main-info-wrapper">
            <div
                class="contacts-part"
                :style="{
                    background: `url('../static/about_background.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }"
            >
                <div class="our-socials">
                    <ul>
                        <li
                            role="link"
                            @mouseenter="toggleSocialColor($event)"
                            @mouseleave="toggleSocialColor($event)"
                            @click="goToOurSocial(model.links.facebook)"
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
                            @click="goToOurSocial(model.links.instagram)"
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
                            @click="goToOurSocial(model.links.youtube)"
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
                            @click="goToOurSocial(model.links.twitter)"
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
                <a
                    class="contact-link"
                    @mouseenter="toggleHoverViewButton($event)"
                    @mouseleave="toggleHoverViewButton($event)"
                >
                    <span>Contact us</span>
                    <div class="icon">
                        <img src="../assets/img/contact.svg" alt="Contact us link icon" width="16" />
                    </div>
                </a>
            </div>
            <div class="annotation-part">
                <div class="annotation-wrapper">
                    <div class="content">
                        <div class="text-content">
                            <div class="content-header">
                                <div class="head-letter">D</div>
                                <div
                                    class="header-text"
                                >eveloping the best talent in the comedy &amp; entertainment business</div>
                            </div>
                            <div class="about-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore sed similique rerum nihil laboriosam tenetur quaerat repudiandae eos? Explicabo fugiat eius ducimus voluptatum provident eveniet in, totam iusto quam error dolorem. Explicabo ad optio quod perspiciatis similique molestiae ut nulla expedita, ipsam omnis ipsum nemo, fugiat aspernatur ab quibusdam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error quas sint assumenda enim, tenetur consequatur nesciunt, distinctio repellendus expedita dolorum suscipit provident facere nostrum. Voluptates natus incidunt, corrupti deleniti dicta dolorum unde, asperiores odit, eum cupiditate fugit tempore maiores nulla culpa nostrum tempora!</p>
                            </div>
                        </div>
                        <div class="content-tail">
                            <div class="tail-content">
                                <span>Motivation</span>
                                Is The First Step To
                                <span>Success</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="actors-wrapper">
            <actors-slider :actors="actors" />
        </div>
    </section>
</template>

<script>
import ActorsData from "../data/actors";
import ActorsSlider from "./ActorsCatalogWithSlider.vue";

export default {
    name: "AboutMainInfoComponent",
    components: {
        ActorsSlider
    },
    data() {
        return {
            actors: ActorsData
        };
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
        goToOurSocial(link) {
            window.open(link);
        },
        toggleHoverViewButton(e) {
            if (window.matchMedia("(max-width: 1279px)").matches) {
                return false;
            }
            const iconSection = document.querySelector(".contact-link .icon");
            let iconOpacity = "1";
            let iconWidth = "110px";

            if (e.type === "mouseenter") {
                iconWidth = "0";
                iconOpacity = "0";
            }

            iconSection.style.width = iconWidth;
            iconSection.querySelector("img").style.opacity = iconOpacity;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.about-main-section {
    margin-top: -181px;
    max-width: 1920px;

    .main-info-wrapper {
        height: 100vh;
        max-height: 1080px;
        min-height: 900px;
        @include screen-1279 {
            height: fit-content;
            max-height: initial;
        }
        @include flex-row-wrap;
        .contacts-part {
            width: 40.052vw;
            max-width: 769px;
            @include screen-1279 {
                width: 100%;
                height: 100vh;
                max-width: initial;
                margin-top: 82px;
                max-height: 1024px;
                min-height: 568px;
            }
            .our-socials {
                padding-left: 61px;
                height: calc(100% - 220px);
                margin-top: 110px;
                @include flex-column-nowrap;
                justify-content: center;
                @include screen-1279 {
                    padding-left: 20px;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        margin-bottom: 40px;
                        width: 16px;
                        &:hover {
                            cursor: pointer;
                        }
                        .hovered {
                            display: none;
                        }
                    }
                }
            }
            .contact-link {
                height: 110px;
                width: 62.42%;
                min-width: 320px;
                @include flex-row-nowrap;
                &:hover {
                    cursor: pointer;
                }
                @include screen-1279 {
                    max-width: 420px;
                    min-width: 320px;
                }
                span,
                .icon {
                    align-self: center;
                    text-align: center;
                    padding: 45px 0;
                }
                span {
                    flex: 1;
                    background: linear-gradient(
                        270deg,
                        rgba(180, 211, 211, 1) 38%,
                        rgba(212, 227, 227, 1) 100%
                    );
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    font-size: 0.875em;
                    color: $mainWhite;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .icon {
                    background-color: $descriptionBackground;
                    width: 110px;
                    transition: all 0.5s linear;
                    img {
                        transition: opacity 0.3s ease-out;
                    }
                }
            }
        }
        .annotation-part {
            background: linear-gradient(180deg, #b5d4d4 0%, #d8e6e6 100%);
            background-position: top right;
            flex: 1;
            background-size: 50% 50%;
            background-repeat: no-repeat;
            @include screen-1279 {
                width: 100%;
                flex: initial;
            }
            .annotation-wrapper {
                background: $aboutAnnotationBackground;
                height: 100%;
                width: 80.193%;
                @include screen-459 {
                    width: 100%;
                }
                @include screen-460-767 {
                    width: 95%;
                }
                .content {
                    padding-left: 20.966%;
                    padding-top: 29.639%;
                    // padding-left: 191px;
                    // padding-top: 270px;
                    width: 63.228%;
                    max-width: 767px;
                    @include flex-column-nowrap;
                    justify-content: space-between;
                    // height: calc(100% - 270px);
                    height: 75%;
                    @include screen-767 {
                        width: calc(100% - 40px);
                        padding-left: 20px;
                        padding-top: 60px;
                    }
                    .text-content {
                        .content-header {
                            @include flex-row-nowrap;
                            .head-letter {
                                font-family: "PoppinsLight", Arial, sans-serif;
                                font-size: 5em;
                                margin-right: 14px;
                            }
                            .header-text {
                                flex: 1;
                                font-family: "PoppinsRegular", Arial, sans-serif;
                                font-size: 1.5em;
                                align-self: center;
                            }
                        }
                        .about-content {
                            p {
                                // margin: 8.683% 0;
                                margin: 50px 0;
                                font-family: "NunitoRegular", Arial, sans-serif;
                                color: $darkGreytextColor;
                            }
                        }
                    }
                    .content-tail {
                        height: 35.31%;
                        // height: 286px;
                        background-color: $aboutDarkBackground;
                        @include flex-column-nowrap;
                        justify-content: center;
                        .tail-content {
                            width: 49.655%;
                            color: $mainWhite;
                            margin: auto;
                            font-family: "PlayfairDisplayRegular", Arial,
                                sans-serif;
                            font-size: 1.875em;
                            text-align: center;
                            line-height: 1.5;
                            @include screen-459 {
                                font-size: 1em;
                            }
                            @include screen-767 {
                                padding: 20px 0;
                            }
                            span {
                                font-family: "PlayfairDisplayItalicBold", Arial,
                                    sans-serif;
                            }
                        }
                    }
                }
            }
        }
    }
    // .actors-wrapper {
    //     margin: 120px 61px 0;
    // }
}
</style>
