<template>
    <section class="home container">
        <main-header />
        <top-models :models="modelsForTopList" />
        <short-actors-catalog :actors-catalog="shortActorsCatalog" />
        <latest-news :news="news" />
        <app-footer />
    </section>
</template>

<script>
import MainHeader from "../components/Header.vue";
import TopModels from "../components/TopModels.vue";
import ShortActorsCatalog from "../components/ShortActorsCatalog.vue";
import LatestNews from "../components/LatestNews.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    name: "HomeComponent",
    components: {
        MainHeader,
        TopModels,
        ShortActorsCatalog,
        LatestNews,
        AppFooter
    },
    data() {
        return {
            // Emulate backend data
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
                    name: "Katarina Wild",
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
                    photo: "../static/anna_rice.png",
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
                    photo: "../static/amanda_cole.png",
                    description: "Young model 2023",
                    links: {
                        profile: "/amanda_cole",
                        facebook: "#",
                        instagram: "#",
                        youtube: "#",
                        twitter: "#"
                    }
                }
            ],
            shortActorsCatalog: [
                {
                    id: 0,
                    name: "actor",
                    people: [
                        {
                            uid: 0,
                            photo: "../static/actor/adam_ruiz.png",
                            name: "Adam Ruiz",
                            description: "Good guy"
                        },
                        {
                            uid: 1,
                            photo: "../static/actor/trisha_takanava.png",
                            name: "Trisha Takanava",
                            description: "Actor"
                        },
                        {
                            uid: 2,
                            photo: "../static/actor/eva_wilson.png",
                            name: "Eva Wilson",
                            description: "Woman actor"
                        },
                        {
                            uid: 3,
                            photo: "../static/actor/ivan_moran.png",
                            name: "Ivan Moran",
                            description: "Good actor"
                        },
                        {
                            uid: 4,
                            photo: "../static/actor/mila_braum.png",
                            name: "Mila Braum",
                            description: "Good girl"
                        },
                        {
                            uid: 5,
                            photo: "../static/actor/tony_bi.png",
                            name: "Tony Bi",
                            description: "Some text"
                        },
                        {
                            uid: 6,
                            photo: "../static/actor/ann_foster.png",
                            name: "Ann Foster",
                            description: "Pretty girl"
                        },
                        {
                            uid: 7,
                            photo: "../static/actor/josephine_ginter.png",
                            name: "Josephine Ginter",
                            description: "Just girl"
                        }
                    ]
                },
                {
                    id: 1,
                    name: "musican",
                    people: [
                        {
                            uid: 8,
                            photo: "../static/musican/simona_shultz.png",
                            name: "Simona Shultz",
                            description: "Doodle girl"
                        },
                        {
                            uid: 9,
                            photo: "../static/musican/victor_chang.png",
                            name: "Victor Chang",
                            description: "Guitar god"
                        },
                        {
                            uid: 10,
                            photo: "../static/musican/jina_torres.png",
                            name: "Jina Torres",
                            description: "Some text about her"
                        },
                        {
                            uid: 11,
                            photo: "../static/musican/john_savin.png",
                            name: "John Savin",
                            description: "Good musican boy"
                        },
                        {
                            uid: 12,
                            photo: "../static/musican/anthony_sibbert.png",
                            name: "Anthony Sibbert",
                            description: "Description"
                        },
                        {
                            uid: 13,
                            photo: "../static/musican/emma_wikkers.png",
                            name: "Emma Wikkers",
                            description: "Musican girl"
                        },
                        {
                            uid: 14,
                            photo: "../static/musican/victoria_benson.png",
                            name: "Victoria Benson",
                            description: "Who is she"
                        },
                        {
                            uid: 15,
                            photo: "../static/musican/john_flack.png",
                            name: "John Flack",
                            description: "Rocketman"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "comedian",
                    people: [
                        {
                            uid: 16,
                            photo: "../static/comedian/jessica_ferrow.png",
                            name: "Jessica Ferrow",
                            description: "Standup genius"
                        },
                        {
                            uid: 17,
                            photo: "../static/comedian/phillip_emerson.png",
                            name: "Phillip Emerson",
                            description: "Comedian"
                        },
                        {
                            uid: 18,
                            photo: "../static/comedian/brett_spirs.png",
                            name: "Brett Spirs",
                            description: "Noname"
                        },
                        {
                            uid: 19,
                            photo: "../static/comedian/tina_falmer.png",
                            name: "Tina Falmer",
                            description: "Good comic"
                        },
                        {
                            uid: 20,
                            photo: "../static/comedian/sarah_elm.png",
                            name: "Sarah Elm",
                            description: "Girl"
                        },
                        {
                            uid: 21,
                            photo: "../static/comedian/alex_osborne.png",
                            name: "Alex Osborne",
                            description: "Description"
                        },
                        {
                            uid: 22,
                            photo: "../static/comedian/sofie_der_tiss.png",
                            name: "Sofie Der Tiss",
                            description: "Pretty girl"
                        },
                        {
                            uid: 23,
                            photo: "../static/comedian/olivia_silver.png",
                            name: "Olivia Silver",
                            description: "The worst comic ever"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "model",
                    people: [
                        {
                            uid: 0,
                            photo: "../static/model/pennie_wine.png",
                            name: "Pennie Wine",
                            description: "Like a old red wine"
                        },
                        {
                            uid: 1,
                            photo: "../static/model/elaine_winter.png",
                            name: "Elaine Winter",
                            description: "Pretty photo  model"
                        },
                        {
                            uid: 2,
                            photo: "../static/model/vito_cassano.png",
                            name: "Vito Cassano",
                            description: "Old model guy"
                        },
                        {
                            uid: 3,
                            photo: "../static/model/paco_rodrigez.png",
                            name: "Paco Rodrigez",
                            description: "Good model"
                        },
                        {
                            uid: 4,
                            photo: "../static/model/anna_olssen.png",
                            name: "Anna Ollson",
                            description: "Good girl"
                        },
                        {
                            uid: 5,
                            photo: "../static/model/alec_ivanov.png",
                            name: "Alec Ivanov",
                            description: "Some text"
                        },
                        {
                            uid: 6,
                            photo: "../static/model/diana_fellini.png",
                            name: "Diana Fellini",
                            description: "Pretty girl"
                        },
                        {
                            uid: 7,
                            photo: "../static/model/noy_frinck.png",
                            name: "Noy Frinck",
                            description: "Just man"
                        }
                    ]
                }
            ],
            news: {
                topThree: [
                    {
                        id: 1,
                        photo: "../static/news/top3/news_1.png",
                        text:
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam in aut quam" +
                            "perferendis repellendus itaque ducimus aliquid, architecto facilis perspiciatis?",
                        date: "12 May 2020",
                        link: "#"
                    },
                    {
                        id: 2,
                        photo: "../static/news/top3/news_2.png",
                        text:
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam in aut quam perferendis.",
                        date: "9 May 2020",
                        link: "#"
                    },
                    {
                        id: 3,
                        photo: "../static/news/top3/news_3.png",
                        text:
                            "Lorem ipsum dolor, amet consectetur adipisicing.",
                        date: "3 May 2020",
                        link: "#"
                    }
                ],
                mainNews: {
                    id: 4,
                    photo: "../static/news/main_news.png",
                    text: "Lorem ipsum dolor, sit amet consectetur.",
                    date: "1 May 2020",
                    link: "#"
                },
                newsSlider: [
                    {
                        id: 5,
                        photo:
                            "../static/news/news_slider-on_homepage/news_1.png",
                        text:
                            "Motivation And Your Personal Vision An Unbeatable Force 1",
                        date: "14 March 2020",
                        link: "#"
                    },
                    {
                        id: 6,
                        photo:
                            "../static/news/news_slider-on_homepage/news_2.png",
                        text:
                            "Motivation And Your Personal Vision An Unbeatable Force 2",
                        date: "15 March 2020",
                        link: "#"
                    },
                    {
                        id: 7,
                        photo:
                            "../static/news/news_slider-on_homepage/news_3.png",
                        text:
                            "Motivation And Your Personal Vision An Unbeatable Force 3",
                        date: "13 March 2020",
                        link: "#"
                    },
                    {
                        id: 8,
                        photo:
                            "../static/news/news_slider-on_homepage/news_4.png",
                        text:
                            "Motivation And Your Personal Vision An Unbeatable Force 4",
                        date: "12 March 2020",
                        link: "#"
                    }
                ],
                regularNews: {
                    id: 9,
                    photo: "./static/news/regular_on_homepage.png",
                    text:
                        "Dream Interpretation Common Symbols And Their Meanings.",
                    date: "11 March 2020",
                    link: "#"
                },
                videoNewsSlider: [
                    {
                        id: 10,
                        preview: "../static/news/video_news/preview_1.png",
                        link: "#"
                    },
                    {
                        id: 11,
                        preview: "../static/news/video_news/preview_2.png",
                        link: "#"
                    },
                    {
                        id: 12,
                        preview: "../static/news/video_news/preview_3.png",
                        link: "#"
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1920px;
    margin: auto;
}
</style>
