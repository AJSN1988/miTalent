<template>
    <section class="short-actors-section">
        <div class="nav">
            <ul>
                <li
                    v-for="actor in actorsCatalog"
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
                v-for="category in actorsCatalog"
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
                    <img :src="actor.photo" :alt="`${actor.name} photo`" />
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
        </div>
        <div class="see-more-wrapper">
            <button>Explore more</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "ShortActorsCatalog",
    props: {
        actorsCatalog: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeCatalogId: 0
        };
    },
    methods: {
        setActiveCatalog(id) {
            // Set active catalog id
            if (this.activeCatalogId === id) return false;
            this.activeCatalogId = id;
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
        goToActorPage(id) {
            console.log(id);
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";
.short-actors-section {
    margin: 104px 0 82px 0;
    @include screen-767 {
        margin: 111px 0 82px 0;
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
            margin: 0;
            padding: 0;
            @include screen-459 {
                @include flex-column-nowrap;
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
        margin: 82px 120px 0;
        @include screen-459 {
            margin: 22px 0 0;
        }
        @include screen-460-767 {
            margin: 22px 40px 0;
        }
        @include screen-768-1279 {
            margin: 82px 40px 0;
        }
        .catalog.active {
            height: 100%;
            .actor {
                opacity: 1;
                @for $i from 0 to 9 {
                    &:nth-child(#{$i}) {
                        @if $i == 0 {
                            transition: 0.3s ease-in;
                        } @else {
                            transition: opacity $i * 0.18s ease-in;
                        }
                    }
                }
            }
        }
        .catalog {
            height: 0;
            @include flex-row-wrap;
            justify-content: center;
            overflow: hidden;
            .actor {
                opacity: 0;
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
    .see-more-wrapper {
        margin-top: 60px;
        text-align: center;
        button {
            width: 218px;
            height: 58px;
            background-color: $mainButtonColor;
            border: 1px solid $mainButtonColor;
            border-radius: 30px;
            font-family: "NunitoExtraBold", "Arial", sans-serif;
            color: $mainWhite;
            text-transform: uppercase;
            font-size: 0.875em;
            outline: none;
            &:hover {
                cursor: pointer;
                -webkit-animation: 0.8s linear 0s infinite alternate
                    seeMoreLinkAnimation;
                -moz-animation: 0.8s linear 0s infinite alternate
                    seeMoreLinkAnimation;
                -o-animation: 0.8s linear 0s infinite alternate
                    seeMoreLinkAnimation;
                animation: 0.8s linear 0s infinite alternate
                    seeMoreLinkAnimation;
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

// See more button

@-webkit-keyframes seeMoreLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.9);
    }
}

@-moz-keyframes seeMoreLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.9);
    }
}

@-o-keyframes seeMoreLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.9);
    }
}

@keyframes seeMoreLinkAnimation {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.9);
    }
}
</style>
