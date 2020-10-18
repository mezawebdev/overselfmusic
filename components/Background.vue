<!--
||----------------------------------||
||                                  ||
||    Overself Music                ||
||    Background Component          ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div 
        id="background-component" 
        :class="[{ main : background === 'main' }]">
        <div
            v-if="ready && typeof background.src === 'object' && !backgroundLoading" 
            class="video-wrapper">
            <video 
                v-if="$device.isMobile"
                class="mobile"
                playsinline
                autoplay
                muted
                loop>
                <source :src="background.src.mobile" />
            </video>
            <video 
                v-if="$device.isDesktop"
                class="desktop"
                playsinline
                autoplay
                muted
                loop>
                <source :src="background.src.desktop" />
            </video>
        </div>
		<div 
            v-if="overlay" 
            class="overlay">
        </div>
	</div>	
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "example",
        computed: {
            ...mapGetters([
                "background",
                "backgroundLoading"
            ])
        },
        data() {
            return {
                overlay: true,
                ready: false
            }
        },
        beforeMount() {
            this.ready = true;
        },
        methods : {
            toggleOverlay() {
                this.overlay = this.overlay ? false : true;
            }
        }
    };
</script>

<style scoped lang="scss">
    #background-component {
        width               : 100vw;
        height              : 100vh;
        position            : fixed;
        top                 : 0px;
        left                : 0px;
        z-index             : -1;

        &.main {
            background          : rgb(50, 50, 50);
            background-image    : url("~assets/images/temp-bg.png");
            background-position : 50% 50%;
            background-size     : cover;

            @media (min-width : $breakpoint-sm) {
                background-image    : url("~assets/images/temp-bg-d-min.png");
                background-position : 0% 50%;
            }
        }

        .overlay {
            width      : 100%;
            height     : 100%;
            position   : absolute;
            left       : 0px;
            top        : 0px;
            background : $overlay-bg-color;
        }

        .video-wrapper {
            width    : 100%;
            height   : 100%;
            position : relative;

            video {
                width      : 100vw;
                transform  : translate(-50%, -50%);
                left       : 50%;
                top        : 50%;
                height     : 100vh;
                position   : absolute;
                object-fit : cover;
            }
        }
    }
</style>