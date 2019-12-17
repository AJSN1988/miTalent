<template>
    <section class="top-models-section">
        <div class="current-model-label">
            <span>{{ currentModelId }}</span>
            <hr />
        </div>
        <div class="models-info-wrapper">
            <top-model-info :model="models[0]"></top-model-info>
            <!-- <top-model-card></top-model-card>
            <top-model-card></top-model-card>-->
        </div>
        <div class="placeholder"></div>
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
    data() {
        return {
            activeModelId: 1
        };
    },
    methods: {
        changeModelCard(e, id) {
            if (
                e.target.classList.contains("active") ||
                e.target.parentElement.classList.contains("active")
            )
                return false;

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
            )
                return false;

            const hr = e.target.querySelector("hr");
            if (hr) {
                hr.classList.add("hovered");
            }
        },
        hoverOutControls(e) {
            e.target.querySelector("hr").classList.remove("hovered");
        }
    },
    computed: {
        currentModelId() {
            return this.activeModelId.toString().padStart(2, "0");
        }
    },
    props: {
        models: Array
    },
    components: {
        TopModelInfo: TopModelInfo
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-models-section {
    min-height: 720px;
    height: 100vh;
    margin-top: -181px;
    position: relative;
    .current-model-label {
        font-family: "PoppinsMedium", "Arial", sans-serif;
        margin-left: 60px;
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
        width: 300px;
        &:not(.active) {
            color: $greyTextColor;
        }
        .active {
            color: $textColor;
            hr {
                border-color: $textColor;
                visibility: visible;
            }
        }
        position: absolute;
        left: 80%;
        top: 66.666%;
        height: 33.333%;
        @include flex-column-nowrap;
        justify-content: center;
        ul {
            margin: 0;
            list-style: none;
            li {
                padding: 20px 0;
                @include flex-row-nowrap;
                &:hover {
                    cursor: pointer;
                }
                hr {
                    width: 56px;
                    border-color: $greyTextColor;
                    size: 2px;
                    margin: auto 100px;
                    visibility: hidden;
                }
                hr.hovered {
                    visibility: visible;
                }
            }
        }
    }
}
</style>