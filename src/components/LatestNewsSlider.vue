<template>
    <section class="news-slider-section">
        <div v-for="slide in newsForSlider" :key="slide.id" class="slide">
            <div class="photo">
                <img :src="slide.photo" :alt="`News ${slide.id} in slider photo`" />
            </div>
            <div class="description">
                <a class="text" :href="slide.link">{{ slide.text }}</a>
                <div class="date">{{ slide.date }}</div>
            </div>
        </div>
        <div class="nav-dots">
            <div v-for="slide in newsForSlider" :key="slide.id" class="dot" />
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
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.news-slider-section {
}
</style>
