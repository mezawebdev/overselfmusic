<template>
    <div id="cart">
        <div class="container">
            <ShopMenu>
                <MenuButton to="/shop">
                    <i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back to shop
                </MenuButton>
            </ShopMenu>
            <Title>CART</Title>
            <div
                v-if="cart.items.length > 0" 
                class="with-items">
                <div class="grid-block">
                    <CartSummary ref="cartSummary" />
                </div>
                <hr />
                <div class="grid-block">
                    <div class="item-list">
                        <h4><strong>{{ itemsAmount }} {{ itemsAmount > 1 ? "items" : "item" }}</strong> in your cart</h4>
                        <div class="list">
                            <Spinner v-if="!itemsLoaded" />
                            <div v-if="itemsLoaded">
                                <CartItem
                                    v-for="(item, i) in items"
                                    :key="i"
                                    :item="item"
                                    @onQuantityChange="onQuantityChange"
                                    @refresh="refresh" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <hr v-if="cart.items.length > 4 && window.innerWidth > 767" /> -->
                <!-- <CartSummary v-if="cart.items.length > 4 && window.innerWidth < 767" /> -->
            </div>
            <div 
                v-if="cart.items.length === 0"
                class="no-items">
                <span><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Your cart is empty</span>
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
    import CartSummary from "~/components/Shop/CartSummary.vue";
    import ShopMenu from "~/components/Shop/ShopMenu.vue";
    import MenuButton from "~/components/Shop/MenuButton.vue";

    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | Cart`
            }
        },
        components: {
            Spinner,
            ShopLink,
            CartItem,   
            BackToItems,
            Title,
            CartSummary,
            ShopMenu,
            MenuButton
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
        },
        mounted() {
            this.setLayout("shop");
            setTimeout(this.fetch, 250);
        },
        methods: {
            async fetch() {
                this.itemsLoaded = false;

                try {
                    const req = await axios.post("/api/shop/get-items-with-size", {
                        items: this.cart.items.map(item => { return { id: item.productId, size: item.size }})
                    });
                    
                    if (req.data.length > 0) {
                        this.cart.items.forEach(item => {
                            const resItem = req.data.find(item_ => { return item_.id === item.productId && item_.size === item.size });
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
            async refresh() {
                await this.fetch();
                if (this.$refs.cartSummary) this.$refs.cartSummary.getExtraCostsEstimated();
            },
            onQuantityChange(item) {
                if (parseInt(item.quantity) === 0) item.quantity = 1;
                this.updateItem(item);
                if (this.$refs.cartSummary) this.$refs.cartSummary.getExtraCostsEstimated();
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

        .with-items {
            .item-list {
                margin-top : 15px;

                .list {
                    margin-top : 15px;

                    > div {
                        @media (min-width : $breakpoint-md) {
                            display               : grid;
                            grid-template-columns : minmax(0, 1fr) minmax(0, 1fr);
                            grid-gap              : 15px;
                        }

                        @media (min-width : $breakpoint-lg) {
                            grid-template-columns : minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
                        }
                    }
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