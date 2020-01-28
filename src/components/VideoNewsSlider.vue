<template>
    <section class="video-news-slider-section">
        <div
            v-for="slide in previews"
            :key="slide.id"
            class="slide"
            :class="{
                active: activeId === slide.id,
                top: slideDirection === 'top',
                bottom: slideDirection === 'bottom',
                prev: prevActiveSlideId === slide.id }"
        >
            <img :src="slide.preview" :alt="`Video news ${slide.id} slide photo`" />
            <div class="play-link">
                <a :href="slide.link">
                    <img src="../assets/img/play_big.svg" alt="Play button icon" />
                    <span>Play now</span>
                </a>
            </div>
        </div>
        <div class="nav-dots">
            <div class="dots-wrapper">
                <div
                    v-for="slide in previews"
                    :key="slide.id"
                    class="dot"
                    :class="{ active: activeId === slide.id }"
                    @click="changeActiveNews($event, slide.id)"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "VideoNewsSliderComponent",
    props: {
        previews: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeId: null,
            prevActiveSlideId: null,
            slideDirection: "top"
        };
    },
    mounted() {
        this.activeId = this.$props.previews[0].id;
        setInterval(() => {
            const news = this.$props.previews;
            const randomIndex = this.getRandomId(0, news.length - 1);

            this.prevActiveSlideId = this.activeId;
            this.activeId = news[randomIndex].id;
        }, 7500);
    },
    methods: {
        changeActiveNews(e, id) {
            if (this.activeId === id) return false;

            this.slideDirection = id > this.activeId ? "top" : "bottom";

            const activeElement = document.querySelector(".dot.active");
            activeElement.classList.remove("active");

            e.target.classList.add("active");
            this.prevActiveSlideId = this.activeId;
            this.activeId = id;
        },
        getRandomId(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.video-news-slider-section {
    height: 21.979vw;
    overflow: hidden;
    position: relative;
    .slide.active.top {
        top: 0;
        -webkit-animation: 0.7s linear 0s 1 alternate topToBottomSlideAnimation;
        -moz-animation: 0.7s linear 0s 1 alternate topToBottomSlideAnimation;
        -o-animation: 0.7s linear 0s 1 alternate topToBottomSlideAnimation;
        animation: 0.7s linear 0s 1 alternate topToBottomSlideAnimation;
    }
    .slide.top {
        transition: top 0.7s linear;
        top: -100%;
    }
    .slide.active.bottom {
        top: 0;
        -webkit-animation: 0.7s linear 0s 1 alternate bottomToTopSlideAnimation;
        -moz-animation: 0.7s linear 0s 1 alternate bottomToTopSlideAnimation;
        -o-animation: 0.7s linear 0s 1 alternate bottomToTopSlideAnimation;
        animation: 0.7s linear 0s 1 alternate bottomToTopSlideAnimation;
    }
    .slide.bottom {
        transition: top 0.7s linear;
        top: 100%;
    }
    .slide.active {
        visibility: visible;
    }
    .slide.prev {
        visibility: visible;
    }
    .slide {
        visibility: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        img {
            width: 100%;
            height: 100%;
        }
        .play-link {
            position: absolute;
            left: 40px;
            bottom: 50px;
            a {
                @include flex-row-nowrap;
                img {
                    width: 90px;
                    height: 90px;
                    align-self: center;
                }
                span {
                    padding-left: 30px;
                    align-self: center;
                    font-size: 0.875em;
                    color: $mainWhite;
                    text-transform: uppercase;
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                }
            }
        }
    }
    .nav-dots {
        position: absolute;
        height: 90px;
        bottom: calc(50% - 45px);
        right: 0;
        z-index: 2;
        .dots-wrapper {
            height: 100%;
            padding: 0 33px;
            @include flex-column-nowrap;
            align-items: flex-end;
            justify-content: space-between;
            .dot {
                border: 1px solid $mainWhite;
                border-radius: 50%;
                background-color: $mainWhite;
                align-self: center;
            }
            .dot:not(.active) {
                width: 5px;
                height: 5px;
                &:hover {
                    cursor: pointer;
                }
            }
            .dot.active {
                width: 10px;
                height: 10px;
            }
        }
    }
}

@-webkit-keyframes bottomToTopSlideAnimation {
    0% {
        top: -100%;
    }
    100% {
        top: 0%;
    }
}

@-moz-keyframes bottomToTopSlideAnimation {
    0% {
        top: -100%;
    }
    100% {
        top: 0%;
    }
}

@-o-keyframes bottomToTopSlideAnimation {
    0% {
        top: -100%;
    }
    100% {
        top: 0%;
    }
}

@keyframes bottomToTopSlideAnimation {
    0% {
        top: -100%;
    }
    100% {
        top: 0%;
    }
}

@-webkit-keyframes topToBottomSlideAnimation {
    0% {
        top: 100%;
    }
    100% {
        top: 0%;
    }
}

@-moz-keyframes topToBottomSlideAnimation {
    0% {
        top: 100%;
    }
    100% {
        top: 0%;
    }
}

@-o-keyframes topToBottomSlideAnimation {
    0% {
        top: 100%;
    }
    100% {
        top: 0%;
    }
}

@keyframes topToBottomSlideAnimation {
    0% {
        top: 100%;
    }
    100% {
        top: 0%;
    }
}
</style>
