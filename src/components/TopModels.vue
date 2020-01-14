<template>
    <section class="top-models-section">
        <div class="current-model-label">
            <span>{{ currentModelId }}</span>
            <hr />
        </div>
        <div class="models-info-wrapper">
            <top-model-info :model="models[0]" />
            <!-- <top-model-card></top-model-card>
            <top-model-card></top-model-card>-->
        </div>
        <div class="placeholder" />
        <div class="controls">
            <ul>
                <li
                    v-for="model in models"
                    :key="model.id"
                    :class="{active : activeModelId == model.id}"
                    @mouseover="hoverControls($event)"
                    @mouseleave="hoverOutControls($event)"
                    @click="changeModelCard($event, model.id)"
                >
                    {{ model.id }}
                    <hr />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import TopModelInfo from "./TopModelInfo.vue";

export default {
    name: "TopMondelsComponent",
    components: {
        TopModelInfo
    },
    props: {
        models: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeModelId: 1
        };
    },
    computed: {
        currentModelId() {
            return this.activeModelId.toString().padStart(2, "0");
        }
    },
    methods: {
        changeModelCard(e, id) {
            if (
                e.target.classList.contains("active") ||
                e.target.parentElement.classList.contains("active")
            ) {
                return false;
            }

            const activeLi = document.querySelector(".controls ul li.active");
            if (activeLi) {
                activeLi.classList.remove("active");
            }
            e.target.classList.toggle("active");
            this.activeModelId = id;
        },
        hoverControls(e) {
            if (
                e.target.classList.contains("active") ||
                e.target.parentElement.classList.contains("active")
            ) {
                return false;
            }

            const hr = e.target.querySelector("hr");
            if (hr) {
                hr.classList.add("hovered");
            }
        },
        hoverOutControls(e) {
            e.target.querySelector("hr").classList.remove("hovered");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-models-section {
    @include screen-min-1280 {
        min-height: 720px;
    }
    height: 100vh;
    margin-top: -181px;
    @include screen-1279 {
        margin-top: -99px;
    }
    position: relative;
    @include screen-min-h-1200 {
        height: 1080px;
    }
    .current-model-label {
        font-family: "PoppinsMedium", "Arial", sans-serif;
        margin-left: 60px;
        @include screen-1279 {
            margin-left: 20px;
            height: 100%;
        }
        @include screen-768-1279 {
            // height: 50%;
            // padding-top: 50%;
        }
        height: 75%;
        @include flex-column-nowrap;
        justify-content: flex-end;
        align-items: center;
        width: 13px;
        span,
        hr {
            transform: rotate(-90deg);
        }
        span {
            order: 1;
            letter-spacing: 5px;
            @include screen-1279 {
                margin-bottom: 130px;
            }
        }
        hr {
            width: 60px;
            size: 2px;
            border-color: $greyTextColor;
            margin: 0;
            margin-bottom: 72px;
        }
    }
    .models-info-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 75%;
        @include screen-1279 {
            width: 100%;
        }
    }
    .placeholder {
        position: absolute;
        left: 60%;
        top: 0;
        width: 40%;
        height: 66.666%;
        @include mainBackground;
        z-index: -10;
    }
    .controls {
        font-family: "NunitoExtraBold", Arial, sans-serif;
        font-size: 0.75rem;
        position: absolute;

        width: 100%;
        @include flex-row-nowrap;
        justify-content: flex-end;
        right: 0;

        // right: 4.2%;
        margin: 0;
        height: 33.3333%;
        bottom: 0;
        @include screen-1279 {
            // position: initial;
            // height: auto;
            // margin-top: 23.5vh;
            width: 100%;
            left: 0;
            height: 110px;
            // bottom: -82px;
        }
        &:not(.active) {
            color: $greyTextColor;
            @include screen-1279 {
                color: $textColor;
            }
        }
        .active {
            color: $textColor;
            hr {
                background-color: $textColor;
                visibility: visible;
            }
        }
        // @include flex-column-nowrap;
        // justify-content: center;
        ul {
            width: 25%;
            align-self: center;
            margin: 0;
            list-style: none;
            padding: 0;
            @include screen-1279 {
                @include flex-row-nowrap;
                justify-content: flex-end;
                margin-right: 20px;
            }
            li {
                // padding: 20px 0;
                padding: 20px 20%; // 20px 96px
                @include flex-row-nowrap;
                @include screen-1279 {
                    margin: 0 20px;
                    font-size: 1.2em;
                    @include flex-column-nowrap;
                    padding: 0;
                    align-self: center;
                    text-align: center;
                }
                &:hover {
                    cursor: pointer;
                }
                hr {
                    width: 56px;
                    background-color: $greyTextColor;
                    // border: none;
                    size: 2px;
                    // margin: auto 5.9vw;
                    visibility: hidden;
                    @include screen-1279 {
                        margin: 10px 0 0;
                        width: 30px;
                    }
                }
                hr.hovered {
                    visibility: visible;
                }
            }
        }
    }
}
</style>
