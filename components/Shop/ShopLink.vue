<template>
    <nuxt-link 
        :class="[
            { black: type === 'black' },
            { attention: type === 'attention' },
            { success: type === 'success' }
        ]"
        class="shop-link"
        :to="to">
        <slot></slot>
    </nuxt-link>
</template>

<script>
    export default {
        props: ["to", "type"]
    }
</script>

<style lang="scss" scoped>
    a {
        padding         : 10px;
        border          : none;
        text-align      : center;
        border-radius   : 5px;
        text-decoration : none;
        font-weight     : 400;
        color           : $black;
        font-size       : 0.8em;
        width           : 100%;
        display         : block;
        box-sizing      : border-box;
        background      : whitesmoke;

        &.black {
            background : $black;
            color      : whitesmoke;
        }

        &.attention {
            background : #B12704;
            color      : whitesmoke;
        }

        &.success {

        }
    }
</style>