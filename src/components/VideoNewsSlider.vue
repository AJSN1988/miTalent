<template>
    <section class="video-news-slider-section">
        <div v-for="slide in previews" :key="slide.id" class="slider">
            <img :src="slide.preview" :alt="`Video news ${slide.id} slide photo`" />
            <a :href="slide.link">
                <img src="../assets/img/play_big.svg" alt="Play button icon" />
                Play now
            </a>
        </div>
        <div class="nav-dots">
            <div v-for="slide in previews" :key="slide.id" class="dot" />
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
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.video-news-slider-section {
}
</style>