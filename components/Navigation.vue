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
	<div id="navigation">
        <img 
            alt="overself band music" 
            class="logo" 
            src="/assets/images/Logo-White.png" />
        <div class="container">
            <div class="nav-links">
                <!-- <a 
                    v-if="layout === 'promo'"
                    class="smaller"
                    @click="onGoBackClick">
                    <i class="fas fa-chevron-left"></i>
                    ALL MUSIC
                </a> -->
                <nuxt-link 
                    v-if="layout === 'promo'"
                    to="/music" 
                    class="back-to-music"
                    exact>
                    <i class="fas fa-chevron-left"></i>
                    Browse all music
                </nuxt-link>
                <nuxt-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    to="/" 
                    exact>
                    home
                </nuxt-link>
                <span v-if="layout === 'main'">&middot;</span>
                <router-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    to="/about" 
                    exact>
                    about
                </router-link>
                <span v-if="layout === 'main'">&middot;</span>
                <nuxt-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    to="/music" 
                    exact>
                    music
                </nuxt-link>
                <!-- <span v-if="layout === 'main'">&middot;</span> -->
                <!-- <router-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    to="/live" 
                    class="live"
                    exact>
                    LIVE
                </router-link> -->
                <!-- <span v-if="layout === 'main'">&middot;</span>
                <nuxt-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    class="gallery"
                    to="/gallery" 
                    exact>
                    GALLERY
                </nuxt-link> -->
                <span v-if="layout === 'main'">&middot;</span>
                <nuxt-link 
                    v-if="layout === 'main'"
                    active-class="active" 
                    class="contact" 
                    to="/contact" 
                    exact>
                    contact
                </nuxt-link>
            </div>
            <div
                class="social-links"
                v-if="layout === 'main'">
                <div 
                    class="grid"
                    :class="[
                        { 'main' : layout === 'main' },
                        { 'promo' : layout === 'promo' }
                    ]">
                    <div>
                        <a target="_blank" href="https://open.spotify.com/artist/5godAayOM6aA2YykaRzcUM?si=FlJ9HnFcQD2asG6M8XfMjw">
                            <i class="fab fa-spotify"></i>
                        </a>
                    </div>
                    <div v-if="layout === 'main'">
                        <a target="_blank" href="https://youtube.com/c/Overself">
                            <i class="fab fa-youtube"></i>
                        </a> 
                    </div>
                    <div>
                        <!-- <a target="_blank" href="http://twitter.com/overselfmusic">
                            <i class="fab fa-twitter"></i>
                        </a> -->
                        <a target="_blank" href="http://instagram.com/overselfmusic">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://vm.tiktok.com/ZMJ76yA2R/">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
	</div>	
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "example",
        computed: mapGetters([
            "layout"
        ]),
        data() {
            return {
                prevRoute: null
            };
        },
        methods: {
            onGoBackClick() {
                this.$router.push("/music");
            }
        }
    };
</script>

<style lang="scss">
    #navigation {
        width       : 100vw;
        z-index     : 10;
        top         : 0px;
        left        : 0px;
        position    : relative;

        @media (max-height : 450px) {
            position : relative;
        }

        a {
            cursor : pointer;
        }

        .logo {
            transform  : translateX(-50%);
            left       : 50%;
            margin-top : 35px;
            width      : 200px;
            position   : relative;
            filter     : $nav-drop-shadow;
        }

        .container {
            .nav-links {
                filter     : $nav-drop-shadow;
                margin-top : 15px;
                text-align : center;
                color      : $color-primary;

                .back-to-music {
                    margin-top  : 5px;
                    font-size   : 0.9em;
                    font-weight : 400
                }

                i {
                    font-size : 0.9em;
                }
                    
                a,
                p {
                    
                    font-size       : 1.15em;
                    text-decoration : none;
                    display         : inline-block;
                    position        : relative;
                    color           : $color-primary;
                    margin-bottom   : 5px;
                    text-shadow     : $text-shadow-main;

                    @media (min-width : $breakpoint-sm) {
                        font-size : 1.25em;
                    }

                    &:hover {
                        transition : transform 0.15s ease-in-out;
                        transform  : scale(1.1) !important;
                    }

                    &.active { 
                        text-decoration : underline;
                    }
                    
                    // &:last-child {
                    //     margin-bottom : 0px;
                    // }

                    // &.smaller {
                    //     background : rgba(0, 0, 0, 0.4);
                    //     padding    : 5px;
                    // }

                    // &.active {
                    //     // &:after {
                    //     //     content       : '';
                    //     //     width         : 8px;
                    //     //     height        : 8px;
                    //     //     background    : $color-primary;
                    //     //     display       : block;
                    //     //     border-radius : 4px;
                    //     //     position      : absolute;
                    //     //     right         : 6px;
                    //     //     top           : 10px;
                    //     // }
                    // }

                    // &.gallery, 
                    // &.contact {
                    //     &:after {
                    //         right : -13px;
                    //     }
                    // }

                    // &.live {
                    //     &:after {
                    //         right : -1px;
                    //     }
                    // }
                }

                p {
                    font-size : 1.2em;
                }
            }

            .social-links {
                position      : fixed;
                bottom        : 15px;
                right         : 15px;
                padding       : 10px;
                border-radius : 5px;
                box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.3);
                background    : rgba(25, 25, 25, 0.5);
                // border        : 1px solid rgba(216, 63, 56, 0.15);

                @media (min-width : $breakpoint-md) {
                    transform : translateX(-50%);
                    left      : 50%;
                    display   : table;
                    // position  : fixed;
                    // bottom    : 0px;
                    // position  : absolute;
                }


                &.shop {
                    transform : none;
                    left      : 25px;
                    right     : auto;
                }

                .grid {
                    &.main {
                        display               : grid;
                        grid-template-columns : $social-media-link-size-s $social-media-link-size-s;
                        grid-template-rows    : $social-media-link-size-s $social-media-link-size-s;
                        grid-column-gap       : $social-media-link-grid-gap-s;
                        grid-row-gap          : $social-media-link-grid-gap-s;
                        text-align            : center;

                        @media (min-width : $breakpoint-sm) {
                            grid-template-columns : $social-media-link-size-d $social-media-link-size-d;
                            grid-template-rows    : $social-media-link-size-d $social-media-link-size-d;
                            grid-column-gap       : $social-media-link-grid-gap-d;
                            grid-row-gap          : $social-media-link-grid-gap-d;
                        }

                        @media (min-width : $breakpoint-md) {
                            grid-template-columns : 50px 50px 50px 50px;
                            grid-template-rows    : 1fr;
                        }

                        a:hover {
                            i {
                                transition : transform 0.15s ease-in-out;
                                transform  : scale(1.1) !important;
                            }
                        }

                        a i {
                            color     : $color-primary;
                            font-size : 2em;
                        }
                    }

                    &.promo {
                        div {
                            display : inline-block;
                            
                            &:nth-child(2) {
                                margin-left  : 10px;
                                margin-right : 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>