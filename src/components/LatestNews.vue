
<template>
    <section class="latest-new-section">
        <div class="label">Latest news</div>
        <hr />
        <div class="top-3-news-wrapper">
            <div v-for="topNews in news.topThree" :key="topNews.id" class="top-3-news">
                <div class="photo">
                    <img :src="topNews.photo" :alt="`Top 3 news ${topNews.id} photo`" />
                </div>
                <div class="description">
                    <a :href="topNews.link">{{ topNews.text }}</a>
                    <div class="date">{{ topNews.date }}</div>
                </div>
            </div>
        </div>
        <div class="tiled-news-wrapper">
            <div class="tiles-grid">
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
                <div class="news-slider">
                    <news-slider :news-for-slider="news.newsSlider" />
                </div>
                <div class="regular-news">
                    <div class="photo">
                        <img :src="news.regularNews.photo" alt="Regular news photo" />
                    </div>
                    <div class="description">
                        <div class="text">{{ news.regularNews.text }}</div>
                        <div class="date">{{ news.regularNews.date }}</div>
                    </div>
                </div>
                <div class="video-news-slider">
                    <video-news-slider :previews="news.videoNewsSlider" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NewsSlider from "./LatestNewsSlider.vue";
import VideoNewsSlider from "./VideoNewsSlider.vue";

export default {
    name: "LatestNewsComponent",
    components: {
        NewsSlider,
        VideoNewsSlider
    },
    props: {
        news: {
            type: Object,
            required: true
        }
    },
    mounted() {
        // Reduce all top 3 news headers if need it
        document
            .querySelectorAll(".top-3-news .description a")
            .forEach(el => this.reduceNewsText(el, 50));
    },
    methods: {
        reduceNewsText(element, count) {
            const el = element;
            const text = el.innerHTML;
            if (text.length > count) {
                el.innerHTML = `${text.substring(0, count)} ...`;
            }
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.latest-new-section {
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
    .top-3-news-wrapper {
        margin: 0 120px;
        @include screen-1279 {
            margin: 0 20px;
        }
        @include flex-row-wrap;
        justify-content: space-between;
        .top-3-news {
            width: 33.333%;
            // height: 139px;
            min-width: 300px;
            @include flex-row-nowrap;
            @include screen-999 {
                width: 100%;
                flex-wrap: nowrap;
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }
            @include screen-1000-1919 {
                flex-wrap: wrap;
            }
            .photo {
                // width: 200px;
                img {
                    @include screen-999 {
                        padding-top: 10px;
                    }
                    @include screen-1919 {
                        width: 95%;
                    }
                }
            }
            .description {
                padding: 0 43px;
                @include screen-1919 {
                    padding: 0;
                }
                width: 100%;
                flex-grow: 1;
                @include flex-column-nowrap;
                justify-content: space-between;
                @include screen-1000-1919 {
                    justify-content: flex-end;
                }
                a {
                    font-family: "PoppinsMedium", Arial, sans-serif;
                    font-size: 1.5em;
                    text-decoration: none;
                    &:visited {
                        color: $textColor;
                    }
                    &:hover {
                        color: $hoveredLink;
                    }
                    @include screen-999 {
                    }
                    @include screen-1000-1919 {
                        margin: 20px 10px 20px 0;
                    }
                }
                .date {
                    font-family: "NunitoRegular", Arial, sans-serif;
                    color: $greyTextColor;
                }
            }
        }
    }
    .tiled-news-wrapper {
        margin: 50px 120px 0;
        .tiles-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 50px;
        }
    }
}
</style>
