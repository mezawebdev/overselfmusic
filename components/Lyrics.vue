<!--
||----------------------------------||
||                                  ||
||    Overself Music                ||
||    Lyrics                        ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="lyrics-modal">
        <button @click="$emit('close');">
            <i class="fas fa-times"></i>
        </button>
        <div class="lyrics">
            <p 
                v-html="songTitle"
                class="song-title"></p>
            <br />
		    <p v-html="lyrics"></p>
        </div>
	</div>	
</template>

<script>
    export default {
        name: "example",
        props: {
            lyrics: String,
            songTitle: String
        },
        methods: {
            close() {
                this.$emit("close");
            }
        }
    };
</script>

<style scoped lang="scss">
    #lyrics-modal {
        width                      : 100vw;
        height                     : 100vh;
        position                   : fixed;
        z-index                    : 1000;
        background                 : black;
        top                        : 0;
        left                       : 0;
        overflow-y                 : scroll;
        -webkit-overflow-scrolling : touch;
        font-family                : Helvetica, Arial, sans-serif !important;

        button {
            position      : fixed;
            right         : 15px;
            top           : 15px;
            z-index       : 1001;
            background    : rgba(0, 0, 0, 0.4);
            border-radius : 25px;
            width         : 50px;
            border        : none;
            cursor        : pointer;
            height        : 50px;
            
            i {
                color : $white;
                font-size : 2em;
            }
        }

        .lyrics {
            color         : $white;
            padding       : 25px;
            text-align    : left;
            white-space   : normal;
            overflow-wrap : normal;
            margin        : 0 auto;
            display       : table;

            p {
                font-size   : 1.25em !important;
                line-height : 1.25em !important;

                span {
                    font-size       : 1.5em !important;
                    text-decoration : underline !important;
                }

                &.song-title {
                    font-size : 2em !important;
                }

                &.body {
                    span {
                        text-decoration : underline;
                    }
                }
            }
        }
    }
</style>