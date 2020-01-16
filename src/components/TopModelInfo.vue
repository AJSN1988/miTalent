<template>
    <section class="top-model-info">
        <div class="socials">
            <ul>
                <li
                    role="link"
                    @mouseenter="toggleSocialColor($event)"
                    @mouseleave="toggleSocialColor($event)"
                    @click="goToModelSocial(model.links.facebook)"
                >
                    <img src="../assets/img/facebook.svg" alt="Facebook social icon" width="16" />
                    <img
                        src="../assets/img/facebook_hovered.svg"
                        alt="Facebook hovered social icon"
                        width="16"
                        class="hovered"
                    />
                </li>
                <li
                    role="link"
                    @mouseenter="toggleSocialColor($event)"
                    @mouseleave="toggleSocialColor($event)"
                    @click="goToModelSocial(model.links.instagram)"
                >
                    <img src="../assets/img/instagram.svg" alt="Instagram social icon" width="16" />
                    <img
                        src="../assets/img/instagram_hovered.svg"
                        alt="Instagram hovered social icon"
                        width="16"
                        class="hovered"
                    />
                </li>
                <li
                    role="link"
                    @mouseenter="toggleSocialColor($event)"
                    @mouseleave="toggleSocialColor($event)"
                    @click="goToModelSocial(model.links.youtube)"
                >
                    <img src="../assets/img/youtube.svg" alt="Youtube social icon" width="16" />
                    <img
                        src="../assets/img/youtube_hovered.svg"
                        alt="Youtube hovered social icon"
                        width="16"
                        class="hovered"
                    />
                </li>
                <li
                    role="link"
                    @mouseenter="toggleSocialColor($event)"
                    @mouseleave="toggleSocialColor($event)"
                    @click="goToModelSocial(model.links.twitter)"
                >
                    <img src="../assets/img/twitter.svg" alt="Twitter social icon" width="16" />
                    <img
                        src="../assets/img/twitter_hovered.svg"
                        alt="Twitter hovered social icon"
                        width="16"
                        class="hovered"
                    />
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
            :style="{ 'background-image': 'url(' + model.photo + ')', 'background-position': 'center', 'background-size': 'cover' }"
        />
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
            const svgElements = e.target.children;
            let initElementVisible = "initial";
            let hoveredElementVisible = "none";

            if (e.type === "mouseenter") {
                initElementVisible = "none";
                hoveredElementVisible = "initial";
            }
            svgElements[0].style.display = initElementVisible;
            svgElements[1].style.display = hoveredElementVisible;
        },
        toggleHoverViewButton(e) {
            const allButtonIconSections = document.querySelectorAll(
                ".icon.button-part"
            );
            const buttonIconSection = allButtonIconSections[this.model.id - 1];
            const iconVisibility = "initial";
            let iconSectionWidth = "110px";

            if (e.type === "mouseenter") {
                iconSectionWidth = "0";
            }

            // Toggle play icon
            buttonIconSection.querySelector(
                "img"
            ).style.visibility = iconVisibility;
            // Toggle icon button section
            buttonIconSection.style.width = iconSectionWidth;
        },
        goToModelSocial(link) {
            window.open(link);
        },
        showModelProfile() {
            // TODO add route to model profile
            console.log(`Go to model with id ${this.model.id}`);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";

.top-model-info.active {
    opacity: 1;
    z-index: 1;
    left: 0;
    // Animate
    overflow: hidden;
    @include screen-767 {
        overflow: initial;
    }
    .socials {
        ul {
            li {
                margin-left: 0;
            }
        }
    }
    .description {
        .name,
        .text {
            opacity: 1;
        }
    }
    .photo {
        margin-left: 0;
        // @include screen-767 {
        //     height: 362px;
        // }
        @include screen-1279 {
            width: 100%;
            margin-left: -7%;
            flex-grow: 1;
            z-index: -1;
        }
    }
    .view-button {
        bottom: 0;
        @include screen-767 {
            bottom: -110px;
            // width: 100%;
        }
        @include screen-1279 {
            // left: 0;
            min-width: 320px;
        }
    }
}
.top-model-info {
    opacity: 0;
    @include flex-row-nowrap;
    height: 75vh;
    min-height: 540px;
    width: 100%;
    margin-top: 25vh;
    position: absolute;
    left: -100%;
    @include screen-h-720 {
        margin-top: 180px;
    }
    @include screen-min-h-1200 {
        height: 75%;
        margin-top: 18%;
    }
    @include screen-767 {
        height: 562px;
        padding-top: 88px;
    }
    @include screen-1279 {
        padding-top: 88px;
        margin-top: 0;
        height: calc(100% - 88px);
    }
    .socials {
        height: calc(100% - 110px);
        width: 13%;
        @include screen-767 {
            width: 100%;
            position: absolute;
            padding: 0;
            height: auto;
            bottom: 0;
        }
        @include screen-768-1279 {
            width: 5%;
            padding-left: 0;
            position: absolute;
            top: 0;
            padding-top: 88px;
            z-index: 3;
        }
        padding-left: 61px;
        ul {
            margin: 0;
            padding: 0;
            @include screen-767 {
                @include flex-row-nowrap;
                justify-content: space-around;
                height: 50px;
            }
            @include screen-768-1279 {
                padding: 35px 0 0 20px;
            }
            list-style: none;
            li {
                margin-bottom: 40px;
                width: 16px;
                &:hover {
                    cursor: pointer;
                }
                @include screen-767 {
                    margin: 0;
                    align-self: center;
                }
                .hovered {
                    display: none;
                }
                // For animate
                margin-left: -100px;
                @for $i from 1 to 5 {
                    &:nth-child(#{$i}) {
                        transition: $i * 0.25s ease-out;
                    }
                }
            }
        }
    }
    .description {
        width: 5%;
        z-index: 1;
        height: 66.6666%;
        @include flex-column-nowrap;
        justify-content: flex-end;
        @include screen-767 {
            height: 150px;
            width: 100%;
            position: absolute;
            bottom: 50px;
            justify-content: center;
        }
        @include screen-768-1279 {
            height: calc(100% - 145px);
            justify-content: flex-end;
        }
        // For animate
        transition: 1s ease;
        .name {
            font-size: 5.3vw;
            position: relative;
            min-width: 300px;
            // For animate
            transition: opacity 1.5s ease-out;
            opacity: 0;
            @include screen-min-1920 {
                font-size: 6em;
            }
            @include screen-767 {
                font-size: 3em;
                padding-left: 20px;
            }
            @include screen-1279 {
                bottom: 20px;
                top: 0;
                min-width: initial;
            }
            @include screen-768-1279 {
                font-size: 6em;
                padding-left: 58px;
            }
            width: fit-content;
            font-family: "PoppinsRegular", Arial, sans-serif;
            line-height: 1.1;
            hr {
                background-color: $mainWhite;
                border: none;
                height: 7px;
                position: absolute;
                width: 56px;
                margin: 0;
                right: 5px;
                bottom: 15px;
                @include screen-1279 {
                    display: none;
                }
            }
        }
        .text {
            margin-top: 20px;
            white-space: nowrap;
            text-transform: uppercase;
            font-family: "NunitoSemiBold", Arial, sans-serif;
            letter-spacing: 2px;
            font-size: 1.063em;
            // For animate
            transition: opacity 2s ease-out;
            opacity: 0;
            @include screen-767 {
                padding-left: 20px;
                margin-top: 10px;
            }
            @include screen-768-1279 {
                padding-left: 58px;
            }
        }
    }
    .photo {
        height: 100%;
        width: calc(78% - 15px);
        @include screen-767 {
            height: 362px;
        }
        // @include screen-1279 {
        //     width: 100%;
        //     margin-left: -7%;
        //     flex-grow: 1;
        //     z-index: -1;
        // }
        // For animate
        transition: 0.6s ease-in;
        margin-left: 100%;
    }
    .view-button {
        height: 110px;
        position: absolute;
        left: 61px;
        bottom: 0;
        z-index: 2;
        // For animate
        bottom: -110px;
        transition: 0.9s ease-in-out;
        @include screen-767 {
            bottom: -110px;
            width: 100%;
        }
        @include screen-1279 {
            left: 0;
            // min-width: 320px;
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
            @include screen-767 {
                transition: none;
            }
        }
        .icon {
            width: 110px;
            @include screen-767 {
                width: 0;
                transition: none;
            }
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
