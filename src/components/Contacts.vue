<template>
    <section class="main-contacts-section">
        <div class="main-contacts-wrapper">
            <div
                class="directions-part"
                :style="{
                    background: `url('../static/contacts_background.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }"
            >
                <div class="annotation">
                    <div class="contact-us">Contact us</div>
                    <span>Mass impressions</span>
                </div>
                <a
                    class="directions-link"
                    @mouseenter="toggleHoverViewButton($event)"
                    @mouseleave="toggleHoverViewButton($event)"
                >
                    <span>Get directions</span>
                    <div class="icon">
                        <img src="../assets/img/contact.svg" alt="Contact us link icon" width="16" />
                    </div>
                </a>
            </div>
            <div class="contacts-info-part"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MainCintactsComponent",
    methods: {
        toggleHoverViewButton(e) {
            if (window.matchMedia("(max-width: 1279px)").matches) {
                return false;
            }
            const iconSection = document.querySelector(
                ".directions-link .icon"
            );
            let iconOpacity = "1";
            let iconWidth = "110px";

            if (e.type === "mouseenter") {
                iconWidth = "0";
                iconOpacity = "0";
            }

            iconSection.style.width = iconWidth;
            iconSection.querySelector("img").style.opacity = iconOpacity;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/_common.scss";
.main-contacts-section {
    margin-top: -181px;
    max-width: 1920px;
    .main-contacts-wrapper {
        height: 100vh;
        max-height: 1080px;
        min-height: 970px;
        @include flex-row-wrap;
        .directions-part {
            width: 40.3675%;
            @include flex-column-nowrap;
            .annotation,
            .directions-link {
                padding-left: 240px;
            }
            .annotation {
                flex: 1;
            }
            .directions-link {
                height: 110px;
                min-width: 320px;
                @include flex-row-nowrap;
                &:hover {
                    cursor: pointer;
                }
                @include screen-1279 {
                    max-width: 420px;
                    min-width: 320px;
                }
                span,
                .icon {
                    align-self: center;
                    text-align: center;
                    padding: 45px 0;
                }
                span {
                    flex: 1;
                    background: linear-gradient(
                        270deg,
                        rgba(180, 211, 211, 1) 38%,
                        rgba(212, 227, 227, 1) 100%
                    );
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    font-size: 0.875em;
                    color: $mainWhite;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .icon {
                    background-color: $descriptionBackground;
                    width: 110px;
                    transition: all 0.5s linear;
                    img {
                        transition: opacity 0.3s ease-out;
                    }
                }
            }
        }
        .contacts-info-part {
            flex: 1;
        }
    }
}
</style>
