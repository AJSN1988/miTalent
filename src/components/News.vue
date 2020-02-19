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
            <div class="main-news">
                <div
                    :style="{
                        background: `url(${news.mainNews.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                    class="photo"
                />
                <div class="description">
                    <a :href="news.mainNews.link">{{ news.mainNews.text }}</a>
                    <div class="date">{{ news.mainNews.date }}</div>
                </div>
                <div class="static-label">Trending</div>
            </div>
            <div class="all-news-slider">
                <div class="slider-wrapper">
                    <div v-for="(page, index) in newsPages" :key="index" class="page">
                        <div v-if="index === currentNewsPage" class="item-wrapper">
                            <div
                                v-for="(newsItem, itemIndex) in page"
                                :key="itemIndex"
                                class="item"
                            >
                                <div
                                    :style="{
                                        background: `url(${newsItem.photo})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }"
                                    class="photo"
                                />
                                <div class="description">
                                    <a
                                        :href="news.mainNews.link"
                                    >{{ reduceNewsText(newsItem.text, 37) }}</a>
                                    <div class="date">{{ newsItem.date }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button v-if="currentNewsPage === 0" class="prev inactive">
                        <img
                            src="../assets/img/arrow_down_grey.svg"
                            alt="Inactive prev page button icon"
                            width="25"
                        />
                        <span>Prev page</span>
                    </button>
                    <button v-if="currentNewsPage > 0" class="prev" @click="currentNewsPage--">
                        <img
                            src="../assets/img/arrow_down.svg"
                            alt="Prev page button icon"
                            width="25"
                        />
                        <span>Prev page</span>
                    </button>
                    <button v-if="currentNewsPage === newsPages.length - 1" class="next inactive">
                        <span>Next page</span>
                        <img
                            src="../assets/img/arrow_up_grey.svg"
                            alt="Inactive next page button icon"
                            width="25"
                        />
                    </button>
                    <button
                        v-if="currentNewsPage < newsPages.length - 1"
                        class="next"
                        @click="currentNewsPage++"
                    >
                        <span>Next page</span>
                        <img
                            src="../assets/img/arrow_down.svg"
                            alt="Nexts page button icon"
                            width="25"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div class="clients-wrapper">
            <div class="clients-info">
                <div class="clients-header">Our clients</div>
                <div class="description">
                    <div
                        class="text"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur cupiditate unde quidem debitis saepe.</div>
                    <a href="#">
                        <span>Explore more</span>
                        <img src="../assets/img/arrow_up.svg" alt="Arrow icon" width="18" />
                    </a>
                </div>
            </div>
            <div class="clients-list">
                <div
                    v-for="actor in shortActors"
                    :key="actor.uid"
                    class="client"
                    @mouseenter="toggleClientCover($event)"
                    @mouseleave="toggleClientCover($event)"
                >
                    <img :src="actor.photo" :alt="`${actor.name} photo`" />
                    <div class="cover">
                        <div class="link" role="link" @click="goToClientPage(actor.uid)">
                            <img src="../assets/img/diagonal-arrow.svg" alt="Arrow icon" width="14" />
                        </div>
                        <div class="info">
                            <div class="name">{{ actor.name }}</div>
                            <div class="description">{{ actor.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NewsSlider from "./RecentNewsSlider.vue";

import Actors from "../data/actors";

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
            activeFeaturedNewsIndex: 0,
            currentNewsPage: 0,
            newsPages: [],
            shortActors: Actors[0].people.slice(0, 4)
        };
    },
    mounted() {
        // Paginate all news
        for (let i = 0; i < this.news.allNews.length; i += 4) {
            this.newsPages.push(this.news.allNews.slice(i, i + 4));
        }
    },
    methods: {
        reduceNewsText(text, length) {
            return text.length > length
                ? `${text.substring(0, length)}...`
                : text;
        },
        toggleClientCover(e) {
            const element = e.target.querySelector(".cover");
            element.classList.add("hovered");

            if (
                e.type === "mouseleave" &&
                element.classList.contains("hovered")
            ) {
                element.classList.remove("hovered");
            }
        },
        goToClientPage(id) {
            console.log(id);
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
    @include screen-1279 {
        margin-right: 0;
    }
    .featured-news-wrapper {
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
        width: 52.743%;
        margin-bottom: 118px;
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
            // height: 629px;
            max-width: 952px;
            margin-top: 60px;
            position: relative;
            @include screen-1279 {
                margin: 60px 20px 0;
            }
            .photo {
                height: 532px;
                @include screen-999 {
                    height: 53.254vw;
                }
                @include screen-1280-1919 {
                    height: 27.7088vw;
                }
            }
            .description {
                height: 97px;
                @include flex-column-nowrap;
                a {
                    height: 100%;
                    @include flex-column-nowrap;
                    justify-content: center;
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
            .static-label {
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: $mainWhite;
                letter-spacing: 2px;
                padding: 23px 58px;
                font-family: "NunitoExtraBold", Arial, sans-serif;
                text-transform: uppercase;
                font-size: 0.875em;
                @include screen-767 {
                    padding: 3.2% 8.5%;
                }
            }
        }
        .all-news-slider {
            margin-top: 60px;
            @include screen-1279 {
                margin: 60px 20px 0;
            }
            .slider-wrapper {
                width: 100%;
                position: relative;
                .page {
                    .item-wrapper {
                        @include flex-row-wrap;
                        justify-content: space-between;
                        width: 100%;
                        @include screen-599 {
                            justify-content: center;
                        }
                        .item {
                            width: 47.3739%;
                            min-width: 280px;
                            margin-bottom: 58px;
                            .photo {
                                height: 315px;
                                @include screen-459 {
                                    height: 54.375vw;
                                }
                                @include screen-460-767 {
                                    height: 35.407vw;
                                }
                                @include screen-768-999 {
                                    height: 30.407vw;
                                }
                                @include screen-1280-1919 {
                                    height: 16.407vw;
                                }
                            }
                            .description {
                                height: 132px;
                                @include screen-1280-1919 {
                                    height: 6.875vw;
                                }
                                @include flex-column-nowrap;
                                a {
                                    height: 100%;
                                    @include flex-column-nowrap;
                                    justify-content: center;
                                    font-family: "PoppinsMedium", Arial,
                                        sans-serif;
                                    font-size: 1.5em;
                                    text-decoration: none;
                                    color: $textColor;
                                    &:hover {
                                        color: $hoveredLink;
                                    }
                                }
                                .date {
                                    font-family: "NunitoRegular", Arial,
                                        sans-serif;
                                    color: $greyTextColor;
                                }
                            }
                        }
                    }
                }
            }
            .controls {
                @include flex-row-nowrap;
                justify-content: space-between;
                margin-top: 29px;
                button.inactive {
                    &:hover {
                        cursor: default;
                    }
                }
                .inactive {
                    color: $greyTextColor;
                }
                .prev,
                .next {
                    @include flex-row-nowrap;
                    justify-content: space-between;
                    background: none;
                    border: none;
                    outline: none;
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    text-transform: uppercase;
                    font-size: 0.875em;
                    letter-spacing: 2px;
                    &:hover {
                        cursor: pointer;
                    }
                    span,
                    img {
                        align-self: center;
                    }
                }
                .prev {
                    img {
                        transform: rotate(90deg);
                        margin-right: 26px;
                    }
                }
                .next {
                    img {
                        transform: rotate(-90deg);
                        margin-left: 26px;
                    }
                }
            }
        }
    }
    .clients-wrapper {
        width: 100%;
        margin: 0 20px 0 120px;
        @include screen-1279 {
            margin: 0 20px;
        }
        .clients-info {
            margin-bottom: 120px;
            @include flex-row-wrap;
            justify-content: space-between;
            .clients-header {
                margin-left: 120px;
                font-family: "PoppinsRegular", "Arial", sans-serif;
                font-size: 3.75em;
                width: 140px;
                border-bottom: 2px solid $textColor;
                padding-bottom: 30px;
                line-height: 1;
                white-space: nowrap;

                @include screen-999 {
                    margin-bottom: 60px;
                }
                @include screen-1279 {
                    margin-left: 0;
                }
                @include screen-1280-1599 {
                    margin-left: 0;
                }
            }
            .description {
                width: 50%;
                @include flex-column-nowrap;
                justify-content: space-between;
                @include screen-999 {
                    width: 100%;
                }
                .text,
                a > span {
                    margin-left: 141px;
                    @include screen-999 {
                        margin-left: 0;
                    }
                }
                .text {
                    max-width: 566px;
                    font-family: "NunitoRegular", "Arial", sans-serif;
                    color: $greyTextColor;
                    @include screen-999 {
                        margin-left: 0;
                    }
                }
                a {
                    @include flex-row-nowrap;
                    text-decoration: none;
                    @include screen-999 {
                        margin-top: 20px;
                    }
                    span {
                        // margin-left: 141px;
                        font-family: "NunitoExtraBold", "Arial", sans-serif;
                        font-size: 0.75em;
                        text-transform: uppercase;
                        color: $textColor;
                        align-self: center;
                        margin-right: 22px;
                    }
                    img {
                        transform: rotate(90deg);
                        align-self: center;
                    }
                }
            }
        }
        .clients-list {
            @include flex-row-wrap;
            justify-content: center;
            .client {
                width: 25%;
                min-width: 300px;
                position: relative;
                overflow: hidden;
                @for $i from 1 to 9 {
                    @if $i < 5 {
                        @if $i % 2 != 0 {
                            &:nth-child(#{$i}) {
                                background-color: $actorBackgroundColor1;
                            }
                        } @else {
                            &:nth-child(#{$i}) {
                                background-color: $actorBackgroundColor2;
                            }
                        }
                    }
                    @if $i >= 5 {
                        @if $i % 2 != 0 {
                            &:nth-child(#{$i}) {
                                background-color: $actorBackgroundColor2;
                            }
                        } @else {
                            &:nth-child(#{$i}) {
                                background-color: $actorBackgroundColor1;
                            }
                        }
                    }
                }
                img {
                    width: 100%;
                    height: 100%;
                }
                .cover.hovered {
                    bottom: 0;
                }
                .cover {
                    @include flex-column-nowrap;
                    justify-content: space-between;
                    position: absolute;
                    left: 0;
                    bottom: -100%;
                    width: calc(100% - 40px);
                    height: calc(100% - 40px);
                    padding: 20px;
                    background-color: $catalogItemCover;
                    color: $mainWhite;
                    transition: 0.6s ease-in;
                    .link {
                        background-color: $hoveredLink;
                        border: 1px solid $hoveredLink;
                        border-radius: 50%;
                        width: 54px;
                        height: 54px;
                        @include flex-row-nowrap;
                        justify-content: center;
                        align-self: flex-end;
                        &:hover {
                            cursor: pointer;
                            -webkit-animation: 1s linear 0s infinite alternate
                                actorLinkAnimation;
                            -moz-animation: 1s linear 0s infinite alternate
                                actorLinkAnimation;
                            -o-animation: 1s linear 0s infinite alternate
                                actorLinkAnimation;
                            animation: 1s linear 0s infinite alternate
                                actorLinkAnimation;
                        }
                        img {
                            width: 14px;
                        }
                    }
                    .info {
                        text-align: center;
                        .name {
                            font-family: "PoppinsRegular", "Arial", sans-serif;
                            font-size: 1.875em;
                        }
                        .description {
                            font-family: "NunitoExtraBold", "Arial", sans-serif;
                            font-size: 0.75em;
                            text-transform: uppercase;
                            color: $greyTextColor;
                            padding-bottom: 31px;
                        }
                    }
                }
            }
        }
    }
}

// Go to actor buttons

@-webkit-keyframes actorLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.7);
    }
}

@-moz-keyframes actorLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.7);
    }
}

@-o-keyframes actorLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.7);
    }
}

@keyframes actorLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.7);
    }
}
</style>
