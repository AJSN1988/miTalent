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
            <div class="name">
                {{ model.name }}
                <hr />
            </div>
            <div class="text">{{ model.description }}</div>
        </div>
        <div
            class="photo"
            :style="{ 'background-image': 'url(' + model.photo + ')', 'background-position': 'left', 'background-size': 'cover' }"
        >
            <!-- <img :src="model.photo" alt="Top model photo" width="100%" /> -->
        </div>
        <div
            class="view-button"
            role="button"
            @mouseenter="toggleHoverViewButton($event)"
            @mouseleave="toggleHoverViewButton($event)"
            @click="showModelProfile($event)"
        >
            <div class="text button-part">View profile</div>
            <div class="icon button-part">
                <img src="../assets/img/view_profile.svg" alt="View profile icon" width="27" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TopModelInfoComponent",
    props: {
        model: {
            type: Object,
            required: true,
            default: null
        }
    },
    methods: {
        toggleSocialColor(e) {
            console.log(e);
            // if (e.type === "mouseleave") {
            // }
            // if (e.type === "mouseenter") {
            // }
        },
        toggleHoverViewButton(e) {
            const buttonIconSection = document.querySelector(
                ".icon.button-part"
            );
            const iconVisibility = "initial";
            let iconSectionWidth = "110px";

            if (e.type === "mouseenter") {
                // iconVisibility = "hidden";
                iconSectionWidth = "0";
            }

            // Toggle play icon
            buttonIconSection.querySelector(
                "img"
            ).style.visibility = iconVisibility;
            // Toggle icon button section
            buttonIconSection.style.width = iconSectionWidth;
        },
        showModelProfile() {
            // TODO add route to model profile
            console.log("Go to model profile");
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
    @include screen-1279 {
        margin-top: 170px;
    }
    .socials {
        height: 100%;
        width: 13%;
        @include screen-1279 {
            width: 5%;
            padding-left: 20px;
            position: absolute;
            height: auto;
            top: 29%;
        }
        padding-left: 61px;
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
        @include screen-1279 {
            width: 0;
        }
        .name {
            position: absolute;
            top: 50%;
            font-size: 5vw;
            @include screen-min-1920 {
                font-size: 6em;
            }
            @include screen-1279 {
                left: 5%;
            }
            width: 35%;
            font-family: "PoppinsRegular", Arial, sans-serif;
            line-height: 1.1;
            hr {
                background-color: $mainWhite;
                border: none;
                height: 7px;
                position: absolute;
                display: block;
                bottom: 20px;
                right: 60px;
                width: 56px;
                margin: 0;
                @include screen-1279 {
                    display: none;
                }
            }
        }
        .text {
            bottom: 25%;
            position: absolute;
            text-transform: uppercase;
            font-family: "NunitoSemiBold", Arial, sans-serif;
            letter-spacing: 2px;
            font-size: 1.063em;
            @include screen-1279 {
                left: 5%;
            }
        }
    }
    .photo {
        height: 100%;
        width: 76%;
        @include screen-1279 {
            width: 100%;
            margin-left: -7%;
            flex-grow: 1;
            z-index: -1;
        }
    }
    .view-button {
        height: 110px;
        position: absolute;
        left: 61px;
        bottom: 0;
        min-width: 320px;
        @include screen-1279 {
            left: 0;
            bottom: 10px;
        }
        width: calc(18% + 110px);
        @include flex-row-nowrap;
        text-align: center;
        &:hover {
            cursor: pointer;
        }
        .button-part {
            @include flex-column-nowrap;
            justify-content: center;
        }
        .text {
            flex-grow: 1;
            background-color: $mainButtonColor;
            color: $mainWhite;
            font-family: "NunitoExtraBold", Arial, sans-serif;
            text-transform: uppercase;
            font-size: 1.063em;
            letter-spacing: 2px;
            transition: 0.5s ease-in;
        }
        .icon {
            width: 110px;
            background-color: $mainWhite;
            transition: 0.5s ease-in;
            overflow: hidden;
            img {
                align-self: center;
            }
        }
    }
}
</style>
