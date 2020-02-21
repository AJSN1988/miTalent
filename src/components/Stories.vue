<template>
    <section
        class="stories-section"
        :style="{
            background: `url('./static/stories/1_mbg.png')`,
            backgroundSize: '75%' ,
            backgroundPosition: 'right 0% top 0%',
            backgroundRepeat: 'no-repeat' }"
    >
        <div class="stories-wrapper">
            <div class="left-empty" />
            <div class="stories">
                <div class="content">
                    <div class="header-and-socials">
                        <div class="header-wrapper">
                            <div class="header">Social connections</div>
                            <div class="sub-header">On Twitter</div>
                        </div>
                        <div class="socials">
                            <ul>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial('http://facebook.com')"
                                >
                                    <img
                                        src="../assets/img/facebook_white.svg"
                                        alt="Facebook social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/facebook.svg"
                                        alt="Facebook hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial('http://instagramm.com')"
                                >
                                    <img
                                        src="../assets/img/instagram_white.svg"
                                        alt="Instagram social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/instagram.svg"
                                        alt="Instagram hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial('http://youtube.com')"
                                >
                                    <img
                                        src="../assets/img/youtube_white.svg"
                                        alt="Youtube social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/youtube.svg"
                                        alt="Youtube hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                                <li
                                    role="link"
                                    @mouseenter="toggleSocialColor($event)"
                                    @mouseleave="toggleSocialColor($event)"
                                    @click="goToModelSocial('http://twitter.com')"
                                >
                                    <img
                                        src="../assets/img/twitter_white.svg"
                                        alt="Twitter social icon"
                                        width="16"
                                    />
                                    <img
                                        src="../assets/img/twitter.svg"
                                        alt="Twitter hovered social icon"
                                        width="16"
                                        class="hovered"
                                    />
                                </li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div class="text-content">
                        <div class="slider-nav">
                            <button>
                                <img
                                    v-if="activeStoryId > 0"
                                    src="../assets/img/arrow_up.svg"
                                    alt="Arrow left icon"
                                    width="18"
                                    @click="activeStoryId--"
                                />
                                <img
                                    v-if="activeStoryId === 0"
                                    src="../assets/img/arrow_up_grey.svg"
                                    alt="Inactive arrow left icon"
                                    width="18"
                                />
                            </button>
                            <button>
                                <img
                                    v-if="activeStoryId < stories.length - 1"
                                    src="../assets/img/arrow_down.svg"
                                    alt="Arrow right icon"
                                    width="18"
                                    @click="activeStoryId++"
                                />
                                <img
                                    v-if="activeStoryId === stories.length - 1"
                                    src="../assets/img/arrow_down_grey.svg"
                                    alt="Inactive arrow right icon"
                                    width="18"
                                />
                            </button>
                        </div>
                        <div class="story-slider">
                            <div
                                v-for="(story, index) in stories"
                                :key="index"
                                :style="{ top: `${(index - activeStoryId) * 100}%` }"
                                class="story"
                            />
                        </div>
                        <div class="link">
                            <button>
                                <img src="../assets/img/play.svg" alt="Play button icon" width="34" />
                            </button>
                            <div class="info">
                                <div class="text">Mass empressions</div>
                                <a href="http://twitter.com">on Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="tail"
                :style="{
                    background: `url('./static/stories/1_smbg.png')`
                }"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: "StoriesComponent",
    props: {
        stories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeStoryId: 0
        };
    },
    mounted() {
        const sliderItems = document.querySelectorAll(".story");
        sliderItems.forEach((el, id) => {
            this.prepareStoryText(id, el);
        });
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
        prepareStoryText(id, element) {
            const innerText = this.$props.stories[id].text;
            element.innerHTML = innerText;
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";
.stories-section {
    margin-top: 119px;
    @include flex-row-nowrap;
    height: 1080px;
    @include flex-column-nowrap;
    justify-content: flex-end;
    @include screen-459 {
        height: 1300px;
    }
    @include screen-767 {
        background-size: 100% !important;
        position: relative;
    }
    @include screen-460-767 {
        height: 1456px;
    }
    .stories-wrapper {
        height: 811px;
        position: relative;
        @include flex-row-nowrap;
        @include screen-767 {
            position: absolute;
            top: 50vw;
            width: 100%;
        }
        .left-empty {
            background-color: $storyBackground1;
            width: 61px;
            height: 722px;
            align-self: flex-end;
            @include screen-1279 {
                width: 20px;
            }
        }
        .stories {
            width: calc(100% - 61px);
            height: 100%;
            @include flex-row-nowrap;
            @include screen-1279 {
                width: calc(100% - 20px);
            }
            .content {
                width: 100%;
                flex-grow: 1;
                @include flex-column-nowrap;
                .header-and-socials {
                    height: 450px;
                    width: 100%;
                    @include flex-row-nowrap;
                    .header-wrapper {
                        width: calc(100% - 479px);
                        @include screen-1279 {
                            width: calc(100% - 56px);
                        }
                        .header {
                            font-family: "PoppinsRegular", "Arial", sans-serif;
                            font-size: 6.25em;
                            width: 200px;
                            line-height: 1;
                            padding: 89px 0 67px 176px;
                            @include screen-767 {
                                font-size: 11vw;
                                padding: 85px 0 0 20px;
                            }
                            @include screen-768-1279 {
                                padding: 47px 0 67px 20px;
                            }
                            @include screen-1280-1919 {
                                padding: 89px 0 67px 61px;
                            }
                        }
                        .sub-header {
                            font-family: "NunitoSemiBold", "Arial", sans-serif;
                            font-size: 1.0625em;
                            text-transform: uppercase;
                            padding-left: 176px;
                            @include screen-767 {
                                padding: 20px;
                                font-size: 0.875em;
                            }
                            @include screen-768-1279 {
                                padding: 47px 0 67px 20px;
                            }
                            @include screen-1280-1919 {
                                padding-left: 61px;
                            }
                        }
                    }
                    .socials {
                        width: 479px;
                        background: linear-gradient(
                            202deg,
                            rgba(185, 214, 214, 1) 72%,
                            rgba(201, 222, 222, 1) 100%
                        );
                        padding-bottom: 181px;
                        @include flex-column-nowrap;
                        justify-content: flex-end;
                        @include screen-767 {
                            width: 56px;
                            justify-content: flex-start;
                        }
                        @include screen-768-1279 {
                            width: 56px;
                            padding-bottom: 230px;
                        }
                        ul {
                            margin: 0;
                            padding: 0 0 0 74px;
                            list-style: none;
                            @include screen-1279 {
                                padding: 0 0 0 20px;
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
                                    margin-top: 40px;
                                }
                            }
                        }
                    }
                    hr {
                        border: none;
                        background-color: $mainWhite;
                        width: 56px;
                        height: 7px;
                        position: absolute;
                        left: 700px;
                        top: 89px;
                        @include screen-1279 {
                            display: none;
                        }
                    }
                }
                .text-content {
                    width: calc(100% - 176px);
                    height: calc(100% - 450px);
                    background-color: $mainWhite;
                    @include flex-row-nowrap;
                    position: relative;
                    padding-left: 176px;
                    @include screen-767 {
                        padding: 0;
                        width: 100%;
                        margin-top: 260px;
                        flex-wrap: wrap;
                    }
                    @include screen-768-1279 {
                        width: calc(100% - 20px);
                        height: calc(100% - 450px);
                        padding-left: 20px;
                        flex-wrap: wrap;
                    }
                    @include screen-1280-1919 {
                        padding-left: 61px;
                        width: calc(100% - 61px);
                    }
                    .slider-nav {
                        width: 243px;
                        padding-top: 82px;
                        @include screen-767 {
                            padding-top: 20px;
                            width: 100%;
                        }
                        @include screen-768-1279 {
                            position: absolute;
                            padding-top: 0;
                            top: -23px;
                        }
                        @include screen-1280-1919 {
                            width: fit-content;
                            padding-top: 82px;
                            padding-right: 61px;
                        }
                        button {
                            background: none;
                            outline: none;
                            border: none;
                            &:first-child {
                                margin-right: 33px;
                            }
                            &:hover {
                                cursor: pointer;
                            }
                            img {
                                transform: rotate(-90deg);
                                @include screen-767 {
                                    width: 30px;
                                }
                            }
                        }
                    }
                    .story-slider {
                        // width: calc(100% - 243px);
                        width: 565px;
                        position: relative;
                        overflow: hidden;
                        @include screen-767 {
                            width: calc(100% - 20px);
                            height: 100%;
                            height: 250px;
                        }
                        @include screen-768-1279 {
                            width: 408px;
                        }
                        .story {
                            width: 565px;
                            height: 100%;
                            position: absolute;
                            transition: top 0.7s linear;
                            @include flex-column-nowrap;
                            justify-content: center;
                            @include screen-1279 {
                                width: 100%;
                            }
                            .text {
                                // width: 565px;
                                font-family: "PlayfairDisplayRegular", "Arial",
                                    sans-serif;
                                font-size: 1.875em;
                                color: $darkGreytextColor;
                                @include screen-767 {
                                    font-size: 1.5em;
                                }
                                span {
                                    color: $textColor;
                                }
                                a {
                                    color: $lightBlueColor;
                                }
                            }
                        }
                    }
                    .link {
                        // position: absolute;
                        @include flex-row-nowrap;
                        // top: 130px;
                        // left: 632px;
                        height: 75px;
                        padding-top: 120px;
                        padding-left: 106px;
                        @include screen-767 {
                            padding: 0;
                        }
                        @include screen-768-1279 {
                            align-self: center;
                            padding-top: 0;
                            padding-left: 20px;
                        }
                        button {
                            border: 1px solid $textColor;
                            width: 78px;
                            height: 75px;
                            border-radius: 50%;
                            background-color: $textColor;
                            padding: 0;
                            outline: none;
                            &:hover {
                                cursor: pointer;
                            }
                            img {
                                padding-left: 5px;
                            }
                        }
                        .info {
                            align-self: center;
                            margin-left: 34px;
                            font-family: "PoppinsMedium", "Arial", sans-serif;
                            color: $textColor;
                            a {
                                color: $lightBlueColor;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
        .tail {
            width: 320px;
            height: 408px;
            background-color: $storyBackground2;
            position: absolute;
            bottom: 66px;
            right: 0;
            @include screen-767 {
                bottom: initial;
                top: 270px;
            }
            @include screen-768-1279 {
                bottom: 250px;
                width: 300px;
                height: 328px;
            }
            @include screen-1280-1919 {
                bottom: 295px;
            }
        }
    }
}
</style>
