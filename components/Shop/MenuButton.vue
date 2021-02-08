<template>
    <nuxt-link 
        :to="to"
        class="menu-button">
        <slot></slot>
    </nuxt-link>
</template>

<script>
    export default {
        props: ["to"]
    }
</script>

<style lang="scss" scoped>
    .menu-button {
        text-decoration : none;
        font-size       : 0.9em;
        background      : $black;
        padding         : 10px;
        display         : inline-table;
        border-radius   : 5px;
        box-shadow      : 0px 2px 6px rgba(0, 0, 0, 0.5);
        margin-right    : 5px;

        &:last-child {
            margin-right : 0px;
        }
    }
</style>