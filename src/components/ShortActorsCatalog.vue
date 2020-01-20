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
                v-show="activeCatalogId === category.id"
                :key="category.id"
                class="catalog"
                :class="category.name"
            >
                <div v-for="actor in category.people" :key="actor.uid" class="actor">
                    <img :src="actor.photo" :alt="`${actor.name} photo`" />
                    <!-- <div class="cover"></div> -->
                </div>
            </div>
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
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";
.short-actors-section {
    margin: 104px 0 82px 0;
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
            }
        }
    }
    .catalog-wrapper {
        margin: 82px 120px 0;
        .catalog {
            @include flex-row-wrap;
            .actor {
                width: 25%;
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
                    height: auto;
                }
            }
        }
    }
}
</style>
