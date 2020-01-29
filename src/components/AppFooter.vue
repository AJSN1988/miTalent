<template>
    <section class="footer-section">
        <div class="top">
            <div class="logo">
                <img src="../assets/img/logo_footer.png" alt="Footer logo image" />
            </div>
            <div
                class="subscribe"
                role="button"
                @mouseleave="toggleSubscribeButton($event)"
                @mouseenter="toggleSubscribeButton($event)"
                @click="subscriveNewsletter()"
            >
                <div class="text">Sign up our newsletter</div>
                <div class="icon">
                    <img src="../assets/img/mail.svg" alt="Mail logo" width="20" />
                    <img
                        src="../assets/img/mail_hovered.svg"
                        alt="Hovered mail logo"
                        width="20"
                        class="hovered"
                    />
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="copyright">&copy; MI Talent. Designed by AJSN1988 for Mass Impressions.</div>
            <div class="socials">
                <ul>
                    <li
                        role="link"
                        @mouseenter="toggleIcon($event)"
                        @mouseleave="toggleIcon($event)"
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
                        @mouseenter="toggleIcon($event)"
                        @mouseleave="toggleIcon($event)"
                        @click="goToModelSocial(model.links.instagram)"
                    >
                        <img
                            src="../assets/img/instagram.svg"
                            alt="Instagram social icon"
                            width="16"
                        />
                        <img
                            src="../assets/img/instagram_hovered.svg"
                            alt="Instagram hovered social icon"
                            width="16"
                            class="hovered"
                        />
                    </li>
                    <li
                        role="link"
                        @mouseenter="toggleIcon($event)"
                        @mouseleave="toggleIcon($event)"
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
                        @mouseenter="toggleIcon($event)"
                        @mouseleave="toggleIcon($event)"
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
        </div>
    </section>
</template>

<script>
export default {
    name: "AppFooterComponent",
    methods: {
        toggleSubscribeButton(e) {
            this.toggleIcon(e, e.target.querySelector(".icon"));
        },
        toggleIcon(event, element) {
            const el = element || event.target;
            const svgElements = el.children;

            let initElementVisible = "initial";
            let hoveredElementVisible = "none";

            if (event.type === "mouseenter") {
                initElementVisible = "none";
                hoveredElementVisible = "initial";
            }
            svgElements[0].style.display = initElementVisible;
            svgElements[1].style.display = hoveredElementVisible;
        },
        subscriveNewsletter() {
            console.log("Newsletter");
        },
        goToModelSocial(link) {
            console.log(link);
        }
    }
};
</script>

<style lang="scss">
@import "../scss/_common.scss";

.footer-section {
    margin: 169px 61px 49px;
    font-family: "NunitoRegular", Arial, sans-serif;
    .top {
        @include flex-row-wrap;
        justify-content: space-between;
        .subscribe {
            border-left: 2px solid $mainButtonColor;
            @include flex-row-wrap;
            justify-content: center;
            &:hover {
                cursor: pointer;
                border-color: $textColor;
                color: $hoveredLink;
            }
            .text {
                font-size: 0.875em;
                text-transform: uppercase;
                align-self: center;
                padding: 0 50px;
            }
            .icon {
                align-self: center;
                img.hovered {
                    display: none;
                }
            }
        }
    }
    .bottom {
        margin-top: 91px;
        @include flex-row-wrap;
        justify-content: space-between;
        .copyright {
            font-size: 0.9375em;
        }
        .socials {
            ul {
                padding: 0;
                margin: 0;
                list-style: none;
                @include flex-row-nowrap;
                justify-content: space-evenly;
                li {
                    align-self: center;
                    img.hovered {
                        display: none;
                    }
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
