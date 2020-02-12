
<template>
    <section class="latest-news-section">
        <div class="label">Latest news</div>
        <hr />
        <!-- <div class="top-3-news-wrapper">
            <div v-for="topNews in news.hotNews" :key="topNews.id" class="top-3-news">
                <div class="photo">
                    <img :src="topNews.photo" :alt="`Top 3 news ${topNews.id} photo`" />
                </div>
                <div class="description">
                    <a :href="topNews.link">{{ topNews.text }}</a>
                    <div class="date">{{ topNews.date }}</div>
                </div>
            </div>
        </div>-->
        <hot-news :news="news.hotNews.slice(0, 3)" />
        <div class="tiled-news-wrapper">
            <div class="left-part">
                <div class="main-news">
                    <div class="description">
                        <a :href="news.mainNews.link">
                            <img src="../assets/img/play.svg" alt="Play button logo" width="32" />
                        </a>
                        <div class="text">{{ news.mainNews.text }}</div>
                        <div class="date">{{ news.mainNews.date }}</div>
                    </div>
                    <div class="photo">
                        <img :src="news.mainNews.photo" alt="Main news photo" />
                    </div>
                    <div class="static-label">Trending</div>
                </div>
                <div class="bottom-container">
                    <div class="regular-news">
                        <div class="photo">
                            <img :src="news.regularNews.photo" alt="Regular news photo" />
                        </div>
                        <div class="description">
                            <div class="text">
                                <a :href="news.regularNews.link">{{ news.regularNews.text }}</a>
                            </div>
                            <div class="date">{{ news.regularNews.date }}</div>
                        </div>
                    </div>
                    <div class="video-news-slider">
                        <video-news-slider :previews="news.videoNewsSlider" />
                    </div>
                </div>
            </div>
            <div class="right-part">
                <div class="news-slider">
                    <news-slider :news-for-slider="news.newsSlider" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HotNews from "./HotNews.vue";
import NewsSlider from "./LatestNewsSlider.vue";
import VideoNewsSlider from "./VideoNewsSlider.vue";

export default {
    name: "LatestNewsComponent",
    components: {
        HotNews,
        NewsSlider,
        VideoNewsSlider
    },
    props: {
        news: {
            type: Object,
            required: true
        }
    }
    // mounted() {
    //     // Reduce all top 3 news headers if need it
    //     document
    //         .querySelectorAll(".top-3-news .description a")
    //         .forEach(el => this.reduceNewsText(el, 50));
    // },
    // methods: {
    //     reduceNewsText(element, count) {
    //         const el = element;
    //         const text = el.innerHTML;
    //         if (text.length > count) {
    //             el.innerHTML = `${text.substring(0, count)} ...`;
    //         }
    //     }
    // }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.latest-news-section {
    margin-top: 120px;
    .label {
        font-family: "PoppinsRegular", Arial, sans-serif;
        font-size: 3.75rem;
        text-align: center;
    }
    hr {
        margin-top: 35px;
        margin-left: auto;
        margin-bottom: 69px;
        width: 150px;
        border: none;
        height: 2px;
        background-color: $textColor;
    }
    // .top-3-news-wrapper {
    //     margin: 0 120px;
    //     @include screen-1279 {
    //         margin: 0 20px;
    //     }
    //     @include flex-row-wrap;
    //     justify-content: space-between;
    //     .top-3-news {
    //         width: 33.333%;
    //         min-width: 300px;
    //         @include flex-row-nowrap;
    //         @include screen-999 {
    //             width: 100%;
    //             flex-wrap: nowrap;
    //             &:not(:last-child) {
    //                 margin-bottom: 20px;
    //             }
    //         }
    //         @include screen-1000-1919 {
    //             flex-wrap: wrap;
    //         }
    //         .photo {
    //             img {
    //                 @include screen-999 {
    //                     padding-top: 10px;
    //                 }
    //                 @include screen-1919 {
    //                     width: 95%;
    //                 }
    //             }
    //         }
    //         .description {
    //             padding: 0 43px;
    //             @include screen-1919 {
    //                 padding: 0;
    //             }
    //             width: 100%;
    //             flex-grow: 1;
    //             @include flex-column-nowrap;
    //             justify-content: space-between;
    //             @include screen-1000-1919 {
    //                 justify-content: flex-end;
    //             }
    //             a {
    //                 font-family: "PoppinsMedium", Arial, sans-serif;
    //                 font-size: 1.5em;
    //                 text-decoration: none;
    //                 color: $textColor;
    //                 &:hover {
    //                     color: $hoveredLink;
    //                 }
    //                 @include screen-999 {
    //                 }
    //                 @include screen-1000-1919 {
    //                     margin: 20px 10px 20px 0;
    //                 }
    //             }
    //             .date {
    //                 font-family: "NunitoRegular", Arial, sans-serif;
    //                 color: $greyTextColor;
    //             }
    //         }
    //     }
    // }
    .tiled-news-wrapper {
        margin: 0 120px;
        @include screen-1279 {
            margin: 50px 20px 0;
        }
        @include flex-row-wrap;
        justify-content: space-between;
        .left-part {
            width: calc(66.666% - 25px);
            max-width: 1104px;
            @include flex-column-nowrap;
            @include screen-999 {
                width: 100%;
            }
            .main-news {
                max-height: 520px;
                @include flex-row-nowrap;
                @include screen-767 {
                    flex-direction: column;
                    max-height: initial;
                }
                position: relative;
                .description {
                    width: 27%;
                    @include screen-767 {
                        width: 100%;
                        padding: 0;
                        justify-content: center;
                    }
                    padding: 3vw;
                    @include flex-column-nowrap;
                    justify-content: flex-end;
                    background: rgb(181, 212, 212);
                    background: linear-gradient(
                        0deg,
                        rgba(181, 212, 212, 1) 50%,
                        rgba(216, 230, 230, 1) 86%
                    );
                    color: $mainWhite;
                    a {
                        transition: 0.5s ease-in;
                        padding: 2.8vw 0;
                        @include screen-767 {
                            padding: 20px;
                        }
                    }
                    .text {
                        font-family: "PoppinsMedium", Arial, sans-serif;
                        font-size: 1.5625vw;
                        padding-bottom: 38px;
                        @include screen-767 {
                            padding: 0 20px 20px;
                        }
                        @include screen-999 {
                            font-size: 1.875em;
                        }
                        @include screen-min-1920 {
                            font-size: 1.875em;
                        }
                    }
                    .date {
                        font-family: "NunitoExtraBold", Arial, sans-serif;
                        @include screen-767 {
                            padding: 0 20px 20px;
                        }
                    }
                }
                .photo {
                    width: 73%;
                    @include screen-767 {
                        width: 100%;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .static-label {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    background-color: $mainWhite;
                    padding: 1.1979vw 3.0208vw;
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    text-transform: uppercase;
                    font-size: 0.875em;
                    @include screen-min-1920 {
                        padding: 23px 58px;
                    }
                }
            }
            .bottom-container {
                padding-top: 50px;
                @include flex-row-wrap;
                justify-content: space-between;
                @include screen-999 {
                    padding-top: 20px;
                }
                .regular-news {
                    width: calc(50% - 25px);
                    @include flex-column-nowrap;
                    @include screen-767 {
                        width: 100%;
                    }
                    @include screen-768-999 {
                        width: calc(50% - 10px);
                    }
                    .photo {
                        max-height: 286px;
                        height: 14.8958vw;
                        @include screen-999 {
                            height: auto;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .description {
                        height: 7.0833vw;
                        @include flex-column-nowrap;
                        justify-content: space-between;
                        @include screen-999 {
                            height: initial;
                        }
                        @include screen-min-1920 {
                            height: 136px;
                        }
                        .text {
                            font-family: "PoppinsMedium", Arial, sans-serif;
                            color: $textColor;
                            font-size: 1.25vw;
                            @include flex-column-nowrap;
                            justify-content: center;
                            height: 100%;
                            @include screen-999 {
                                font-size: 1.5em;
                            }
                            @include screen-min-1920 {
                                font-size: 1.5em;
                            }
                            a {
                                color: $textColor;
                                text-decoration: none;
                                &:hover {
                                    color: $hoveredLink;
                                }
                            }
                        }
                        .date {
                            font-family: "NunitoRegular", Arial, sans-serif;
                            color: $greyTextColor;
                        }
                    }
                }
                .video-news-slider {
                    width: calc(50% - 25px);
                    @include screen-767 {
                        width: 100%;
                        padding-top: 20px;
                    }
                    @include screen-768-999 {
                        width: calc(50% - 10px);
                    }
                }
            }
        }
        .right-part {
            width: calc(33.333% - 25px);
            max-width: 526px;
            max-height: 992px;
            @include screen-459 {
                width: 100%;
            }
            @include screen-460-767 {
                width: calc(75% - 10px);
            }
            @include screen-768-999 {
                width: calc(50% - 10px);
            }
            @include screen-999 {
                padding-top: 20px;
                max-width: initial;
            }
            .news-slider {
                height: 100%;
                @include screen-459 {
                    height: 182vw;
                }
                @include screen-460-767 {
                    height: 153vw;
                }
                @include screen-768-999 {
                    height: 87vw;
                }
            }
        }
    }
}
</style>
