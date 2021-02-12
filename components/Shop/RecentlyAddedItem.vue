<template>
    <div class="recently-added-item">
        <div 
            :class="{ center: !itemLoaded }"
            class="grid">
            <Spinner v-if="!itemLoaded" />
            <div 
                v-if="itemLoaded"
                class="block">
                <div class="inner">
                    <i class="fas fa-check"></i>
                    <img :src="'/assets/images/products/' + imgSrc" />
                    <span>Added to Cart</span>
                </div>
                <div class="inner">
                    <div>
                        <p>Cart subtotal ({{ cart.items.length }} {{ cart.items.length > 1 ? "items" : "item" }}): <span class="subtotal">${{ subtotal }}</span></p>
                        <!-- <nuxt-link to="/shop/cart">
                            <i class="fas fa-shopping-cart"></i>&nbsp;Cart
                        </nuxt-link>
                        <nuxt-link to="/shop/checkout">
                            <i class="fas fa-credit-card"></i>&nbsp;Proceed to checkout
                        </nuxt-link> -->
                        <nuxt-link to="/shop/cart">
                            <i class="fas fa-shopping-cart"></i>&nbsp;Go To Cart
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Spinner from "~/components/UI/Spinner.vue";
    import { mapGetters } from "vuex";

    export default {
        components: {
            Spinner
        },
        props: ["itemId"],
        computed: {
            ...mapGetters({
                cart: "shop/cart",
                subtotal: "shop/subtotal"
            })
        },
        data() {
            return {
                imgSrc: "",
                itemLoaded: false
            }
        },
        mounted() { this.fetch() },
        methods: {
            async fetch() {
                const req = await axios.get("/api/shop/get-item?id=" + this.itemId);
                this.imgSrc = req.data[0].images[0];
                this.itemLoaded = true;
            }
        }
    }
</script>

<style lang="scss">
    .recently-added-item {
        height        : 0px;
        overflow      : hidden;
        animation     : init 0.5s ease-in-out 1 forwards;
        margin-bottom : 15px;
        box-sizing    : border-box;
        border-radius : 5px;
        background    : rgba(25, 25, 25, 0.5);
        box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.3);
        color         : whitesmoke;
        padding       : 10px;
        width         : 100%;

        @media (min-width : $breakpoint-md) {
            margin  : 0px auto 15px auto;
            padding : 15px;
        }

        @keyframes init {
            100% {
                height: 100%;
            }
        }

        .grid {
            width : 100%;

            &.center {
                text-align : center;
            }

            .block {
                display            : grid;
                grid-gap           : 10px;
                width              : 100%;
                grid-template-rows : auto auto;

                @media (min-width : $breakpoint-md) {
                    grid-template-rows    : auto;
                    grid-template-columns : minmax(0, 1fr) minmax(0, 1fr);
                }

                .inner {
                    width : 100%;

                    &:nth-child(1) {
                        display     : flex;
                        align-items : center;
                        color       : $success;
                        font-weight : 400;
                        
                        i {
                            font-size : 1.75em;
                        }   
                        
                        img {
                            width      : 50px;
                            padding    : 5px;
                            border     : 1px solid $success;
                            margin     : 0px 10px;
                            background : rgba(225, 225, 225, 0.75);
                        }
                    }

                    // &:nth-child(2) {
                    //     .subtotal {
                    //         font-weight : bold;
                    //         color       : #B12704;
                    //     }
                    // }

                    &:nth-child(2) {
                        // display               : grid;
                        // grid-template-columns : auto auto;
                        // grid-gap              : 10px;

                        @media (min-width : $breakpoint-md) {
                            display         : flex;
                            align-items     : center;
                            justify-content : flex-end;
                        }

                        .subtotal {
                            font-weight : bold;
                            color       : #B12704;
                        }

                        p {
                            line-height : 1;
                        }

                        a {
                            padding         : 10px;
                            border          : none;
                            text-align      : center;
                            border-radius   : 5px;
                            text-decoration : none;
                            font-weight     : 400;
                            font-size       : 0.8em;
                            line-height     : 1;
                            margin-top      : 20px;
                            display         : block;

                            @media (min-width : $breakpoint-md) {
                                margin-top : 10px;
                            }

                            // &:nth-child(2) {
                            //     background : $black;
                            //     color      : whitesmoke;
                            // }

                            &:nth-child(2) {
                                color      : whitesmoke;
                                background : #B12704;
                            }
                        }
                    }
                }   
                
            }
        }
    }
</style>