<template>
    <div class="back-to-items">
        <nuxt-link to="/shop"><i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back to shop</nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    .back-to-items {
        text-align    : left;
        margin-bottom : 25px;
        
        a {
            text-decoration : none;
            font-size       : 0.9em;
            background      : $black;
            padding         : 10px;
            display         : table;
            border-radius   : 5px;
            box-shadow      : 0px 2px 6px rgba(0, 0, 0, 0.5);
        }
    }
</style>