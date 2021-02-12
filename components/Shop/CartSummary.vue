<template>
    <div class="cart-summary">
        <div>
            <span class="smaller">Order subtotal ({{ itemsAmount }} {{ cart.items.length > 1 ? "items" : "item" }}): <span class="subtotal">${{ subtotal }}</span></span>
            <br />
            <span class="smaller">Shipping Cost: <Spinner v-if="!extraCostsCalculated" /><span v-if="extraCostsCalculated"><span class="bold">${{ parseFloat(extraCosts).toFixed(2) }}</span> (Standard, Flat Rate, 7-10 business days)</span></span>
            <br />
            <span class="bigger">Order total: <Spinner v-if="!extraCostsCalculated" /><span v-if="extraCostsCalculated" class="bold total">${{ parseFloat(parseFloat(subtotal) + parseFloat(extraCosts)).toFixed(2) }}</span></span>
        </div>
        <div>
            <div class="flex">
                <a 
                    @click.prevent="checkout"
                    href="#"
                    :class="{ 'not-ready': !extraCostsCalculated }"
                    class="checkout-link">
                    <i class="fas fa-credit-card"></i>&nbsp;Proceed to checkout
                </a>
                <span>Powered by <a href="https://stripe.com/" target="_blank">Stripe</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import axios from "axios";
    import Spinner from "~/components/UI/Spinner.vue";

    export default {
        components: {
            Spinner
        },
        computed: {
            ...mapGetters({
                subtotal: "shop/subtotal",
                cart: "shop/cart",
                stripePublicAPIKeyTest: "stripePublicAPIKeyTest",
                itemsAmount: "shop/itemsAmount"
            })
        },
        data() {
            return {
                extraCostsCalculated: false,
                extraCosts: 0
            }
        },
        mounted() {
            this.getExtraCostsEstimated();
        },
        methods: {
            async checkout() {
                if (this.extraCostsCalculated) {
                    this.showLoadingOverlay();

                    try {
                        const req = await axios.post("/api/start-checkout-session", { items: this.cart.items, shipping_cost: this.extraCosts }),
                            stripe = window.Stripe(this.stripePublicAPIKeyTest);

                        stripe.redirectToCheckout({ sessionId: req.data.id });
                    } catch (err) {
                        console.log(err);
                        this.hideLoadingOverlay();
                        this.$toast.error("Unable to proceed with checkout. Please try again later.", { duration: 3000 });
                    }
                }
            },
            async getExtraCostsEstimated() {
                this.extraCostsCalculated = false;
                // try {
                //     const req = await axios.post("/api/get-estimated-costs", this.cart.items);
                //     console.log(req);
                // } catch (err) {
                //     console.log(err);
                //     this.$toast.error("Unable to get estimated costs.", { duration: 5000 });
                // }

                // const itemNames = [... new Set(this.cart.items.map(item => { return item.name }))],
                //     groupedByName = []

                const tees = [],
                    caps = [],
                    hoodies = [];
                
                let cost = 0.00;

                this.cart.items.forEach(item => {
                    let i = 0;

                    while (i < item.quantity) {
                        if (item.name.includes("Tee")) tees.push(item);
                        if (item.name.includes("Cap")) caps.push(item);
                        if (item.name.includes("Hoodie")) hoodies.push(item);
                        i++;
                    }
                });

                for (let i = 0; i < tees.length; i++) {
                    cost += i === 0 ? parseFloat(tees[i].shipping_cost.US.first) : parseFloat(tees[i].shipping_cost.US.additional);
                }

                for (let i = 0; i < caps.length; i++) {
                    cost += i === 0 ? parseFloat(caps[i].shipping_cost.US.first) : parseFloat(caps[i].shipping_cost.US.additional);
                }

                for (let i = 0; i < hoodies.length; i++) {
                    cost += i === 0 ? parseFloat(hoodies[i].shipping_cost.US.first) : parseFloat(hoodies[i].shipping_cost.US.additional);
                }

                this.extraCosts = cost;

                this.extraCostsCalculated = true;
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

        @media (min-width : $breakpoint-md) {
            // max-width : 400px;
            margin                : 0 auto 15px auto;
            font-size             : 1.25em;
            display               : grid;
            grid-template-columns : minmax(0, 1fr) minmax(0, 1fr);
        }

        .smaller {
            font-size : 0.9em;

            @media (min-width : $breakpoint-md) {
                font-size : 0.8em;
            }
        }

        .bold {
            font-weight : bold;
        }

        .total {
            color : #B12704;
        }

        .bigger {
            font-size   : 1.25em;
            font-weight : 400;

            @media (min-width : $breakpoint-md) {
                font-size : 1.15em;
            }
        }

        div {
            &:nth-child(1) {
                margin-bottom : 10px;
                line-height   : 1.5;

                @media (min-width : $breakpoint-md) {
                    margin-bottom : 0px;
                }

                .subtotal {
                    font-weight : bold;
                    // color       : #B12704;
                }

                i {
                    font-size : 1em;
                }
            }

            &:nth-child(2) {
                text-align : center;

                @media (min-width : $breakpoint-md) {
                    display         : flex;
                    align-items     : center;
                    justify-content : flex-end;
                }

                .checkout-link {
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

                    @media (min-width : $breakpoint-md) {
                        width : 300px;
                    }

                    &.not-ready {
                        background : rgb(70, 70, 70);
                        cursor     : not-allowed;
                    }
                }

                span {
                    font-size  : 0.8em;
                    text-align : center;
                    margin-top : 10px;
                    display    : block;

                    @media (min-width : $breakpoint-md) {
                        font-size  : 0.7em;
                        // text-align : right;
                    }

                    a {
                        text-decoration : none;
                        font-weight     : 400;
                    }
                }
            }
        }
    }
</style>