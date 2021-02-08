<template>
    <div class="cart-summary">
        <div>
            Order subtotal ({{ itemsAmount }} {{ cart.items.length > 1 ? "items" : "item" }}): <span class="subtotal">${{ subtotal }}</span>
        </div>
        <div>
            <a 
                @click.prevent="checkout"
                href="#">
                <i class="fas fa-credit-card"></i>&nbsp;Proceed to checkout
            </a>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import axios from "axios";

    export default {
        computed: {
            ...mapGetters({
                subtotal: "shop/subtotal",
                cart: "shop/cart",
                stripePublicAPIKeyTest: "stripePublicAPIKeyTest",
                itemsAmount: "shop/itemsAmount"
            })
        },
        methods: {
            async checkout() {
                this.showLoadingOverlay();

                try {
                    const req = await axios.post("/api/start-checkout-session", this.cart.items),
                        stripe = window.Stripe(this.stripePublicAPIKeyTest);

                    stripe.redirectToCheckout({ sessionId: req.data.id });
                } catch (err) {
                    console.log(err);
                    this.hideLoadingOverlay();
                    this.$toast.error("Unable to proceed with checkout. Please try again later.", { duration: 3000 });
                }
            },
            ...mapActions({
                showLoadingOverlay: "showLoadingOverlay",
                hideLoadingOverlay: "hideLoadingOverlay"
            })
        }
    }
</script>

<style lang="scss">
    .cart-summary {
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
</style>