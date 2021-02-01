<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .panel {
        box-sizing    : border-box;
        border-radius : 5px;
        background    : rgba(25, 25, 25, 0.5);
        box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.3);
        color         : whitesmoke;
        padding       : 10px;
    }
</style>