<template>
    <section class="stories-section"></section>
</template>

<script>
export default {
    name: "StoriesComponent"
};
</script>

<style lang="scss">
@import "../scss/_common.scss";
.stories-section {
    margin-top: 119px;
    @include flex-row-nowrap;
    height: 1080px;
}
</style>
