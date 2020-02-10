<template>
    <section class="actors-section">
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
            <ul>
                <li>
                    <img
                        v-if="viewType === 'tiled'"
                        src="../assets/img/tile_view.svg"
                        alt="Tile view icon"
                        width="16"
                    />
                    <img
                        v-if="viewType === 'list'"
                        src="../assets/img/tile_view_inactive.svg"
                        alt="Inactive tile view icon"
                        width="16"
                        @click="changeViewType('tiled')"
                    />
                </li>
                <li>
                    <img
                        v-if="viewType === 'list'"
                        src="../assets/img/list_view.svg"
                        alt="List view icon"
                        width="20"
                    />
                    <img
                        v-if="viewType === 'tiled'"
                        src="../assets/img/list_view_inactive.svg"
                        alt="Inactive list view icon"
                        width="20"
                        @click="changeViewType('list')"
                    />
                </li>
            </ul>
        </div>
        <div class="catalog-wrapper tiled">
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
            viewType: "tiled"
        };
    },
    methods: {
        changeViewType(type) {
            this.viewType = type;
            const prevType = type === "tiled" ? "list" : "tiled";
            const catalog = document.querySelector(".catalog-wrapper");
            catalog.classList.remove(prevType);
            catalog.classList.add(type);
        },
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
.actors-section {
    margin: 104px 120px 0;
    @include screen-767 {
        margin: 40px 0 0;
    }
    @include screen-768-1279 {
        margin: 40px 20px 0;
    }
    .nav {
        @include flex-row-wrap;
        justify-content: space-between;
        @include screen-767 {
            justify-content: center;
        }
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

            @include screen-767 {
                width: 100%;
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
            &:last-child {
                align-self: center;
                width: 97px;
                justify-content: space-between;
                flex-direction: row;
                @include screen-767 {
                    margin-top: 40px;
                }
                li {
                    align-self: center;
                }
            }
        }
    }
    .catalog-wrapper.tiled {
        margin: 82px 0 0;
        @include screen-459 {
            margin: 22px 0 0;
        }
        @include screen-460-767 {
            margin: 22px 40px 0;
        }
        @include screen-768-1279 {
            margin: 40px 40px 0;
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
    .catalog-wrapper.list {
        margin: 82px 0 0;
        @include screen-1279 {
            margin: 40px 20px 0;
        }
        .catalog.active {
            @include flex-row-wrap;
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
                img {
                    width: 300px;
                    @include screen-767 {
                        width: 100%;
                    }
                }
            }
        }
        .catalog:not(.active) {
            height: 0;
            overflow: hidden;
            .actor {
                opacity: 0;
            }
        }
        .actor {
            width: calc(50% - 20px);
            @include screen-767 {
                flex-wrap: wrap;
                margin-bottom: 20px;
            }
            @include screen-1279 {
                width: 100%;
            }
            margin-bottom: 40px;
            flex-grow: 1;
            @include flex-row-nowrap;
            justify-content: space-between;
            @include screen-1280-1919 {
                min-width: 750px;
            }
            &:nth-last-child(odd) {
                margin-left: 20px;
                @include screen-1779 {
                    margin-left: 0;
                }
                .actor-photo {
                    background-color: $actorBackgroundColor1;
                }
            }
            &:nth-last-child(even) {
                margin-right: 20px;
                @include screen-1779 {
                    margin-right: 0;
                }
                .actor-photo {
                    background-color: $actorBackgroundColor2;
                }
            }
            .actor-photo {
                flex-grow: 1;
            }
            .cover {
                width: 100%;
                background-color: $catalogItemCover;
                @include flex-row-nowrap;
                justify-content: space-between;

                @include screen-999 {
                    flex-direction: column;
                }
                .link {
                    background-color: $hoveredLink;
                    border: 1px solid $hoveredLink;
                    border-radius: 50%;
                    width: 65px;
                    height: 65px;
                    @include flex-row-nowrap;
                    justify-content: center;
                    align-self: flex-start;
                    order: 1;
                    margin: 40px;
                    @include screen-999 {
                        margin: 20px;
                        align-self: flex-end;
                    }
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
                    align-self: center;
                    padding-left: 40px;
                    @include screen-767 {
                        padding-left: 0;
                        padding-top: 20px;
                    }
                    @include screen-768-999 {
                        padding-left: 0;
                        padding-top: 144px;
                    }
                    .name {
                        font-family: "PoppinsRegular", "Arial", sans-serif;
                        font-size: 1.875em;
                        color: $mainWhite;
                    }
                    .description {
                        font-family: "NunitoExtraBold", "Arial", sans-serif;
                        font-size: 0.75em;
                        text-transform: uppercase;
                        color: $greyTextColor;
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
