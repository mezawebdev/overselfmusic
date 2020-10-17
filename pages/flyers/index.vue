<template>
    <div id="flyers">
        <div v-if="ready" class="container">
            <video muted playsinline autoplay loop>
                <source :src="src" />
            </video>
            <a :href="src" download>
                <i class="fas fa-download"></i>&nbsp;DOWNLOAD
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flyersDir : "/live/flyers",
                format    : ".m4v",
                src       : "",
                ready     : false
            }
        },
        mounted() {
            if (this.$route.query.date) {
                if (! this.$route.query.year) {
                    this.src = `${ this.flyersDir }/${ new Date().getFullYear() }/${ this.$route.query.date }${ this.format }`;
                } else {
                    this.src = `${ this.flyersDir }/${ this.$route.query.year }/${ this.$route.query.date }${ this.format }`;
                }
                this.ready = true;
            } else {
                this.$router.push("/");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #flyers {
        .container {
            text-align : center;

            video {
                max-width  : 225px;
                margin     : 0 auto;
                display    : block;
                box-shadow : 0px 2px 10px rgba(0, 0, 0, 0.2);
            }

            a {
                display         : table;
                margin          : 0 auto;
                margin-top      : 30px;
                text-decoration : none;
                padding         : 15px;
                border-radius   : 25px;
                font-size       : 1.25em;
                box-shadow      : 0px 2px 10px rgba(0, 0, 0, 0.3);
                background      : $color-primary;
            }
        }
    }
</style>