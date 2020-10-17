<!--
||----------------------------------||
||                                  ||
||    Overself Music                ||
||    Album Overview                ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="album-overview-component">
		<div class="modal">
            <img :src="album.artwork.src" />
            <div class="title">
                <p><span>{{ album.name }}</span> by Overself</p>
            </div>
        </div>
	</div>	
</template>

<script>
    import data from "~/cms/music.json";

    export default {
        name      : "example",
        props     : ["albumId"],
        watch     : {},
        data() {
            return {
                album : Object
            };
        },
        created() {},
        beforeMount() {
            this.album = data.albums.find(album => { return album.id === this.albumId });
            console.log(this.album);
        },
        mounted() {
            
        },
        methods : {
        }
    };
</script>

<style scoped lang="scss">
    #album-overview-component {
        width      : 100vw;
        height     : 100vh;
        top        : 0px;
        left       : 0px;
        position   : fixed;
        z-index    : 10;
        background : rgba(0, 0, 0, 0.25);
        overflow-y : scroll;

        .modal {
            width         : 80%;
            min-height    : 500px;
            padding       : 15px;
            max-width     : 700px;
            background    : $black;
            border-radius : 5px;
            position      : relative;
            top           : 50%;
            left          : 50%;
            transform     : translate(-50%, -50%);
            box-shadow    : $box-shadow-main;

            img {
                width : 100%;
            }

            .title {
                color      : $color-primary;
                font-size  : 2em;
                text-align : center;
                margin-top : 15px;

                span {
                    text-transform : uppercase;
                }
            }
        }
    }
</style>