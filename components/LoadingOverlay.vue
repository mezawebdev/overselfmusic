<template>
    <div id="loading-overlay">
        <Spinner />
    </div>
</template>

<script>
    import Spinner from "~/components/UI/Spinner.vue";
    export default { components: { Spinner } }
</script>

<style scoped lang="scss">
    #loading-overlay {
        width           : 100vw;
        height          : 100vh;
        top             : 0px;
        left            : 0px;
        position        : fixed;
        background      : rgba(0, 0, 0, 0.6);
        display         : flex;
        justify-content : center;
        z-index         : 100;
        align-items     : center;
    }
</style>