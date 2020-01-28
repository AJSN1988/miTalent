<template>
    <section class="news-slider-section">
        <div
            v-for="slide in newsForSlider"
            :key="slide.id"
            class="slide"
            :class="{
                active: activeId === slide.id,
                right: slideDirection === 'right',
                left: slideDirection === 'left',
                prev: prevActiveSlideId === slide.id }"
        >
            <div class="photo">
                <img :src="slide.photo" :alt="`News ${slide.id} in slider photo`" />
            </div>
            <div class="description">
                <a class="text" :href="slide.link">{{ slide.text }}</a>
                <div class="date">{{ slide.date }}</div>
            </div>
        </div>
        <div class="nav-dots">
            <div class="dots-wrapper">
                <div
                    v-for="slide in newsForSlider"
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
    name: "NewsSliderComponent",
    props: {
        newsForSlider: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            changeLatestNewsTickerId: null,
            prevActiveSlideId: null,
            activeId: null,
            slideDirection: "right"
        };
    },
    mounted() {
        this.activeId = this.$props.newsForSlider[0].id;
        this.changeLatestNewsTickerId = setInterval(() => {
            const news = this.$props.newsForSlider;
            for (let i = 0; i < news.length; i++) {
                if (news[i].id === this.activeId) {
                    this.prevActiveSlideId = this.activeId;
                    if (i === news.length - 1) {
                        this.activeId = news[0].id;
                    } else {
                        this.activeId = news[++i].id;
                    }
                }
            }
        }, 5000);
    },
    methods: {
        changeActiveNews(e, id) {
            if (this.activeId === id) return false;
            clearInterval(this.changeLatestNewsTickerId);

            this.slideDirection = id > this.activeId ? "right" : "left";

            const activeElement = document.querySelector(".dot.active");
            activeElement.classList.remove("active");

            e.target.classList.add("active");
            this.prevActiveSlideId = this.activeId;
            this.activeId = id;
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.news-slider-section {
    // height: 51.6666vw;
    height: 100%;
    overflow: hidden;
    position: relative;
    .slide.active.right {
        left: 0;
        -webkit-animation: 0.7s linear 0s 1 alternate rightToLeftSlideAnimation;
        -moz-animation: 0.7s linear 0s 1 alternate rightToLeftSlideAnimation;
        -o-animation: 0.7s linear 0s 1 alternate rightToLeftSlideAnimation;
        animation: 0.7s linear 0s 1 alternate rightToLeftSlideAnimation;
    }
    .slide.right {
        transition: left 0.7s linear;
        left: -100%;
    }
    .slide.active.left {
        left: 0;
        -webkit-animation: 0.7s linear 0s 1 alternate leftToRightSlideAnimation;
        -moz-animation: 0.7s linear 0s 1 alternate leftToRightSlideAnimation;
        -o-animation: 0.7s linear 0s 1 alternate leftToRightSlideAnimation;
        animation: 0.7s linear 0s 1 alternate leftToRightSlideAnimation;
    }
    .slide.left {
        transition: left 0.7s linear;
        left: 100%;
    }
    .slide.active {
        visibility: visible;
    }
    .slide.prev {
        visibility: visible;
    }
    .slide {
        visibility: hidden;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        @include flex-column-nowrap;
        .photo {
            height: 86.29%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .description {
            height: 13.71%;
            @include flex-column-nowrap;
            justify-content: flex-end;
            .text {
                font-family: "PoppinsMedium", Arial, sans-serif;
                font-size: 1.5em;
                padding-bottom: 20px;
                color: $textColor;
                &:link,
                &:visited {
                    color: $textColor;
                }
                text-decoration: none;
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
    .nav-dots {
        position: absolute;
        width: 100%;
        // bottom: 196px;
        bottom: 19.758%;
        z-index: 2;
        .dots-wrapper {
            margin: auto;
            width: 90px;
            @include flex-row-nowrap;
            align-items: center;
            justify-content: space-between;
            .dot {
                border: 1px solid $mainWhite;
                border-radius: 50%;
                background-color: $mainWhite;
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

@-webkit-keyframes leftToRightSlideAnimation {
    0% {
        left: -100%;
    }
    100% {
        left: 0%;
    }
}

@-moz-keyframes leftToRightSlideAnimation {
    0% {
        left: -100%;
    }
    100% {
        left: 0%;
    }
}

@-o-keyframes leftToRightSlideAnimation {
    0% {
        left: -100%;
    }
    100% {
        left: 0%;
    }
}

@keyframes leftToRightSlideAnimation {
    0% {
        left: -100%;
    }
    100% {
        left: 0%;
    }
}

@-webkit-keyframes rightToLeftSlideAnimation {
    0% {
        left: 100%;
    }
    100% {
        left: 0%;
    }
}

@-moz-keyframes rightToLeftSlideAnimation {
    0% {
        left: 100%;
    }
    100% {
        left: 0%;
    }
}

@-o-keyframes rightToLeftSlideAnimation {
    0% {
        left: 100%;
    }
    100% {
        left: 0%;
    }
}

@keyframes rightToLeftSlideAnimation {
    0% {
        left: 100%;
    }
    100% {
        left: 0%;
    }
}
</style>
