<template>
    <section class="top-model-clients-section">
        <div class="stuck-info-containter">
            <div class="wrapper">
                <div class="socials">
                    <ul>
                        <li
                            role="link"
                            @mouseenter="toggleSocialColor($event)"
                            @mouseleave="toggleSocialColor($event)"
                            @click="goToModelSocial(activeModelObject.links.facebook)"
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
                            @click="goToModelSocial(activeModelObject.links.instagram)"
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
                            @click="goToModelSocial(activeModelObject.links.youtube)"
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
                            @click="goToModelSocial(activeModelObject.links.twitter)"
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
                <div class="info-container">
                    <div class="info">
                        <div class="header">
                            <span>Our talents</span>
                        </div>
                        <div class="annotation">LEADING INDUSTRY NAMES.</div>
                        <hr />
                    </div>
                    <button>About us</button>
                </div>
                <div class="page-label">
                    <span>{{ activeModelObject.id }}</span>
                    <hr />
                </div>
            </div>
        </div>
        <div class="models-container">
            <div class="photos-slider">
                <div class="wrapper" :style="photoWrapperOffset">
                    <div
                        v-for="model in models"
                        :key="model.id"
                        class="model-photo"
                        :class="{ active: activeModelObject.id === model.id }"
                        :style="{ background: `url('${model.photo}')`, backgroundSize: 'cover', backgroundPosition: 'center'}"
                    />
                </div>
            </div>
            <div class="description-slider">
                <div class="wrapper" :style="descriptionWrapperOffset">
                    <div
                        v-for="model in models"
                        :key="model.id"
                        class="model-description"
                        :class="{ active: activeModelObject.id === model.id }"
                    >
                        <div class="description">{{ model.description }}</div>
                        <div class="name">{{ model.name }}</div>
                    </div>
                </div>
                <div class="nav">
                    <button @click="changeActiveModel('up')">
                        <img
                            v-if="activeModelId > 0"
                            src="../assets/img/arrow_up.svg"
                            alt="Arrow up icon"
                            width="18"
                        />
                        <img
                            v-if="activeModelId === 0"
                            src="../assets/img/arrow_up_grey.svg"
                            alt="Inactive arrow up icon"
                            width="18"
                        />
                    </button>
                    <button @click="changeActiveModel('down')">
                        <img
                            v-if="activeModelId < models.length - 1"
                            src="../assets/img/arrow_down.svg"
                            alt="Arrow down icon"
                            width="18"
                        />
                        <img
                            v-if="activeModelId === models.length - 1"
                            src="../assets/img/arrow_down_grey.svg"
                            alt="Inactive arrow down icon"
                            width="18"
                        />
                    </button>
                </div>
            </div>
        </div>
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
    data() {
        return {
            activeModelObject: this.$props.models[0],
            activeModelId: this.$props.models[0].id - 1,
            lockSlideNav: false
        };
    },
    computed: {
        photoWrapperOffset() {
            return {
                top: `${this.activeModelId * -100}%`
            };
        },
        descriptionWrapperOffset() {
            return {
                left: `${this.activeModelId * -100}%`
            };
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
        },
        changeActiveModel(direction) {
            if (
                this.lockSlideNav ||
                (direction === "up" && !this.activeModelId) ||
                (direction === "down" &&
                    this.activeModelId === this.$props.models.length - 1)
            ) {
                return false;
            }
            this.lockSlideNav = true;

            if (direction === "down") {
                this.activeModelId++;
            } else if (direction === "up") {
                this.activeModelId--;
            }

            setTimeout(() => {
                this.lockSlideNav = false;
            }, 800);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-model-clients-section {
    @include flex-row-nowrap;

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
    .stuck-info-containter {
        width: 59.8958%;
        @include flex-column-nowrap;
        justify-content: center;
        background: rgb(181, 212, 212);
        background: linear-gradient(
            280deg,
            rgba(181, 212, 212, 1) 50%,
            rgba(216, 230, 230, 1) 86%
        );
        .wrapper {
            margin-left: 61px;
            height: 50.1851%;
            @include flex-row-nowrap;
            justify-content: flex-end;
            .socials {
                width: 16.3452%;
                z-index: 1;
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        width: 16px;
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
            .info-container {
                width: 83.6547%;
                background-color: $mainWhite;
                padding-left: 145px;
                @include flex-column-nowrap;
                justify-content: center;
                .info {
                    position: relative;
                    width: fit-content;
                    .header {
                        span {
                            font-family: "PoppinsRegular", Arial, sans-serif;
                            font-size: 6.25em;
                        }
                    }
                    .annotation {
                        font-family: "NunitoSemiBold", Arial, sans-serif;
                        font-size: 1.0625em;
                        text-transform: uppercase;
                        letter-spacing: 3px;
                        padding-top: 20px;
                    }
                    hr {
                        width: 93px;
                        height: 5px;
                        right: 0;
                        bottom: 3px;
                        border: 1px solid $mainBlue;
                        background-color: $mainBlue;
                        margin: 0;
                        position: absolute;
                    }
                }
                button {
                    width: 257px;
                    height: 58px;
                    border: 1px solid $mainButtonColor;
                    border-radius: 1px;
                    color: $mainWhite;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    font-size: 0.875em;
                    background-color: $mainButtonColor;
                    padding: 0;
                    outline: none;
                    margin-top: 50px;
                }
            }
            .page-label {
                font-family: "PoppinsMedium", "Arial", sans-serif;
                left: 60px;
                position: absolute;
                height: 50.1851%;
                @include flex-column-nowrap;
                justify-content: flex-end;
                align-items: center;
                width: 13px;
                span,
                hr {
                    transform: rotate(-90deg);
                }
                span {
                    order: 1;
                    letter-spacing: 5px;
                }
                hr {
                    width: 60px;
                    size: 2px;
                    border-color: $greyTextColor;
                    margin: 0;
                    margin-bottom: 72px;
                }
            }
        }
    }
    .models-container {
        width: 33.8021%;
        @include flex-column-nowrap;
        .photos-slider {
            height: 50.1851%;
            width: 100%;
            margin-top: 25vh;
            position: relative;
            overflow: hidden;
            .wrapper {
                position: absolute;
                width: 100%;
                height: 400%;
                transition: 0.7s linear;
                @include flex-column-nowrap;
                .model-photo {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .description-slider {
            height: 202px;
            width: 100%;
            position: relative;
            overflow: hidden;
            .wrapper {
                width: 400%;
                height: 100%;
                position: absolute;
                @include flex-row-nowrap;
                transition: 0.7s linear;
                .model-description {
                    width: 100%;
                    height: 100%;
                    background-color: $descriptionBackground;
                    @include flex-column-nowrap;
                    justify-content: center;
                    .description {
                        padding-left: 125px;
                        font-family: "NunitoExtraBold", Arial, sans-serif;
                        font-size: 0.75em;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    .name {
                        font-family: "PoppinsMedium", Arial, sans-serif;
                        font-size: 2.625em;
                        padding-left: 125px;
                    }
                }
            }
            .nav {
                position: absolute;
                width: 115px;
                height: 100%;
                right: 0;
                background-color: $mainWhite;
                @include flex-column-nowrap;
                justify-content: center;
                button {
                    align-self: center;
                    padding: 20px;
                    background: none;
                    border: none;
                    outline: none;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
