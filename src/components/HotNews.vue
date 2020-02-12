<template>
    <div class="top-3-news-wrapper">
        <div v-for="topNews in news" :key="topNews.id" class="top-3-news">
            <div class="photo">
                <img :src="topNews.photo" :alt="`Top 3 news ${topNews.id} photo`" />
            </div>
            <div class="description">
                <a :href="topNews.link">{{ topNews.text }}</a>
                <div class="date">{{ topNews.date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotNewsComponent",
    props: {
        news: {
            type: Array,
            required: true
        }
    },
    mounted() {
        // Reduce all top 3 news headers if need it
        document
            .querySelectorAll(".top-3-news .description a")
            .forEach(el => this.reduceNewsText(el, 50));
    },
    methods: {
        reduceNewsText(element, count) {
            const el = element;
            const text = el.innerHTML;
            if (text.length > count) {
                el.innerHTML = `${text.substring(0, count)} ...`;
            }
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";
.top-3-news-wrapper {
    margin: 0 120px;
    @include screen-1279 {
        margin: 0 20px;
    }
    @include flex-row-wrap;
    justify-content: space-between;
    .top-3-news {
        width: 33.333%;
        min-width: 300px;
        margin-bottom: 50px;
        @include flex-row-nowrap;
        @include screen-999 {
            width: 100%;
            flex-wrap: nowrap;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        @include screen-1000-1919 {
            flex-wrap: wrap;
        }
        .photo {
            img {
                @include screen-999 {
                    padding-top: 10px;
                }
                @include screen-1919 {
                    width: 95%;
                }
            }
        }
        .description {
            padding: 0 43px;
            @include screen-1919 {
                padding: 0;
            }
            width: 100%;
            flex-grow: 1;
            @include flex-column-nowrap;
            justify-content: space-between;
            @include screen-1000-1919 {
                justify-content: flex-end;
            }
            a {
                font-family: "PoppinsMedium", Arial, sans-serif;
                font-size: 1.5em;
                text-decoration: none;
                color: $textColor;
                &:hover {
                    color: $hoveredLink;
                }
                @include screen-999 {
                }
                @include screen-1000-1919 {
                    margin: 20px 10px 20px 0;
                }
            }
            .date {
                font-family: "NunitoRegular", Arial, sans-serif;
                color: $greyTextColor;
            }
        }
    }
}
</style>
