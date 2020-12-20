<template>
    <i class="fas fa-spinner spinner"></i>
</template>

<style lang="scss" scoped>
    .spinner { 
        color            : $color-primary;
        font-size        : 2em;
        transform-origin : 50% 50%;
        animation        : spin 1s linear infinite;
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