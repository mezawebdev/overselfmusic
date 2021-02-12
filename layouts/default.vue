<template>
    <div id="default-template">
        <LoadingOverlay v-if="loadingOverlay" />
        <Spotlight v-if="spotlight" />
        <Background />
        <Navigation />
        <div class="page">
            <transition 
                name="fade" 
                mode="out-in">
                <nuxt />
            </transition>
        </div>
        <CookieNotice 
            @closeCookieNotice="closeCookieNotice"
            v-if="showCookieNotice" />
    </div>
</template>

<script>
    import Navigation from "~/components/Navigation.vue";
    import Background from "~/components/Background.vue";
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import LoadingOverlay from "~/components/LoadingOverlay.vue";
    import CookieNotice from "~/components/Shop/CookieNotice.vue";
    import Spotlight from "~/components/Spotlight.vue";

    export default {
        components: {
            Navigation,
            Background,
            LoadingOverlay,
            CookieNotice,
            Spotlight
        },
        computed: {
            ...mapGetters({
                loadingOverlay: "loadingOverlay",
                spotlight: "spotlight"
            })
        },
        watch: {
            $route(to, from, next) {
                this.onRouteChange(to);

                window.scrollTo(0, 0);


                if (!this.$getCookie("accepted-cookies") && this.$route.path.includes("/shop")) {
                    this.showCookieNotice = true;
                } else {
                    this.showCookieNotice = false;
                }
            }
        },
        data() {
            return {
                showCookieNotice: false
            }
        },
        beforeMount() {
            this.setBackground("default");
            this.onRouteChange({ to: { name: "default" } });
        },
        mounted() {
            this.checkCookies();
            
            if (!this.$getCookie("accepted-cookies") && this.$route.path.includes("/shop")) {
                this.showCookieNotice = true;
            }
        },
        methods: {
            getCookie(cookiename) {
                var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
                return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
            },
            checkCookies() {
                if (this.$getCookie("cart")) {
                    this.overrideCart(JSON.parse(this.$getCookie("cart")));
                }
            },
            closeCookieNotice() {
                this.showCookieNotice = false;
            },
            onRouteChange(to) {
                // switch (to.name) {
                //     case "music-release":
                //         let release = this.OVERSELF.pages.music.releases.find(release => { return release.path === this.$route.params.release });
                //         this.setLayout("promo");
                //         this.setBackground(release.background);
                //     break;
                //     case "shop-item-item" || "shop":
                //         this.setLayout("shop");
                //         this.setBackground("default");
                //     break;
                //     default:
                //         this.setLayout("main");
                //         this.setBackground("default");
                //     break;
                // }
            },
            ...mapActions({
                setBackground: "setBackground",
                setLayout: "setLayout",
                overrideCart: "shop/overrideCart"
            })
        }
    }
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }

    body {
        overflow-x  : hidden;
        font-weight : $font-weight-p;
        background  : rgb(10, 10, 10);
        line-height : 1;
        font-family : $font-family;
    }

    p,
    a,
    label,
    button,
    h1 {
        font-family    : $font-family !important;
        background     : none;
        letter-spacing : $letter-spacing;
    }

    a {
        color : $white;

        &:hover,
        &:active,
        &:focus {
            text-decoration : none;
        }
    }

    p {
        font-weight : $font-weight-p;
        line-height : $line-height;
        font-size   : $m-font-size-p;
        color       : $color-primary;

        &.white {
            color : $white;
        }

        &.dark-gray {
            color : $black;
        }
    }

    .scroll-lock {
        overflow-y : hidden !important;
        overflow-x : hidden !important;
    }

    h1 {
        font-size      : $m-font-size-h1;
        line-height    : $m-line-height-h1;
        letter-spacing : $letter-spacing;
        color          : $color-primary;
        text-shadow    : $text-shadow-main;
        line-height    : $m-line-height-h1;

        @media (min-width : $breakpoint-md) {
            font-size   : $d-font-size-h1;
            line-height : $d-line-height-h1;
        }

        span {
            color : $color-primary;
        }
    }

    h4 {
        letter-spacing : $letter-spacing;
        font-size      : $m-font-size-h4;
    }

    #router-view {

    }

    .button-main {
        padding       : 10px 15px 10px 15px;
        border-radius : 100px;
        background    : $color-primary;
        border        : none;
        color         : #fff;
        text-shadow   : 0px 1px 4px rgba(0, 0, 0, 1);
        box-shadow    : 0px 2px 4px rgba(0, 0, 0, 0.5);
        font-weight   : bold;
    }

    .page {
        margin-top : 25px;
        margin-bottom : 100px;
    }

    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    @media (min-width: 768px) {
        .container {
        width: 750px;
        }
    }
    @media (min-width: 992px) {
        .container {
        width: 970px;
        }
    }
    @media (min-width: 1200px) {
        .container {
        width: 1170px;
        }
    }

    .vue-back-to-top {
        bottom : 15px !important;
        left   : 15px !important;
        right  : auto !important;

        .default {
            font-family : $font-family;
            width       : auto !important;
            padding     : 0px 10px !important;
            background  : $color-primary !important;
        }
        
    }

    .transform-center-hor {
        transform : translateX(-50%);
        left      : 50%;
        position  : relative;
    }

    .fade-enter-active {
		animation: view-transition-in 0.2s ease-in-out;
	}

	.fade-leave-active {
		animation: view-transition-out 0.2s ease-in-out;
    }
    
    @keyframes view-transition-out {
        0% {
            opacity : 1;
        }
        100% {
            opacity : 0;
        }
    }

    @keyframes view-transition-in {
        0% {
            opacity : 0;
        }
        100% {
            opacity : 1;
        }
    }
</style>