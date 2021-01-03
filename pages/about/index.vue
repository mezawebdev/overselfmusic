<template>
    <div id="about-page">
        <div class="container">
            <div>
                <img 
                    alt="overself band" 
                    :src="OVERSELF.pages.about.bandPicture" />
            </div>
            <div class="text">
                <p v-html="OVERSELF.pages.about.biography"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | About`
            }
        },
        mounted() {
            this.$forceUpdate();
        }
    }
</script>

<style lang="scss">
    #about-page {
        margin-bottom : 200px;

        @media (min-width : $breakpoint-md) {
            margin-top : 50px;
        }

        .container {
            @media (min-width : $breakpoint-md) {
                display               : grid;
                grid-template-columns : 1fr 1fr;
            }

            img {
                width      : 100%;
                box-shadow : $box-shadow-main;
            }

            .text {
                color          : $color-primary;
                box-shadow     : $box-shadow-main;
                // font-size      : 1.5em;
                background     : rgba(25, 25, 25, 0.5);
                padding        : 15px;
                margin-top     : -5px;
                display        : flex;

                @media (min-width : $breakpoint-md) {
                    margin-top : 0;
                }

                p {
                    // line-height : 1.3em;
                    margin      : auto;

                    a {
                        color           : $color-primary !important;
                        font-style      : italic;
                        text-decoration : underline;
                    }
                }
            }
        }
    }
</style>