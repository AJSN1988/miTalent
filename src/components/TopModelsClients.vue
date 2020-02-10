<template>
    <section class="top-model-clients-section">
        <div class="model-wrapper">
            <div class="info-part">
                <div class="labels-container">
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
                    <div class="page-label">
                        <span>{{ activeModelObject.id }}</span>
                        <hr />
                    </div>
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
        </div>

        <!-- <div class="stuck-info-containter">
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
        </div>-->
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

            this.activeModelObject = this.$props.models[this.activeModelId];

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
    max-height: 1080px;
    @include screen-min-1280 {
        min-height: 720px;
    }
    height: 100vh;
    margin-top: -181px;
    @include screen-767 {
        max-height: initial;
        height: 100%;
        flex-direction: column;
        padding-bottom: 240px;
    }
    @include screen-1279 {
        margin-top: -99px;
    }
    position: relative;
    @include screen-h-1023 {
        min-height: 988px;
    }
    @include screen-min-h-1200 {
        height: 1080px;
    }
    background: rgb(181, 212, 212);
    background: linear-gradient(
        280deg,
        rgba(181, 212, 212, 1) 50%,
        rgba(216, 230, 230, 1) 86%
    );
    background-size: 59.8958%;
    @include screen-1279 {
        background-size: 100%;
    }
    background-repeat: no-repeat;
    background-position: left;
    .model-wrapper {
        margin: auto;
        width: 100%;
        @include flex-row-nowrap;
        @include screen-min-1280 {
            height: 50.185%;
            max-height: 542px;
            min-height: 380px;
        }
        @include screen-1279 {
            // margin: 123px 0;
            margin: 123px 0 0;
            flex-wrap: wrap;
        }
        .info-part {
            width: 59.8958%;
            @include flex-row-nowrap;
            @include screen-767 {
                width: 100%;
                flex-direction: column-reverse;
                justify-content: flex-end;
            }
            @include screen-768-1279 {
                height: 400px;
                width: fit-content;
                margin-right: 0;
            }
            .labels-container {
                @include flex-column-nowrap;
                justify-content: space-between;
                width: 178px;
                margin-left: 61px;
                @include screen-767 {
                    width: 100%;
                    width: calc(100% - 40px);
                    margin: 20px;
                    flex-direction: row;
                    justify-content: space-between;
                    height: fit-content;
                }
                @include screen-768-1279 {
                    margin-left: 20px;
                    width: 36px;
                }
                .socials {
                    width: 16px;
                    z-index: 1;
                    @include screen-767 {
                        width: auto;
                        align-self: center;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        @include screen-767 {
                            @include flex-row-nowrap;
                        }
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
                                @include screen-767 {
                                    margin-right: 6.5vw;
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }
                .page-label {
                    font-family: "PoppinsMedium", "Arial", sans-serif;
                    @include flex-column-nowrap;
                    justify-content: flex-end;
                    @include screen-767 {
                        @include flex-row-nowrap;
                        width: auto;
                    }
                    align-items: center;
                    width: 13px;
                    span,
                    hr {
                        transform: rotate(-90deg);
                        @include screen-767 {
                            transform: rotate(0);
                        }
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
                        @include screen-767 {
                            margin-bottom: 0;
                            margin-right: 5.2151vw;
                        }
                    }
                }
            }
            .info-container {
                width: calc(100% - 239px);
                background-color: $mainWhite;
                @include flex-column-nowrap;
                justify-content: center;
                @include screen-767 {
                    width: calc(100% - 40px);
                    padding: 40px 20px;
                }
                @include screen-768-1279 {
                    width: 692px;
                }
                .info,
                button {
                    @include screen-767 {
                        align-self: center;
                    }
                }
                .info {
                    @include screen-599 {
                        text-align: center;
                    }
                    @include screen-768-1279 {
                        margin-left: 71px;
                    }
                    @include screen-min-1280 {
                        margin-left: 15.9165%;
                    }
                    position: relative;
                    width: fit-content;
                    .header {
                        span {
                            font-family: "PoppinsRegular", Arial, sans-serif;
                            font-size: 6.25em;
                            @include screen-767 {
                                font-size: 13.1681vw;
                            }
                            @include screen-1280-1919 {
                                font-size: 5.2604vw;
                            }
                        }
                    }
                    .annotation {
                        font-family: "NunitoSemiBold", Arial, sans-serif;
                        font-size: 1.0625em;
                        @include screen-599 {
                            text-align: center;
                        }
                        @include screen-1280-1919 {
                            font-size: 0.8854vw;
                        }
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
                        @include screen-599 {
                            display: none;
                        }
                    }
                }
                button {
                    @include screen-768-1279 {
                        margin-left: 71px;
                        width: 150px;
                    }
                    @include screen-min-1280 {
                        margin-left: 15.9165%;
                    }
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
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
        .models-container {
            width: 33.8021%;
            @include flex-column-nowrap;
            position: relative;
            @include screen-767 {
                width: 100%;
                height: 100vw;
                max-height: 542px;
            }
            @include screen-768-1279 {
                margin-right: 20px;
                position: absolute;
                right: 0;
                top: 400px;
                min-width: 400px;
                height: 350px;
                width: calc(100% - 708px);
            }
            .photos-slider {
                height: 100%;
                width: 100%;
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
                height: 10.5208vw;
                max-height: 202px;
                width: 100%;
                position: absolute;
                overflow: hidden;
                top: 100%;
                @include screen-767 {
                    max-height: 220px;
                    height: 220px;
                    @include flex-column-nowrap;
                }
                @include screen-768-1279 {
                    height: 150px;
                }
                .wrapper {
                    width: 400%;
                    height: 100%;
                    position: absolute;
                    @include flex-row-nowrap;
                    transition: 0.7s linear;
                    @include screen-767 {
                        height: 150px;
                    }
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
                            @include screen-767 {
                                font-size: 2em;
                            }
                            @include screen-768-1279 {
                                font-size: 3.2832vw;
                            }
                            padding-left: 125px;
                        }
                        .description,
                        .name {
                            @include screen-767 {
                                padding-left: 20px;
                            }
                            @include screen-768-1279 {
                                padding-left: 15px;
                            }
                            @include screen-1280-1919 {
                                padding-left: 20px;
                            }
                        }
                    }
                }
                .nav {
                    position: absolute;
                    height: 100%;
                    @include screen-767 {
                        position: relative;
                        height: 70px;
                        width: 150px;
                        margin-top: 150px;
                        margin-left: 0;
                        @include flex-row-nowrap;
                        justify-content: space-evenly;
                    }
                    @include screen-min-1280 {
                        width: 5.9895vw;
                        max-width: 115px;
                    }
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
                        @include screen-767 {
                            padding: 15px;
                            transform: rotate(-90deg);
                        }
                        &:hover {
                            cursor: pointer;
                        }
                        img {
                            @include screen-767 {
                                width: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
