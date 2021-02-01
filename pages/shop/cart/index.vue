<template>
    <div id="cart">
        <div class="container">
            <Title>CART</Title>
            <div
                v-if="cart.items.length > 0" 
                class="with-items">
                <BackToItems />
                <div class="quick-info">
                    <div>
                        Order subtotal ({{ cart.items.length }} {{ cart.items.length > 1 ? "items" : "item" }}): <span class="subtotal">${{ subtotal }}</span>
                    </div>
                    <div>
                        <a href="#"><i class="fas fa-credit-card"></i>&nbsp;Proceed to checkout</a>
                    </div>
                </div>
                <hr />
                <div class="item-list">
                    <h4><strong>{{ itemsAmount }} {{ itemsAmount > 1 ? "items" : "item" }}</strong> in your cart</h4>
                    <div class="list">
                        <Spinner v-if="!itemsLoaded" />
                        <div v-if="itemsLoaded">
                            <CartItem
                                v-for="(item, i) in items"
                                :key="i"
                                :item="item"
                                @onQuantityChange="onQuantityChange" />
                        </div>
                    </div>
                </div>
            </div>
            <div 
                v-if="cart.items.length === 0"
                class="no-items">
                <span><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Your cart is empty</span>
                <br />
                <nuxt-link to="/shop">
                    <i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Continue shopping
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Spinner from "~/components/UI/Spinner.vue";
    import CartItem from "~/components/Shop/CartItem.vue";
    import axios from "axios";
    import ShopLink from "~/components/Shop/ShopLink.vue";
    import BackToItems from "~/components/Shop/BackToItems.vue";
    import Title from "~/components/Layout/Title.vue";

    export default {
        components: {
            Spinner,
            ShopLink,
            CartItem,
            BackToItems,
            Title
        },
        computed: {
            ...mapGetters({
                cart: "shop/cart",
                subtotal: "shop/subtotal",
                itemsAmount: "shop/itemsAmount"
            })
        },
        data() {
            return {
                itemsLoaded: false,
                items: []
            }
        },
        created() {
            this.fetch();
        },
        mounted() {
            this.setLayout("shop");
        },
        methods: {
            async fetch() {
                try {
                    const req = await axios.post("/api/shop/get-items-with-size", {
                        items: this.cart.items.map(item => { return {
                            id: item.productId,
                            size: item.size
                        } })
                    });
                    
                    if (req.data.length > 0) {
                        this.cart.items.forEach(item => {
                            const resItem = req.data.find(item_ => { console.log(item_, item); return item_.id === item.productId && item_.size === item.size });
                            resItem.size = item.size;
                            resItem.quantity = item.quantity;
                        });
                    }

                    this.items = req.data;

                    this.itemsLoaded = true;
                } catch (err) {
                    console.log(err);
                }
            },
            onQuantityChange(item) {
                this.updateItem(item);
            },
            ...mapActions({
                setLayout: "setLayout",
                updateItem: "shop/updateItem"
            })
        }
    }
</script>

<style scoped lang="scss">
    #cart {
        color : whitesmoke;

        // .shop-link.continue-shopping {
        //     margin    : 0 auto 15px auto;
        //     max-width : 200px;
        // }

        .with-items {
            .quick-info {
                margin-bottom : 15px;
                box-sizing    : border-box;
                border-radius : 5px;
                background    : rgba(25, 25, 25, 0.5);
                box-shadow    : 0px 2px 16px rgba(0, 0, 0, 0.3);
                color         : whitesmoke;
                padding       : 10px;
                width         : 100%;

                div {
                    &:nth-child(1) {
                        margin-bottom : 10px;

                        .subtotal {
                            font-weight : bold;
                            color       : #B12704;
                        }
                    }

                    &:nth-child(2) {
                        a {
                            padding         : 10px;
                            border          : none;
                            text-align      : center;
                            border-radius   : 5px;
                            text-decoration : none;
                            font-weight     : 400;
                            color           : whitesmoke;
                            background      : #B12704;
                            font-size       : 0.8em;
                            width           : 100%;
                            display         : block;
                            box-sizing      : border-box;
                        }
                    }
                }
            }

            .item-list {
                margin-top : 15px;

                .list {
                    margin-top : 15px;

                    
                }
            }
        }

        .no-items {
            margin-top : 10px;

            a {
                padding         : 10px;
                border          : none;
                text-align      : center;
                border-radius   : 5px;
                text-decoration : none;
                font-weight     : 400;
                display         : table;
                width           : auto;
                font-size       : 0.9em;
                background      : whitesmoke;
                color           : $black;
                margin-top      : 25px;
            }
        }
    }
</style>