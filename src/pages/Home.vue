<template>
    <section class="home container">
        <main-header></main-header>
        <top-models :models="modelsForTopList"></top-models>
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
    data() {
        return {
            modelsForTopList: [
                {
                    id: 1,
                    name: "Georgina Alson",
                    photo: "../static/georgina_main.png",
                    description: "Young model 2020",
                    links: {
                        profile: "/georgina_alson",
                        facebook: "#",
                        instagram: "#",
                        youtube: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 2,
                    name: "katarina Wild",
                    photo: "../static/katarina_main.png",
                    description: "Young model 2021",
                    links: {
                        profile: "/katarina_wild",
                        facebook: "#",
                        instagram: "#",
                        youtube: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 3,
                    name: "Anna Rice",
                    photo: "../static/anna_main.png",
                    description: "Young model 2022",
                    links: {
                        profile: "/anna_rice",
                        facebook: "#",
                        instagram: "#",
                        youtube: "#",
                        twitter: "#"
                    }
                },
                {
                    id: 4,
                    name: "Amanda Cole",
                    photo: "..static/amanda_cole.png",
                    description: "Young model 2023",
                    links: {
                        profile: "/amanda_cole",
                        facebook: "#",
                        instagram: "#",
                        youtube: "#",
                        twitter: "#"
                    }
                }
            ]
        };
    },
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