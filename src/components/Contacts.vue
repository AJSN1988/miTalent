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
                    <div class="contact-us">
                        Contact us
                        <hr />
                    </div>
                    <span>Mass impressions</span>
                </div>
                <a
                    class="directions-link"
                    @mouseenter="toggleHoverViewButton($event)"
                    @mouseleave="toggleHoverViewButton($event)"
                >
                    <span>Get directions</span>
                    <div class="icon">
                        <img src="../assets/img/marker.svg" alt="Contact us link icon" width="24" />
                    </div>
                </a>
            </div>
            <div class="contacts-info-part">
                <div class="contacts-wrapper">
                    <div class="contacts">
                        <div class="greatings">
                            <p>We would love to hear from you, whether you want more inforamtion on any of our acts or wish to discover how our artists can support your event.</p>
                        </div>
                        <div class="all-contacts">
                            <div class="contact-item">
                                <div class="icon">
                                    <img
                                        src="../assets/img/home.svg"
                                        alt="Home contact icon"
                                        width="20"
                                    />
                                </div>
                                <div class="content">
                                    <ul>
                                        <li>79-81 Chelseas distr.</li>
                                        <li>London</li>
                                        <li>WC999 7TW</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <img
                                        src="../assets/img/phone.svg"
                                        alt="Phone numbers contact icon"
                                        width="20"
                                    />
                                </div>
                                <div class="content">
                                    <ul>
                                        <li>+44 (0) 234 567 0010</li>
                                        <li>+44 (0) 234 567 0011</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <img
                                        src="../assets/img/letter.svg"
                                        alt="Email contact icon"
                                        width="20"
                                    />
                                </div>
                                <div class="content">
                                    <ul>
                                        <li>hello@test.com</li>
                                        <li>admin@test.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    @include screen-1279 {
        margin-top: -99px;
    }
    .main-contacts-wrapper {
        height: 100vh;
        max-height: 1080px;
        min-height: 970px;
        @include screen-1279 {
            max-height: initial;
            height: fit-content;
        }
        @include flex-row-wrap;
        .directions-part {
            width: 40.3675%;
            @include flex-column-nowrap;
            @include screen-999 {
                height: 568px;
            }
            @include screen-1000-1279 {
                min-height: 768px;
            }
            @include screen-1279 {
                width: 100%;
            }
            .annotation,
            .directions-link {
                padding-left: 31.21%;
                @include screen-1280-1599 {
                    padding-left: 18%;
                }
            }
            .annotation {
                flex: 1;
                color: $mainWhite;
                @include flex-column-nowrap;
                justify-content: center;
                @include screen-1279 {
                    padding-left: 20px;
                }
                .contact-us {
                    font-family: "PoppinsRegular", Arial, sans-serif;
                    font-size: 6.3125em;
                    line-height: 1;
                    @include screen-599 {
                        font-size: 3.3125em;
                    }
                    @include screen-1279 {
                        margin-bottom: 20px;
                    }
                }
                hr {
                    border: none;
                    background-color: $mainWhite;
                    height: 7px;
                    width: 76px;
                    margin: -22px 30% 73px;
                    @include screen-1279 {
                        display: none;
                    }
                }
                span {
                    font-family: "NunitoSemiBold", Arial, sans-serif;
                    font-size: 1.0625em;
                    text-transform: uppercase;
                }
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
                    padding-left: 0;
                }
                span,
                .icon {
                    height: 100%;
                }
                span {
                    flex: 1;
                    background-color: $mainButtonColor;
                    font-family: "NunitoExtraBold", Arial, sans-serif;
                    font-size: 0.875em;
                    color: $mainWhite;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    @include flex-column-nowrap;
                    justify-content: center;
                    text-align: center;
                }
                .icon {
                    @include flex-row-nowrap;
                    justify-content: center;
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
            @include flex-column-nowrap;
            justify-content: center;
            .contacts-wrapper {
                background: linear-gradient(180deg, #b5d4d4 0%, #d8e6e6 100%);
                .contacts {
                    background-color: $mainWhite;
                    width: 80.195%;
                    @include screen-999 {
                        width: calc(100% - 20px);
                        margin-bottom: 80px;
                        @include flex-column-nowrap;
                        justify-content: center;
                    }
                    .greatings {
                        padding-left: 191px;
                        max-width: 600px;
                        @include screen-999 {
                            max-width: initial;
                            align-self: center;
                            padding: 0 40px;
                        }
                        @include screen-1279 {
                            padding-top: 70px;
                        }
                        @include screen-1280-1599 {
                            padding-left: 13%;
                        }
                        @include screen-1600-1919 {
                            padding-left: 20.9675%;
                        }
                        p {
                            padding-bottom: 131px;
                            margin: 0;
                            font-family: "PoppinsRegular", Arial, sans-serif;
                            font-size: 1.5em;
                            line-height: 1.8;
                            @include screen-999 {
                                padding: 0;
                            }
                            &::first-letter {
                                font-family: "PoppinsLight", Arial, sans-serif;
                                font-size: 3.5em;
                                float: left;
                                padding: 0 25px 0 0;
                                line-height: 1;
                            }
                        }
                    }
                    .all-contacts {
                        @include flex-row-wrap;
                        padding-left: 191px;
                        @include screen-999 {
                            padding: 70px 40px 0;
                        }
                        @include screen-1280-1599 {
                            padding-left: 13%;
                        }
                        @include screen-1600-1919 {
                            padding-left: 20.9675%;
                        }
                        .contact-item {
                            width: 50%;
                            @include flex-row-nowrap;
                            &:not(:last-child) {
                                margin-bottom: 70px;
                            }
                            @include screen-999 {
                                margin-bottom: 70px;
                                width: 100%;
                            }
                            .content {
                                padding-left: 36px;
                                font-family: "NunitoRegular", Arial, sans-serif;
                                color: $greyTextColor;
                                line-height: 2;
                                ul {
                                    padding: 0;
                                    margin: 0;
                                    list-style: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
