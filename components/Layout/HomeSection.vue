<template>
    <div class="home-section">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .home-section {
        margin : 25px 0px;

        @media (min-width : $breakpoint-md) {
            margin : 50px 0px;
        }

        &:first-child {
            margin : 0px;
        }

        h3 {
            font-size     : 1.6em;
            margin-bottom : 20px;

            @media (min-width : $breakpoint-md) {
                font-size : 2em;
            }
        }

        iframe {
            border-radius : 5px;
            box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.75);
        }
    }
</style>