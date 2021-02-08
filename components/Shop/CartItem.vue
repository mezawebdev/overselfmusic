<template>
    <div class="cart-item">
        <Panel>
            <div class="grid">
                <div class="block">
                    <img :src="'/assets/images/products/' + item.images[0]" />
                </div>
                <div class="block">
                    <h3 class="item-name">{{ item.name }}</h3>
                    <p>Price: <strong>${{ item.price.unit_amount * item.quantity }}</strong>&nbsp;(${{ item.price.unit_amount }} each)</p>
                    <p>Color: <strong>{{ item.metadata.color }}</strong></p>
                    <p>Size: <strong>{{ item.size }}</strong></p>
                    <p class="quantity">
                        Quantity:&nbsp;
                        <input 
                            type="number" 
                            @change="$emit('onQuantityChange', item)"
                            v-model="item.quantity" />
                    </p>
                    <button 
                        @click="removeItem(item)"
                        class="remove">
                        <i class="fas fa-times"></i>&nbsp;Remove
                    </button>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script>
    import Panel from "./Panel.vue";
    import { mapGetters, mapActions } from "vuex";

    export default {
        components: {
            Panel
        },
        props: ["item"],
        computed: {
            ...mapGetters({
                cart: "shop/cart"
            })
        },
        methods: {
            ...mapActions({
                removeItem: "shop/removeItem"
            })
        }
    }
</script>

<style scoped lang="scss">
    .cart-item {
        margin-bottom : 15px;

        &:last-child {
            margin-bottom : 0px;
        }

        .grid {
            display               : grid;
            grid-template-columns : 90px 1fr;
            grid-gap              : 15px;

            .block {
                &:nth-child(1) {
                    img {
                        width         : 100%;
                        background    : rgba(255, 255, 255, 0.9);
                        border-radius : 5px;
                    }
                }

                &:nth-child(2) {
                    box-sizing : border-box;
                    .item-name {
                        font-size     : 1.5em;
                        font-weight   : 400;
                        margin-bottom : 5px;
                    }

                    p {
                        font-size : 0.9em;
                        
                        strong {
                            font-weight : 400;
                        }
                    }

                    .quantity {
                        input {
                            display    : inline-block;
                            color      : black;
                            width      : 40px;
                            background : rgba(250, 250, 250, 0.9);
                            border     : none;
                            text-align : center;
                            box-sizing : border-box;
                        }
                    }

                    .remove {
                        margin-top    : 5px;
                        padding       : 5px;
                        background    : $black;
                        color         : $white;
                        border-radius : 5px;
                        border        : none;
                        box-shadow    : 0px 2px 6px rgba(0, 0, 0, 0.5);
                    }
                }
            }
        }
    }
</style>