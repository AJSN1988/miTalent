<template>
    <section class="top-model-info">
        <div class="socials"></div>
        <div class="description"></div>
        <div class="photo">
            <img :src="model.photo" alt="Top model photo" />
        </div>
        <div class="view-button"></div>
    </section>
</template>

<script>
export default {
    name: "TopModelInfoComponent",
    props: {
        model: Object
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-model-info {
    @include flex-row-nowrap;
    height: 75vh;
    min-height: 540px;
    width: 100%;
    margin-top: 25vh;
    @include screen-h-720 {
        margin-top: 180px;
    }
    .social {
        height: 100%;
    }
    .photo {
        height: 100%;
        text-align: right;
        // img {
        //     width: 100%;
        // }
    }
}
</style>