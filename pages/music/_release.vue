<!--
||----------------------------------||
||                                  ||
||    Overself Music                ||
||    Album Page                    ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div 
        id="release-page" 
        class="container">
        <div class="grid">
            <div class="block">
                <img 
                    class="artwork" 
                    :src="release.artwork.src" />
            </div>
            <div class="block">
                <div class="inner-block">
                    <p>{{ release.title }}</p>
                    <div 
                        v-if="typeof release.spotifyEmbedSrc === 'string'"
                        class="spotify-embed">
                        <iframe 
                            :src="release.spotifyEmbedSrc" 
                            width="100%" 
                            height="80" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media">
                        </iframe>
                    </div>
                    <div
                        v-if="release.released" 
                        :style="`grid-template-columns: ${ getStreamingServCols() }`"
                        :class="{ compact: release.streamServices.length <= 2 }"
                        class="stream-services">
                        <a
                            v-for="(streamService, i) in release.streamServices"
                            :key="i"
                            target="_blank"
                            :href="streamService.link">
                            <i :class="streamService.icon"></i>
                            <br />
                            <span>{{ streamService.name }}</span>
                        </a>
                    </div>
                    <div
                        v-if="!release.released" 
                        class="coming-soon">
                        <a :href="typeof release.presaveURL === 'string' ? release.presaveURL : ''" :target="typeof release.presaveURL === 'string' ? '_blank' : ''">
                            <span>{{ release.releaseDate }}</span>
                            <br v-if="typeof release.presaveURL === 'string'" />
                            <span>Click to presave</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="release.released" 
            class="album-information mobile">
            <div class="chunk left">
                <p>
                    <span>Released {{ release.releaseDate }}</span>
                    <br /><br />
                    Recorded and Mixed by {{ release.personnel.production.recording.name }} <a :href="release.personnel.production.recording.website.link">{{ release.personnel.production.recording.website.text }}</a>
                    <br />
                    Mastered by {{ release.personnel.production.mastering.name }} <a :href="release.personnel.production.mastering.website.text">{{ release.personnel.production.mastering.website.text }}</a>
                    <br /><br />
                    <i 
                        v-for="(member, i) in release.personnel.band.members"
                        :key="i">
                        {{ member.name }} - {{ member.contribution }}
                        <br />
                    </i>
                    <br />
                    Cover art by {{ release.artwork.artist }}
                    <br /><br />
                </p>
            </div>
            <div class="chunk right">
                <p>
                    <span>Track List</span>
                    <br /><br />
                    <button 
                        v-for="(track, i) in release.music.tracks"
                        :key="i"
                        @click="onTrackClick(track.uniqueTag)">
                        {{ track.name }}
                    </button>
                    <br /><br />
                    <span class="disclaimer">Click on song name for lyrics</span>
                </p>
            </div>
        </div>
        <Lyrics 
            v-if="lyrics.active" 
            @close="closeLyrics"
            :songTitle="lyrics.songTitle"
            :lyrics="lyrics.body" />
	</div>	
</template>

<script>
    import { mapActions } from "vuex";
    import Lyrics from "~/components/Lyrics.vue";

    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | ${ this.release.title }`
            }
        },
        name: "release-page",
        components: {
            Lyrics
        },
        computed: {
            release() {
                return this.OVERSELF.pages.music.releases.find(release => { return release.path === this.$route.params.release });
            }
        },
        data() {
            return {
                lyrics: {
                    active: false,
                    songTitle: String,
                    body: String
                }
            };
        },
        mounted() {
            window.scrollTo(0, 0);
            this.setLayout("promo");
        },
        methods : {
            onTrackClick(tag) {
                let track = this.release.music.tracks.find(track => { return track.uniqueTag === tag });
                this.lyrics.songTitle = track.name;
                this.lyrics.body = track.lyrics;
                this.lyrics.active = true;
                scrollLock();
            },
            closeLyrics() {
                this.lyrics.active = false;
                scrollUnlock();
            },
            getStreamingServCols() {
                let cols = this.release.streamServices.length,
                    i = 0,
                    str = "";

                while (i < cols) {
                    str += "1fr ";
                    i++;
                }

                return str;
            },
            ...mapActions([
                "setBackground",
                "setLayout"
            ])
        },
    };
</script>

<style scoped lang="scss">
    #release-page {
        text-align : center;
        margin-top : -5px;

        @media (min-width : $breakpoint-sm) {
            margin-top : 0px;
        }

        a {
            text-decoration : none;
        }

        .wrapper-link {
            text-decoration : none;
        }

        .grid {
            @media (min-width : $breakpoint-md) {
                display               : grid;
                grid-template-columns : 1fr 1fr;
                grid-columns          : 1fr 1fr;
                text-align            : left;
            }
        }

        .block {
            &:nth-child(2) {
                @media (min-width : $breakpoint-md) {
                    padding-left : 25px;
                }
            }

            .artwork {
                width      : 150px;
                margin     : 0 auto;
                display    : block;
                box-shadow : 0px 4px 16px rgba(0, 0, 0, 0.3);

                @media (min-width : $breakpoint-md) {
                    width : 80%;
                }
            }

            .spotify-embed {
                margin-top : 15px;

                @media (min-width : $breakpoint-md) {
                    margin-top : 25px;
                }

                iframe {
                    border-radius : 5px;
                    max-width     : 300px;
                    box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.5);
                }
            }

            p {
                color       : $color-primary;
                display     : block;
                margin-top  : 10px;
                font-size   : 2em;
                text-shadow : $text-shadow-main;

                @media (min-width : $breakpoint-md) {
                    font-size   : 4em;
                    margin-top  : 0px;
                    line-height : 1;
                }
            }

            .stream-services {
                display               : grid;
                grid-template-columns : 1fr 1fr 1fr 1fr;
                grid-columns          : 30px 30px 30px 30px;
                // grid-gap              : 1px;
                justify-content : center;
                box-shadow      : 0px 4px 16px rgba(0, 0, 0, 0.5);
                margin-top      : 20px;

                @media (min-width : 825px) {
                    justify-content       : left;
                    margin-top            : 25px;
                    grid-template-columns : 85px 85px 85px 85px;
                    grid-gap              : 10px;
                    box-shadow            : none;
                }

                &.compact {
                    max-width : 300px;
                    margin    : 20px auto 0px auto;

                    @media (min-width : $breakpoint-md) {
                        margin : 20px 0px 0px 0px;
                    }
                }

                a {
                    border          : none;
                    color           : $black;
                    font-size       : 1.25em;
                    background      : $color-primary;
                    // border-radius   : 3px;
                    // box-shadow      : 0px 4px 16px rgba(0, 0, 0, 0.5);
                    text-align      : center;
                    padding         : 5px 0px;
                    font-weight     : 400;
                    text-decoration : none !important;
                    line-height     : 10px;
                    border-right    : 1px solid rgba(0, 0, 0, 0.25);

                    @media (min-width : 825px) {
                        font-size     : 2em;
                        border-radius : 3px;
                        box-shadow    : 0px 4px 16px rgba(0, 0, 0, 0.5);
                    }

                    &:hover {
                        transform : translate(1.1);
                    }

                    &:last-child {
                        border-top-right-radius    : 3px;
                        border-bottom-right-radius : 3px;
                        border-right               : none;
                    }

                    &:first-child {
                        border-top-left-radius    : 3px;
                        border-bottom-left-radius : 3px;
                    }

                    span {
                        text-transform  : uppercase;
                        text-decoration : none !important;
                        font-size       : 0.45em;

                        @media (min-width : $breakpoint-md) {
                            font-size : 0.3em;
                        }
                    }
                }
            }

            .coming-soon {
                margin-top : 17px;

                @media (min-width : $breakpoint-md) {
                    margin-top : 40px;
                }

                a {
                    font-size       : 1.25em;
                    color           : $color-primary;
                    text-decoration : none;

                    @media (min-width : $breakpoint-md) {
                        font-size : 1.5em;
                    }

                    span:last-child {
                        margin-top : 10px;
                        display    : block;
                    }
                }
            }

            .inner-block {
                @media (min-width : $breakpoint-md) {
                    position  : relative;
                    transform : translate(0, -50%);
                    top       : 50%;
                }

                .album-information-toggle {
                    margin-top : 10px;
                    color      : $color-primary;
                    border     : none;
                    font-size  : 1.1em;
                }
            }
        }

        .album-information {
            background    : rgba(25, 25, 25, 0.75);
            padding       : 15px;
            margin-top    : 30px;
            box-shadow    : $box-shadow-main;
            border-radius : 5px;

            @media (min-width : $breakpoint-md) {
                width  : 500px;
                margin : 50px auto 0 auto;
                padding : 25px;
            }

            &.mobile {
                .chunk {
                    &.right {
                        button {
                            margin : 0px 5px 4px 0px;
                        }
                    }
                }
            }

            p {
                margin-top  : 0px;
                // font-size   : 1.1em;
                // line-height : 1.1em;
                text-align  : left;
                color       : $color-primary;

                a {
                    color           : $color-primary;
                    font-style      : italic;
                    text-decoration : none;
                }

                span {
                    // font-size       : 1.3em;
                    font-weight : 400;
                    // text-decoration : underline;

                    &.disclaimer {
                        font-size       : 1em;
                        font-style      : italic;
                        text-decoration : none;
                    }
                }

                button {
                    color         : black;
                    border        : none;
                    font-size     : 0.9em;
                    background    : $color-primary;
                    margin-bottom : 5px;
                    border-radius : 3px;
                    cursor        : pointer;
                }
            }
        }
    }
</style>