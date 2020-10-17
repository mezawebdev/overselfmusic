<!--
||----------------------------------||
||                                  ||
||    Overself Music                ||
||    Loading Screen                ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="loading-screen-component">
        <div class="content">
		    <p>
                <span>O</span>
                <span>V</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
                <span>E</span>
                <span>L</span>
                <span>F</span>
            </p>
            <!-- <div 
                class="loader loader--style4" 
                title="3">
                <svg 
                    version="1.1" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" y="0px"
                    width="24px" 
                    height="24px" 
                    viewBox="0 0 24 24" 
                    style="enable-background:new 0 0 50 50;" 
                    xml:space="preserve">
                    <rect 
                        x="0" 
                        y="0" 
                        width="4" 
                        height="7" 
                        fill="#D83F38">
                        <animateTransform  
                            attributeType="xml"
                            attributeName="transform" 
                            type="scale"
                            values="1,1; 1,3; 1,1"
                            begin="0s" 
                            dur="0.6s" 
                            repeatCount="indefinite" />       
                    </rect>
                    <rect 
                        x="10" 
                        y="0" 
                        width="4" 
                        height="7" 
                        fill="#D83F38">
                        <animateTransform  
                            attributeType="xml"
                            attributeName="transform" 
                            type="scale"
                            values="1,1; 1,3; 1,1"
                            begin="0.2s" 
                            dur="0.6s" 
                            repeatCount="indefinite" />       
                    </rect>
                    <rect 
                        x="20" 
                        y="0" 
                        width="4" 
                        height="7" 
                        fill="#D83F38">
                        <animateTransform  
                            attributeType="xml"
                            attributeName="transform" 
                            type="scale"
                            values="1,1; 1,3; 1,1"
                            begin="0.4s" 
                            dur="0.6s" 
                            repeatCount="indefinite" />       
                    </rect>
                </svg>
            </div> -->
        </div>
        <div class="bar">
        </div>
	</div>	
</template>

<script>
    export default {
        name      : "loading-screen",
        props     : [],
        watch     : {},
        data() {
            return {
            };
        },
        created() {},
        beforeMount() {
        },
        mounted() {
        },
        methods : {
        }
    };
</script>

<style scoped lang="scss">
    #loading-screen-component {
        width      : 100vw;
        height     : 100vh;
        background : rgb(25, 25, 25);
        top        : 0;
        left       : 0;
        position   : fixed;
        z-index    : 100;

        .content {
            position  : absolute;
            transform : translate(-50%, -50%);
            left      : 50%;
            top       : 50%;

            p {
                    color          : $color-primary;
                    font-size      : 5em;
                    margin         : 0;
                    display        : block;
                    letter-spacing : -9px;
                    white-space    : nowrap;
                    
                    @media (min-width : $breakpoint-md) {
                        font-size : 7em;
                    }

                    span {
                        opacity                   : 0;
                        display                   : inline-block;
                        position                  : relative;
                        transform                 : translateY(-10px);
                        animation                 : letter 0.5s ease-in-out;
                        animation-iteration-count : 1;
                        animation-fill-mode       : forwards;

                        &:nth-child(1) {
                            animation-delay : 0s;
                        }

                        &:nth-child(2) {
                            animation-delay : 0.1s;
                        }

                        &:nth-child(3) {
                            animation-delay : 0.2s;
                        }

                        &:nth-child(4) {
                            animation-delay : 0.3s;
                        }

                        &:nth-child(5) {
                            animation-delay : 0.4s;
                        }

                        &:nth-child(6) {
                            animation-delay : 0.5s;
                        }

                        &:nth-child(7) {
                            animation-delay : 0.6s;
                        }

                        &:nth-child(8) {
                            animation-delay : 0.7s;
                        }
                    }
            }

            .loader {
                    display    : table;
                    transform  : translate(-50%, 0);
                    left       : 50%;
                    position   : relative;
                    margin-top : 30px;
            }
        }

        .bar {
            width               : 0;
            position            : absolute;
            bottom              : 0px;
            background          : $color-primary;
            animation           : grow-bar 2s linear;
            animation-fill-mode : forwards;
            height              : 7px;
        }
    }

    @keyframes letter {
        0% {
            opacity   : 0;
            transform : translateY(-10px);
        }

        100% {
            opacity   : 1;
            transform : translateY(0px);
        }

        0% {
            color : rgb(211, 121, 36);
        }
    }

    @keyframes grow-bar {
        0% {
            width : 0;
        }

        100% {
            width : 100vw;
        }
    }
</style>