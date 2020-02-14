<template>
    <section class="news-section">
        <div class="featured-news-wrapper">
            <div class="featured-news-slider">
                <div
                    v-for="(fNews, index) in news.featuredNews"
                    :key="index"
                    class="featured-news"
                    :style="{
                        backgroundImage: `url(${fNews.photo})`,
                        left: `${(activeFeaturedNewsIndex - index) * 100}%`,
                        backgroundSize: 'cover'
                    }"
                >
                    <div class="featured-news-info">
                        <div class="label">Featured news</div>
                        <div class="header">
                            {{ fNews.text }}
                            <hr />
                        </div>
                    </div>
                </div>
                <div class="news-controls">
                    <div class="navs">
                        <button
                            v-if="activeFeaturedNewsIndex > 0"
                            @click="activeFeaturedNewsIndex--"
                        >
                            <img
                                src="../assets/img/arrow_down_white.svg"
                                alt="Active arrow left"
                                width="25"
                            />
                        </button>
                        <button v-if="activeFeaturedNewsIndex === 0">
                            <img
                                src="../assets/img/arrow_down_grey.svg"
                                alt="Inactive arrow left"
                                width="25"
                            />
                        </button>

                        <button
                            v-if="activeFeaturedNewsIndex !== news.featuredNews.length - 1"
                            @click="activeFeaturedNewsIndex++"
                        >
                            <img
                                src="../assets/img/arrow_up_white.svg"
                                alt="Active arrow right"
                                width="25"
                            />
                        </button>
                        <button v-if="activeFeaturedNewsIndex === news.featuredNews.length - 1">
                            <img
                                src="../assets/img/arrow_up_grey.svg"
                                alt="Inactive arrow right"
                                width="25"
                            />
                        </button>
                    </div>
                    <button class="read-button">
                        <span>Read more</span>
                        <div class="arrow">
                            <img src="../assets/img/arrow_up.svg" alt="Arrow icon" width="18" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="other-news-wrapper">
            <div class="recent-news">
                <div class="left-part">
                    <news-slider :news-for-slider="news.newsSlider" />
                </div>
                <div class="right-part">
                    <div v-for="hNews in news.hotNews.slice(0, 4)" :key="hNews.id" class="hot-news">
                        <div
                            :style="{
                                background: `no-repeat url(${hNews.photo})`,
                                backkgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }"
                            class="photo"
                        />
                        <div class="info">
                            <a :href="hNews.link" class="text">{{ reduceNewsText(hNews.text, 35) }}</a>
                            <div class="date">{{ hNews.date }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-news"></div>
            <div class="all-news"></div>
        </div>
    </section>
</template>

<script>
import NewsSlider from "./RecentNewsSlider.vue";

export default {
    name: "NewsComponent",
    components: {
        NewsSlider
    },
    props: {
        news: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeFeaturedNewsIndex: 0
        };
    },
    methods: {
        reduceNewsText(text, length) {
            return text.length > length
                ? `${text.substring(0, length)}...`
                : text;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.news-section {
    @include flex-row-wrap;
    justify-content: space-between;
    margin-right: 100px;
    // @include screen-767 {
    //     margin-right: 0;
    // }
    // @include screen-768-1279 {
    //     margin-right: 20px;
    // }
    @include screen-1279 {
        margin-right: 0;
    }
    .featured-news-wrapper {
        // width: 41.0416%;
        width: 42.549%;
        height: 56.25vw;
        min-height: 568px;
        max-height: 1080px;
        margin-top: -193px;
        @include screen-1279 {
            width: 100%;
            max-width: 768px;
        }
        @include screen-1779 {
            margin-top: 0;
        }
        .featured-news-slider {
            height: 100%;
            overflow: hidden;
            position: relative;
            .featured-news {
                width: 100%;
                height: 100%;
                position: absolute;
                transition: left 0.7s linear;
                @include flex-column-nowrap;
                justify-content: flex-end;
                .featured-news-info {
                    width: 100%;
                    height: 261px;
                    padding-bottom: 110px;
                    @include flex-column-nowrap;
                    justify-content: center;
                    color: $mainWhite;
                    position: relative;
                    @include screen-767 {
                        padding-bottom: 140px;
                        height: calc(100% - 140px);
                    }
                    .label {
                        font-family: "NunitoExtraBold", Arial, sans-serif;
                        font-size: 0.875em;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        padding-left: 7.9166vw;
                        @include screen-min-1920 {
                            padding-left: 152px;
                        }
                    }
                    .header {
                        font-family: "PoppinsMedium", Arial, sans-serif;
                        font-size: 2.5em;
                        width: 60%;
                        padding-left: 7.9166vw;
                        position: relative;
                        @include screen-1280-1779 {
                            font-size: 2.0833vw;
                        }
                        @include screen-min-1920 {
                            padding-left: 152px;
                        }
                        hr {
                            position: absolute;
                            border: none;
                            background-color: $mainWhite;
                            height: 6px;
                            width: 5.4687vw;
                            top: 50%;
                            left: 100%;
                            margin: 0;
                            @include screen-1279 {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .news-controls {
            position: absolute;
            bottom: 0;
            width: 100%;
            @include flex-row-wrap;
            height: 110px;
            @include screen-767 {
                height: auto;
            }
            .navs {
                width: 50%;
                @include flex-row-nowrap;
                justify-content: center;
                @include screen-767 {
                    width: 100%;
                    order: 2;
                    height: 70px;
                }
                button {
                    background: none;
                    border: none;
                    outline: none;
                    display: block;
                    &:first-child {
                        text-align: right;
                        padding-right: 35px;
                    }
                    &:last-child {
                        text-align: left;
                        padding-left: 35px;
                    }
                    img {
                        transform: rotate(90deg);
                        @include screen-767 {
                            width: 30px;
                        }
                    }
                }
            }
            .read-button {
                width: 50%;
                background-color: $mainWhite;
                border: none;
                outline: none;
                padding: 0;
                @include flex-row-nowrap;
                justify-content: space-between;
                font-family: "NunitoExtraBold", Arial, sans-serif;
                font-size: 0.875em;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                @include screen-767 {
                    width: 270px;
                    height: 70px;
                    order: 1;
                }
                &:hover {
                    cursor: pointer;
                }

                span {
                    width: calc(100% - 110px);
                    align-self: center;
                    @include screen-767 {
                        width: 100%;
                    }
                }
                .arrow {
                    align-self: center;
                    width: 5.7291vw;
                    @include screen-767 {
                        padding-right: 25px;
                        padding-top: 5px;
                    }
                    img {
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
    .other-news-wrapper {
        // width: 49.5833%;
        width: 52.743%;
        @include flex-column-nowrap;
        @include screen-1279 {
            width: 100%;
        }
        .recent-news {
            @include flex-row-wrap;
            justify-content: space-between;
            width: 100%;
            @include screen-767 {
                flex-direction: column;
            }
            @include screen-1279 {
                width: calc(100% - 40px);
                margin: 50px 20px 0;
                justify-content: flex-end;
            }
            .left-part {
                width: calc(50% - 25px);
                max-width: 451px;
                height: 741px;
                @include screen-767 {
                    width: 100%;
                    align-self: center;
                    margin-right: 0;
                    min-height: 520px;
                    max-height: 741px;
                    height: 160vw;
                }
                @include screen-768-999 {
                    height: 741px;
                    width: calc(60% - 25px);
                }
                @include screen-768-1279 {
                    margin-right: 50px;
                }
                @include screen-1280-1599 {
                    height: 46.342vw;
                    width: calc(60% - 25px);
                }
                img {
                    height: 604px;
                }
            }
            .right-part {
                width: calc(50% - 25px);
                height: 741px;
                max-width: 451px;
                @include flex-column-nowrap;
                justify-content: space-between;
                @include screen-459 {
                    height: fit-content;
                }
                @include screen-767 {
                    width: fit-content;
                    align-self: center;
                    margin-top: 50px;
                }
                @include screen-768-999 {
                    width: 180px;
                    height: fit-content;
                }
                @include screen-1280-1599 {
                    width: calc(40% - 25px);
                    height: fit-content;
                }
                .hot-news {
                    @include flex-row-nowrap;
                    justify-content: space-between;
                    height: 18.8933%;
                    @include screen-459 {
                        height: fit-content;
                        flex-direction: column;
                        &:not(:last-child) {
                            margin-bottom: 50px;
                        }
                    }
                    @include screen-768-999 {
                        height: fit-content;
                        flex-direction: column;
                        &:not(:last-child) {
                            margin-bottom: 50px;
                        }
                    }
                    @include screen-1280-1599 {
                        height: fit-content;
                        flex-direction: column;
                        &:not(:last-child) {
                            margin-bottom: 50px;
                        }
                    }
                    .photo {
                        // width: 180px;
                        width: 39.9113%;
                        height: 100%;
                        @include screen-459 {
                            width: 100%;
                            height: 140px;
                            max-width: 180px;
                        }
                        @include screen-768-999 {
                            width: 100%;
                            height: 140px;
                            max-width: 180px;
                        }
                        @include screen-1280-1599 {
                            width: 100%;
                            height: 140px;
                            max-width: 180px;
                        }
                    }
                    .info {
                        // width: 230px;
                        width: 51%;
                        @include flex-column-nowrap;
                        justify-content: space-between;
                        @include screen-459 {
                            width: 100%;
                        }
                        @include screen-768-999 {
                            width: 100%;
                        }
                        @include screen-1280-1599 {
                            width: 100%;
                        }
                        .text {
                            font-family: "PoppinsMedium", Arial, sans-serif;
                            font-size: 1.5em;
                            text-decoration: none;
                            color: $textColor;
                            &:hover {
                                color: $hoveredLink;
                            }
                        }
                        .date {
                            font-family: "NunitoRegular", Arial, sans-serif;
                            color: $greyTextColor;
                        }
                    }
                }
            }
        }
        .main-news {
        }
        .all-news {
        }
    }
}
</style>
