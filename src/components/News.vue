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
                        <!-- <hr /> -->
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
                    <button>
                        <span>Read more</span>
                        <div class="arrow">
                            <img src="../assets/img/arrow_up.svg" alt="Arrow icon" width="18" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="other-news-wrapper"></div>
    </section>
</template>

<script>
export default {
    name: "NewsComponent",
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
        width: 41.0416%;
        height: 56.25vw;
        min-height: 900px;
        max-height: 1080px;
        margin-top: -181px;
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
                        }
                    }
                }
            }
        }
        .news-controls {
            position: absolute;
            bottom: 0;
            width: 100%;
            @include flex-row-nowrap;
            height: 110px;
            .navs {
                width: 50%;
                @include flex-row-nowrap;
                justify-content: center;
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
                    }
                }
            }
            button {
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
                &:hover {
                    cursor: pointer;
                }
                span {
                    width: calc(100% - 110px);
                    align-self: center;
                }
                .arrow {
                    align-self: center;
                    width: 5.7291vw;
                    img {
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
    .other-news-wrapper {
        width: 49.5833%;
        @include screen-1279 {
            width: 100%;
        }
    }
}
</style>
