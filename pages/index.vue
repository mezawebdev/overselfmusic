<!--
||----------------------------------||
||                                  ||
||    Example Component             ||
||    Example Component             ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="home-component">
        <div class="container">
            <div 
                v-if="OVERSELF.pages.home.featuredVideoId !== 'no-video'"
                @click="toggleVideo"
                class="video-promo">
                <div id="player">
                    <youtube 
                        :video-id="OVERSELF.pages.home.featuredVideoId" 
                        :player-vars="{ 
                            autoplay: 1,
                            mute: 1,
                            playsinline: 1,
                            loop: 1,
                            playlist: OVERSELF.pages.home.featuredVideoId,
                            controls: 0
                        }"
                        @ready="onPlayerReady">
                    </youtube>
                </div>
                <div v-if="!videoPlaying" class="overlay"></div>
                <img v-if="!videoPlaying" src="~assets/images/play-btn.png" />
            </div>
            <div 
                v-if="OVERSELF.pages.home.featuredVideoId === 'no-video'"
                class="image-promo">
                <nuxt-link :to="OVERSELF.pages.home.cta.linkTo">
                    <img :src="OVERSELF.pages.home.featuredImageSrc" />
                </nuxt-link>
            </div>
            <div class="text">
                <h1>
                    <a 
                        v-html="OVERSELF.pages.home.cta.copy"
                        :href="OVERSELF.pages.home.cta.linkTo">
                    </a>
                </h1>
            </div>
            <div class="spotify">
                <iframe 
                    src="https://open.spotify.com/embed/album/3Wi6jCFKpciz9AscUE0Hix" 
                    width="100%" 
                    height="80" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
                </iframe>
            </div>
            <hr />
            <div class="body">
                <HomeSection>
                    <h3>MORE MUSIC</h3>
                    <iframe 
                        src="https://open.spotify.com/embed/playlist/3Kla557ETgKn3bjxmwZ4k9" 
                        width="100%" 
                        height="350" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media">
                    </iframe>
                </HomeSection>
            </div>
        </div>
	</div>	
</template>

<script>
    import { mapActions } from "vuex";
    import HomeSection from "~/components/Layout/HomeSection.vue";

    export default {
        components: {
            HomeSection
        },
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | Home`
            }
        },
        name: "example",
        data() {
            return {
                player: null,
                videoPlaying: false,
                done: false
            };
        },
        created() {
            this.setLayout("main");
        },
        methods : {
            onPlayerReady(event) {
                this.player = event.target;
                this.player.mute();
                this.player.playVideo();
            },
            onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !this.done) {
                    // setTimeout(this.stopVideo, 6000);
                    // this.done = true;
                }
            },
            stopVideo() {
                this.player.stopVideo();
            },
            toggleVideo() {
                if (! this.videoPlaying) {
                    this.player.unMute();
                    this.player.seekTo(0);
                    this.player.playVideo();
                    this.videoPlaying = true;
                }
            },
            ...mapActions({
                setLayout: "setLayout"
            })
        }
    };
</script>

<style lang="scss">
    #home-component {
        color : $white;

        hr {
            margin        : 50px 0px;
            border-color  : rgb(230, 230, 230);
            border-bottom : none;
            max-width     : 100px;
            transform     : translate(-50%, 0);
            text-align    : center;
            left          : 50%;
            position      : relative;
            display       : block;

            @media (min-width : $breakpoint-md) {
                // margin : 70px 0px;
            }
        }

        .spotify {
            margin-top  : 25px;

            iframe {
                max-width     : 300px;
                border-radius : 5px;
                display       : block;
                margin        : 0 auto;
                box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.75);
            }
        }


        .image-promo {
            img {
                width      : 80%;
                margin     : 0 auto;
                max-width  : 400px;
                display    : block;
                box-shadow : 0px 2px 16px rgba(0, 0, 0, 0.5);

                @media (min-width : $breakpoint-md) {
                    max-width : 500px;
                }
            }
        }

        .video-promo {
            width      : 80%;
            height     : 135px;
            max-width  : 600px;
            background : black;
            margin     : 0 auto;
            position   : relative;
            box-shadow : 0px 2px 16px rgba(0, 0, 0, 0.5);
            cursor     : pointer;

            @media (min-width : $breakpoint-sm) {
                height : 260px;
            }

            @media (min-width : $breakpoint-md) {
                height : 310px;
            }

            img {
                display   : block;
                transform : translate(-50%, -50%);
                left      : 50%;
                width     : 80px;
                top       : 50%;
                position  : relative;
                z-index   : 6;
            }

            .overlay {
                width         : 100%;
                height        : 100%;
                border-radius : 5px;
                position      : absolute;
                background    : rgba(0, 0, 0, 0.5);
                top           : 0px;
                left          : 0px;
                z-index       : 5;
            }

            iframe {
                width         : 100%;
                border-radius : 5px;
                height        : 100%;
                position      : absolute;
            }
        }

        .pulses-logo {
            display    : block;
            margin     : 0 auto;
            margin-top : 35px;
            width      : 80px;
            filter     : $nav-drop-shadow;
        }

        .message {
            text-align : center;
            margin-top : 20px;
            font-size  : 1.7em;
            
            p {
                color : $color-primary;
            }
        }

        .text {
            font-size  : 2em;
            color      : $color-primary;
            text-align : center;
            margin-top : 25px;
            text-shadow : $text-shadow-main;

            h1 {
                line-height : 1;
                font-size   : 1em !important;

                span {
                    &.heading {
                        font-size : 1em;
                    }

                    &.subheader {
                        font-size : 0.5em;
                    }
                }

                a {
                    color           : $color-primary;
                    text-decoration : none;
                }
            }
        }

        .body {
            
        }
    }
</style>