<template>
    <section class="home container">
        <main-header></main-header>
        <top-models></top-models>
        <section class="catalog"></section>
        <section class="last-news"></section>
        <footer class="footer"></footer>
    </section>
</template>

<script>
import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModels.vue";

export default {
    name: "HomeComponent",
    components: {
        MainHeader: MainHeader,
        TopModels: TopModels
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1980px;
    margin: auto;
}
</style>