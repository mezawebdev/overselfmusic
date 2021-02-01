<template>
    <div class="recently-added-item">
        <div class="grid">
            <div class="block">
                <div>
                    <i class="fas fa-check"></i>
                    <img :src="'/assets/images/products/' + imgSrc" />
                    <span>Added to Cart</span>
                </div>
                <div>
                    Cart subtotal ({{ cart.items.length }} {{ cart.items.length > 1 ? "items" : "item" }}): <span class="subtotal">${{ subtotal }}</span>
                </div>
                <div>
                    <nuxt-link to="/shop/cart">
                        <i class="fas fa-shopping-cart"></i>&nbsp;Cart
                    </nuxt-link>
                    <nuxt-link to="/shop/checkout">
                        <i class="fas fa-credit-card"></i>&nbsp;Proceed to checkout
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters } from "vuex";

    export default {
        props: ["itemId"],
        computed: {
            ...mapGetters({
                cart: "shop/cart",
                subtotal: "shop/subtotal"
            })
        },
        data() {
            return {
                imgSrc: ""
            }
        },
        mounted() {
            this.fetch();
        },
        methods: {
            async fetch() {
                const req = await axios.get("/api/shop/get-item?id=" + this.itemId);
                this.imgSrc = req.data[0].images[0];
            }
        }
    }
</script>

<style scoped lang="scss">
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

        @keyframes init {
            100% {
                height: 100%;
            }
        }

        .grid {
            width : 100%;

            .block {
                display            : grid;
                grid-gap           : 10px;
                width              : 100%;
                grid-template-rows : auto auto auto;

                div {
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

                    &:nth-child(2) {
                        .subtotal {
                            font-weight : bold;
                            color       : #B12704;
                        }
                    }

                    &:nth-child(3) {
                        display               : grid;
                        grid-template-columns : auto auto;
                        grid-gap              : 10px;

                        a {
                            padding         : 10px;
                            border          : none;
                            text-align      : center;
                            border-radius   : 5px;
                            text-decoration : none;
                            font-weight     : 400;
                            font-size       : 0.8em;

                            &:nth-child(1) {
                                background : $black;
                                color      : whitesmoke;
                            }

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