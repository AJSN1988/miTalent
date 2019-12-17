<template>
    <section class="top-model-info">
        <div class="socials">
            <ul>
                <li @mouseenter="toggleSocialColor($event)" @mouseleave="toggleSocialColor($event)">
                    <img src="../assets/img/facebook.svg" alt="Facebook social icon" width="16" />
                </li>
                <li @mouseenter="toggleSocialColor($event)" @mouseleave="toggleSocialColor($event)">
                    <img src="../assets/img/instagram.svg" alt="Facebook social icon" width="16" />
                </li>
                <li @mouseenter="toggleSocialColor($event)" @mouseleave="toggleSocialColor($event)">
                    <img src="../assets/img/youtube.svg" alt="Facebook social icon" width="16" />
                </li>
                <li @mouseenter="toggleSocialColor($event)" @mouseleave="toggleSocialColor($event)">
                    <img src="../assets/img/twitter.svg" alt="Facebook social icon" width="16" />
                </li>
            </ul>
        </div>
        <div class="description">
            <div class="name">{{ model.name }}</div>
            <div class="text">{{ model.description }}</div>
        </div>
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
    },
    methods: {
        toggleSocialColor(e) {
            console.log(e);
        }
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
    .socials {
        height: 100%;
        width: 13%;
        margin-left: 61px;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                margin-bottom: 40px;
            }
        }
    }
    .description {
        width: 5%;
    }
    .photo {
        height: 100%;
        // text-align: right;
        // img {
        //     width: 100%;
        // }
    }
}
</style>