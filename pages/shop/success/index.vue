<template>
    <div id="success-page">
        <div class="container">
            <div class="not-loaded">
                <Spinner v-if="!orderLoaded" />
            </div>
            <div 
                v-if="orderLoaded"
                class="loaded">
                <div class="headline">
                    <span>T</span>
                    <span>H</span>
                    <span>A</span>
                    <span>N</span>
                    <span>K</span>
                    <br class="mobile" />
                    <span class="nbsp">&nbsp;</span>
                    <span>Y</span>
                    <span>O</span>
                    <span>U</span>
                    <span>!</span>
                    <br class="desktop" />
                    <img src="/assets/images/heart.png" />
                </div>
                <div class="body">
                    <p>Your order has been received and is now being fulfilled.</p>
                    <br />
                    <p>Your order number is: <span class="green bold">{{ orderNumber }}</span>.</p>
                    <br />
                    <p>Your total was <span class="bold">${{ total }}</span>.</p>
                    <br />
                    <p>You will receive an email confirmation shortly.</p>
                    <br />
                    <ShopMenu>
                        <MenuButton to="/shop">
                            <i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back to shop
                        </MenuButton>
                    </ShopMenu>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    import Spinner from "~/components/UI/Spinner.vue";
    import axios from "axios";
    import { mapActions } from "vuex"; 
    import ShopMenu from "~/components/Shop/ShopMenu.vue";
    import MenuButton from "~/components/Shop/MenuButton.vue";

    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | Shop`
            }
        },
        components: {
            Spinner,
            ShopMenu,
            MenuButton
        },
        data() {
            return { 
                orderNumber: null,
                orderLoaded: false,
                total: null
            }
        },
        mounted() {
            this.setLayout("shop");

            if (typeof this.$route.query.on === "string") {
                this.orderNumber = this.$route.query.on;
                this.$router.replace({'query': null});
                this.fetchOrder();
            } else {
                this.$toast.error("There was an error. Please try again.", { duration: 5000 });
                this.$router.push("/shop");
            }
        },
        methods: {
            async fetchOrder() {
                try {
                    const req = await axios.get("/api/shop/fetch-order-total?on=" + this.orderNumber);
                    this.total = req.data;
                    this.clearCart();
                    this.orderLoaded = true;
                } catch (err) {
                    this.$router.push("/shop");
                }
            },
            ...mapActions({
                setLayout: "setLayout",
                clearCart: "shop/clearCart"
            })
        }
    }
</script>

<style lang="scss">
    #success-page {
        margin-bottom : 150px;

        .not-loaded {
            text-align : center;
        }

        .loaded {
            .headline {
                text-align    : center;
                font-size     : 3.5em;
                font-weight   : 400;
                margin-bottom : 25px;

                @media (min-width : $breakpoint-md) {
                    font-size : 4.5em;
                }

                img {
                    width      : 75px;
                    margin-top : 15px;
                }

                .nbsp {
                    display : none;

                    @media (min-width : $breakpoint-md) {
                        display : inline;
                    }
                }

                .mobile {
                    @media (min-width : $breakpoint-md) {
                        display : none;
                    }
                }
            }

            .body {
                @media (min-width : $breakpoint-md) {
                    font-size : 1.3em;
                    max-width : 515px;
                    margin    : 0 auto;
                }

                .bold {
                    font-weight : bold;
                }

                .green {
                    color : #4BB543;
                }
            }
        }
    }
</style>