<template>
    <div class="cookie-notice">
        <button @click="acceptCookie">
            <div class="button-placeholder">
                <i class="fas fa-times"></i>
            </div>
        </button>
        This webstore uses cookies to improve your experience.
        <nuxt-link 
            @click.native="acceptCookie"
            to="/shop/cookie-policy">
            Cookie Policy
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        methods: {
            acceptCookie() {
                document.cookie = "accepted-cookies=true;";
                this.$emit("closeCookieNotice");
            }
        }
    }
</script>

<style lang="scss">
    .cookie-notice {
        font-size               : 0.8em;
        bottom                  : 15px;
        position                : fixed;
        width                   : 100px;
        background              : $white;
        color                   : black;
        left                    : 50%;
        z-index                 : 50;
        border-radius           : 5px;
        filter                  : drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.4));
        opacity                 : 0;
        padding                 : 10px;
        transform               : translateX(-45%) translateY(-10px);
        -webkit-animation-delay : 4s;
        animation-delay         : s;
        animation               : fade-in-down 1.5s ease-in-out 1 forwards;

        @keyframes fade-in-down {
            0% { 
                opacity   : 0;
                transform : translateX(-45%) translateY(-10px);
            }

            100% { 
                opacity   : 1;
                transform : translateX(-45%) translateY(0);
            }
        }

        a {
            color : black;
        }

        button {
            position : absolute;
            right    : -11px;
            width    : 30px;
            height   : 30px;
            border   : none;
            top      : -11px;

            .button-placeholder {
                background      : black;
                color           : white;
                border-radius   : 12px;
                position        : absolute;
                width           : 24px;
                top             : 3px;
                display         : flex;
                justify-content : center;
                align-items     : center;
                left            : 3px;
                height          : 24px;
                border          : 1px solid white;
            }
        }
    }
</style>