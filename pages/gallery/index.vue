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
	<div id="gallery-component" class="container">
        <i v-if="loading" class="fas fa-spinner"></i>
        <div id="instafeed">
            <a 
                v-for="picture in pictures"
                :style="`background-image: url(${ picture.lowRes });`"
                :href="picture.url"
                target="_blank">
            </a>
        </div>
	</div>	
</template>

<script>
    // import { mapGetters } from "vuex";
    // import { mapMutations } from "vuex";
    import $ from "jquery";

    export default {
        head() {
            return {
                title : "OVERSELF | Gallery"
            }
        },
        name      : "example",
        props     : [],
        watch     : {},
        data() {
            return {
                loading : true,
                pictures : []
            };
        },
		created() {},
        mounted() {
            let token = '15773952146.f745340.969d93367db94f739ba7c4f56bd34ade', 
                userid = 15773952146, 
                num_photos = 20; 
            
            $.ajax({
                url : 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
                dataType : 'jsonp',
                type : 'GET',
                data : { 
                    access_token : token, 
                    count : num_photos 
                },
                success : (data) => {
                    this.loading = false;

                    data.data.forEach(item => {
                        // console.log(item);
                        this.pictures.push({
                            thumbnail : item.images.thumbnail.url,
                            highRes : item.images.standard_resolution.url,
                            lowRes : item.images.low_resolution.url,
                            url : item.link
                        });
                    });
                },
                error : (data) => {
                    console.log(data); // send the error notifications to console
                }
            });
        },
        methods : {
        }
    };
</script>

<style lang="scss">
    #gallery-component {
        text-align : center;

        i {
            color            : $color-primary;
            font-size        : 2em;
            transform-origin : 50% 50%;
            animation        : spin 1s linear infinite;
        }

        #instafeed {
            display               : grid;
            grid-template-columns : 100%;
            justify-content       : center;
            grid-gap              : 15px;
            width                 : 75%;
            margin                : 0 auto;

            @media (min-width : $breakpoint-md) {
                grid-template-columns : 1fr 1fr;
            }

            a {
                height              : 200px;
                background-size     : cover;
                background-position : 50% 50%;
                border              : none;
                box-shadow          : $box-shadow-main;

                @media (min-width : $breakpoint-md) {
                    height : 250px;
                }
            }
        }
    }

    @keyframes spin {
        0% {
            transform : rotate(0deg);
        }

        100% {
            transform : rotate(360deg);
        }
    }
</style>
