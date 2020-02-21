<template>
    <section class="actors-with-slider-section">
        <div class="nav">
            <ul>
                <li
                    v-for="actor in actors"
                    :key="actor.id"
                    :class="{active: actor.id === activeCatalogId}"
                    @click="setActiveCatalog(actor.id)"
                >
                    <div role="button">{{ actor.name }}</div>
                </li>
            </ul>
        </div>
        <div class="catalog-wrapper">
            <div
                v-for="category in actors"
                :key="category.id"
                class="catalog"
                :class="{ active: activeCatalogId === category.id }"
            >
                <div
                    v-for="actor in category.people"
                    :key="actor.uid"
                    class="actor"
                    @mouseenter="toggleActorCover($event)"
                    @mouseleave="toggleActorCover($event)"
                >
                    <img :src="actor.photo" :alt="`${actor.name} photo`" class="actor-photo" />
                    <div class="cover">
                        <div class="link" role="link" @click="goToActorPage(actor.uid)">
                            <img src="../assets/img/diagonal-arrow.svg" alt="Arrow icon" width="14" />
                        </div>
                        <div class="info">
                            <div class="name">{{ actor.name }}</div>
                            <div class="description">{{ actor.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider-controls">
                <button v-if="currentSlidePosition === 0" class="go-left inactive">
                    <img
                        src="../assets/img/arrow_down_grey.svg"
                        alt="Inactive slider control"
                        width="25"
                    />
                </button>
                <button
                    v-if="currentSlidePosition > 0"
                    class="go-left"
                    @click="scrollActorSlider('left')"
                >
                    <img
                        src="../assets/img/arrow_down.svg"
                        alt="Active slider control left"
                        width="25"
                    />
                </button>
                <button
                    v-if="currentSlidePosition === actors[activeCatalogId].people.length - slidesPerPage"
                    class="go-right inactive"
                >
                    <img
                        src="../assets/img/arrow_up_grey.svg"
                        alt="Inactive slider control"
                        width="25"
                    />
                </button>
                <button
                    v-if="currentSlidePosition < actors[activeCatalogId].people.length - slidesPerPage"
                    class="go-right"
                    @click="scrollActorSlider('right')"
                >
                    <img
                        src="../assets/img/arrow_up.svg"
                        alt="Active slider control left"
                        width="25"
                    />
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ActorsCatalogComponent",
    props: {
        actors: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeCatalogId: 0,
            currentSlidePosition: 0,
            slidesPerPage: 4,
            mediaQueriesList: [
                {
                    query:
                        "screen and (min-width: 1600px) and (max-width: 1919px)",
                    slidesPerPage: 4,
                    slideWidth: 340
                },
                {
                    query:
                        "screen and (min-width: 1280px) and (max-width: 1599px)",
                    slidesPerPage: 3,
                    slideWidth: 346.66
                },
                {
                    query:
                        "screen and (min-width: 1000px) and (max-width: 1279px)",
                    slidesPerPage: 3,
                    slideWidth: 320
                },
                {
                    query:
                        "screen and (min-width: 768px) and (max-width: 999px)",
                    slidesPerPage: 2,
                    slideWidth: 320
                },
                {
                    query:
                        "screen and (min-width: 600px) and (max-width: 767px)",
                    slidesPerPage: 2,
                    slideWidth: 280
                },
                {
                    query: "screen and (max-width: 599px)",
                    slidesPerPage: 1,
                    slideWidth: 280
                }
            ]
        };
    },
    mounted() {
        window.addEventListener("resize", this.resetFirstSlideOffset);
    },
    destroyed() {
        window.removeEventListener("resize", this.resetFirstSlideOffset);
    },
    methods: {
        setActiveCatalog(id) {
            // Set active catalog id
            if (this.activeCatalogId === id) return false;
            this.activeCatalogId = id;

            this.resetFirstSlideOffset();
        },
        toggleActorCover(e) {
            const element = e.target.querySelector(".cover");
            element.classList.add("hovered");

            if (
                e.type === "mouseleave" &&
                element.classList.contains("hovered")
            ) {
                element.classList.remove("hovered");
            }
        },
        scrollActorSlider(direction) {
            this.setSlidesPerPageCount();

            const firstActorSlideElement = document.querySelector(
                ".catalog.active > .actor"
            );
            const firstActorSlideWidth = firstActorSlideElement.offsetWidth;
            const currentSlidePosition = firstActorSlideElement.style.marginLeft
                ? parseInt(firstActorSlideElement.style.marginLeft, 10)
                : 0;

            if (direction === "right") {
                firstActorSlideElement.style.marginLeft = `${currentSlidePosition -
                    firstActorSlideWidth}px`;
                this.currentSlidePosition++;
            } else {
                firstActorSlideElement.style.marginLeft = `${currentSlidePosition +
                    firstActorSlideWidth}px`;
                this.currentSlidePosition--;
            }
        },
        setSlidesPerPageCount() {
            // Set count slides per page using medua queries
            this.mediaQueriesList.forEach(queryObj => {
                if (window.matchMedia(queryObj.query).matches) {
                    this.slidesPerPage = queryObj.slidesPerPage;
                    return false;
                }
            });
        },
        resetFirstSlideOffset() {
            // Reset slider position
            this.currentSlidePosition = 0;
            const firstActorSlideElement = document.querySelector(
                ".catalog.active > .actor"
            );
            firstActorSlideElement.style.marginLeft = "0";
        },
        goToActorPage(id) {
            console.log(id);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.actors-with-slider-section {
    margin: 104px 120px 0;
    position: relative;
    @include screen-767 {
        margin: 40px 20px 0;
    }
    @include screen-768-1279 {
        margin: 130px 20px 0;
    }
    .nav {
        ul {
            @include flex-row-wrap;
            justify-content: center;
            list-style: none;
            font-family: "NunitoBlack", Arial, sans-serif;
            font-size: 0.75em;
            text-transform: uppercase;
            color: $navLinkColor;
            margin: auto;
            padding: 0;
            width: fit-content;
            @include screen-459 {
                width: 100%;
                flex-direction: column;
            }
            li.active {
                color: $textColor;
                border-bottom: 2px solid $textColor;
                &:hover {
                    cursor: default;
                }
            }
            li {
                border-bottom: 2px solid $mainWhite;
                div {
                    padding: 16px 30.5px;
                }
                &:hover {
                    cursor: pointer;
                    color: $textColor;
                }
                @include screen-459 {
                    align-self: center;
                }
            }
        }
    }
    .catalog-wrapper {
        margin: 82px 0 0;
        position: relative;
        @include screen-1279 {
            margin: 40px 0 0;
        }
        .catalog.active {
            height: 100%;
            margin: auto;
            .actor {
                opacity: 1;
                z-index: 1;
                @for $i from 0 to 9 {
                    &:nth-child(#{$i}) {
                        @if $i == 0 {
                            transition: 0.3s ease-in, margin-left 0.7s linear;
                        } @else {
                            transition: opacity $i * 0.18s ease-in,
                                margin-left 0.7s linear;
                        }
                    }
                }
            }
        }
        .catalog {
            height: 0;
            @include flex-row-nowrap;
            overflow: hidden;
            width: calc(416px * 4);
            @include screen-599 {
                width: 280px;
            }
            @include screen-600-767 {
                width: calc(280px * 2);
            }
            @include screen-768-999 {
                width: calc(320px * 2);
            }
            @include screen-1000-1279 {
                width: calc(320px * 3);
            }
            @include screen-1280-1599 {
                width: calc(346.66px * 3);
            }
            @include screen-1600-1919 {
                width: calc(340px * 4);
            }
            .actor {
                opacity: 0;
                min-width: 416px;
                position: relative;
                overflow: hidden;
                @include screen-767 {
                    min-width: 280px;
                }
                @include screen-768-1279 {
                    min-width: 320px;
                }
                @include screen-1280-1599 {
                    min-width: 346.66px;
                }
                @include screen-1600-1919 {
                    min-width: 340px;
                }
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
    .slider-controls {
        position: absolute;
        bottom: calc(50% - 15px);
        width: calc(100% + 120px);
        left: -60px;
        @include flex-row-nowrap;
        justify-content: space-between;
        @include screen-599 {
            width: 280px;
        }
        @include screen-600-767 {
            width: calc(280px * 2);
        }
        @include screen-768-999 {
            width: calc(320px * 2);
        }
        @include screen-1000-1279 {
            width: calc(320px * 3);
        }
        @include screen-1279 {
            position: initial;
            margin: 45px auto;
        }
        .go-left,
        .go-right {
            background: none;
            border: none;
            outline: none;
            transform: rotate(90deg);
            &:hover {
                cursor: pointer;
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
