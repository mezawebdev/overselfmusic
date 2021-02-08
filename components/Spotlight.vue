<template>
    <div id="spotlight_">
        <client-only>
            <LightGallery 
                :images="spotlightImages"
                :index="spotlightIndex"
                @close="hideSpotlight" />
        </client-only>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        computed: {
            ...mapGetters({
                spotlightImages: "spotlightImages",
                spotlightIndex: "spotlightIndex"
            })
        },
        methods: {
            ...mapActions({
                hideSpotlight: "hideSpotlight"
            })
        },
        mounted() {
            console.log(this.spotlightIndex);
        }
    }
</script>

<style lang="scss" scoped>
    #spotlight_ {
        width: 0px;
        height: 0px;
    }
</style>