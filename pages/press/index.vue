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
	<div id="press-page-component">
        <div class="container">
            <div class="grid">
                <div class="biography">
                    <h1>Press</h1>
                    <p>
                        OVERSELF is: Peter Tueller (guitar, synths, vocals), Alex Meza (drums) and Oscar Paez (bass). 
                        <br />
                        We are a 3-piece band from San Diego, California. Genres include post-punk, post-rock, shoegaze, etc. 
                    </p>
                </div>
                <div class="content">
                    <div class="pictures">
                        <img class="spotlight" src="/assets/images/overself.jpeg" />
                        <img class="spotlight" src="/assets/images/overself-2.jpg" />
                        <img class="spotlight" src="/assets/images/peter.jpg" />
                        <img class="spotlight" src="/assets/images/alex.jpg" />
                        <img class="spotlight" src="/assets/images/oscar.jpg" />
                        <img class="spotlight" src="/assets/images/pulses-artwork.jpg" />
                    </div>
                    <div class="videos">
                        <youtube 
                            :video-id="'69wnND0R3QQ'" 
                            @ready="onPlayerReady">
                        </youtube>
                        <youtube 
                            :video-id="'PT62osTZdnM'" 
                            @ready="onPlayerReady">
                        </youtube>
                    </div>
                </div>
            </div>
        </div>
	</div>	
</template>

<script>
    export default {
        name      : "press",
        head() {
            return {
                title : "OVERSELF | Press"
            }
        },
        props     : [],
        watch     : {},
        data() {
            return {
                players : []
            };
        },
		created() {},
        mounted() {
            Spotlight.init();
        },
        methods : {
            onPlayerReady(event) {
                this.players.push(event.target);
            }
        }
    };
</script>

<style lang="scss">
    #press-page-component {
        .container {
            .grid {
                @media (min-width : $breakpoint-md) {

                }

                .biography {
                    padding    : 15px;
                    background : rgba(25, 25, 25, 0.5);
                    box-shadow : $box-shadow-main;
                    
                    @media (min-width : $breakpoint-md) {
                        padding : 15px 15px 30px 15px;
                        display : table;
                        margin  : 0 auto;
                    }

                    h1 {
                        text-align : center;
                        color      : $color-primary !important;
                    }

                    p {
                        font-size  : 1.2em;
                        color      : $color-primary;
                        text-align : center;
                        margin-top : 10px;
                    }
                }

                .content {
                    margin-top : 25px;
                    padding    : 0px 20px;

                    @media (min-width : $breakpoint-md) {
                        padding : 0px 100px;
                    }

                    .pictures {
                        display               : grid;
                        grid-template-columns : 1fr 1fr;
                        grid-gap              : 10px;

                        @media (min-width : $breakpoint-xmd) {
                            grid-template-columns : 1fr 1fr 1fr;
                        }

                        img {
                            width      : 100%;
                            box-shadow : $box-shadow-main;
                            cursor     : pointer;
                        }
                    }

                    .videos {
                        margin-top            : 10px;
                        display               : grid;
                        grid-template-columns : 1fr 1fr;
                        grid-gap              : 10px;

                        iframe { 
                            width      : 100%;
                            margin     : 0 auto;
                            display    : block;
                            box-shadow : $box-shadow-main;
                        }
                    }
                }
            }
        }
    }
</style>
