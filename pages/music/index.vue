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
	<div id="music-component" class="container">
		<div class="grid album-list">
            <div 
                v-for="(release, i) in OVERSELF.pages.music.releases"
                :key="i"
                @click="onReleaseClick(release)"
                :style="`background-image: url(${ release.artwork.src });`"
                class="album">
                <div 
                    v-if="!release.released && typeof release.presaveURL === 'undefined'"
                    :class="{ show : release.showComingSoon }"
                    class="coming-soon">
                    <p>Coming Soon.</p>
                </div>
            </div>
        </div>
        <AlbumOverview v-if="albumOverview.active" :album-id="albumOverview.id" />
	</div>	
</template>

<script>
    import Vue from "vue";
    import axios from "axios";
    import AlbumOverview from "~/components/AlbumOverview.vue";
    import { mapActions } from "vuex";

    export default {
        head() {
            return {
                title : "o v e r s e l f | Music"
            }
        },
        name      : "music-page",
        props     : [],
        watch     : {},
        components : {
            AlbumOverview
        },
        data() {
            return {
                albumOverview: {
                    active: false,
                    id: Number
                }
            };
        },
		created() {
            this.setLayout("main");
        },
        methods : {
            onReleaseClick(release) {
                this.$router.push(`/music/${ release.path }`);
            },
            ...mapActions({
                setLayout: "setLayout"
            })
        }
    };
</script>

<style scoped lang="scss">
    #music-component {
        .album-list {
            display               : grid;
            grid-template-columns : 1fr;
            grid-gap              : 15px;
            width                 : 100%;
            justify-items         : center;

            @media (min-width : $breakpoint-md) {
                grid-template-columns : 1fr 1fr;
            }

            @media (min-width : $breakpoint-lg) {
                grid-template-columns : 1fr 1fr 1fr 1fr;
            }
            
            .album {
                width           : 250px;
                height          : 250px;
                position        : relative;
                box-shadow      : $box-shadow-main;
                background-size : cover;
                cursor          : pointer;

                @media (min-width : $breakpoint-lg) {
                    justify-self : center;
                }

                &:hover,
                &:active {
                    transform : scale(1.05);
                    
                    .coming-soon {
                        pointer-events : all;
                        opacity        : 1;
                    }
                }

                &:nth-child(odd) {
                    @media (min-width : $breakpoint-md) {
                        justify-self : end;
                    }

                    @media (min-width : $breakpoint-lg) {
                        justify-self : center;
                    }
                }

                &:nth-child(even) {
                    @media (min-width : $breakpoint-md) {
                        justify-self : left;
                    }

                    @media (min-width : $breakpoint-lg) {
                        justify-self : center;
                    }
                }

                .coming-soon {
                    width          : 100%;
                    height         : 100%;
                    position       : absolute;
                    background     : rgba(0, 0, 0, 0.55);
                    top            : 0px;
                    left           : 0px;
                    opacity        : 0;
                    pointer-events : none;
                    transition     : get-transitions(opacity, 0.25s);

                    &.show {
                        pointer-events : all;
                        opacity        : 1;
                    }

                    p {
                        color          : $color-primary;
                        font-size      : 2em;
                        text-align     : center;
                        vertical-align : middle;
                        line-height    : 250px;
                        pointer-events : none;
                    }
                }
            }
        }
    }
</style>