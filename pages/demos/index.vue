<template>
    <div class="demo-page">
        <div class="container">
            <h1>Demo</h1>
            <Spinner v-if="!demosLoaded" />
            <div
                v-if="demosLoaded" 
                class="demo">
                <p>{{ demo.name }}</p>
                <button
                    v-show="!playing" 
                    @click="play">
                    <i class="fas fa-play-circle"></i>
                    <br />
                    <span>PLAY</span>
                </button>
                <button
                    v-show="playing"
                    @click="pause">
                    <i class="fas fa-pause-circle"></i>
                    <br />
                    <span>PAUSE</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Spinner from "~/components/UI/Spinner.vue";
    import axios from "axios";

    export default {
        components: {
            Spinner
        },
        data() {
            return {
                demo: {},
                demosLoaded: false,
                audioObj: null,
                playing: false
            }
        },
        mounted() {
            if (typeof this.$route.query.f === "string") {
                this.fetch();
            } else {
                this.$router.push("/");
            }
        },
        methods: {
            async fetch() {
                const demos = await axios.get("../demos.json"),
                    demo = demos.data.find(dem => { return parseInt(dem.id) === parseInt(this.$route.query.f) });

                this.demo = demo;

                this.load(this.demo.src);
            },
            load(url) {
                this.audioObj = new Audio(url);

                this.audioObj.addEventListener("canplaythrough", event => {
                    // audioObj.play();
                    this.demosLoaded = true;
                });
            },
            play() {
                this.audioObj.play();
                this.playing = true;
            },
            pause() {
                this.audioObj.pause();
                this.playing = false;
            }
        }
    }
</script>

<style lang="scss">
    .demo-page {
        .container {
            text-align : center;

            h1 {
                text-align    : center;
                margin-bottom : 20px;
            }

            p {
                font-size     : 1.5em;
                margin-bottom : 20px;
            }

            .demo {
                button { 
                    border : none;
                    color  : $color-primary;

                    i {
                        font-size : 4em;
                    }

                    span {
                        margin-top  : 5px;
                        display     : block;
                        font-size   : 1.2em;
                        white-space : nowrap
                    }
                }
            }
        }
    }
</style>