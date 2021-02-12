<template>
    <div id="item-page">
        <div class="container">
            <ShopMenu>
                <MenuButton to="/shop">
                    <i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back to shop
                </MenuButton>
                <MenuButton to="/shop/cart">
                    <i class="fas fa-shopping-cart"></i>&nbsp;Cart
                </MenuButton>
            </ShopMenu>
            <Title>ITEM</Title>
            <Spinner v-if="!itemLoaded" />
            <div
                v-if="itemLoaded" 
                class="item-wrap">
                <div class="block">
                    <client-only>
                        <carousel
                            :navigationNextLabel="carouselNextHtml"
                            :navigationPrevLabel="carouselPrevHtml"
                            :perPage="1"
                            :navigationEnabled="true">
                            <slide
                                v-for="(image, i) in item.images"
                                :key="'product' + i">
                                <a 
                                    @click.prevent="showSpotlight({
                                        items: item.images.map(image_ => { return { title: '', url: '/assets/images/products/' + image_ } }),
                                        startingIndex: i
                                    })" 
                                    href="#">
                                    <img :src="'/assets/images/products/' + image" />
                                </a>
                            </slide>
                        </carousel>
                    </client-only>
                </div>
                <div class="block">
                    <div class="top-grid">
                        <div class="name">
                            <p>{{ item.name }}<span class="desktop-space">&nbsp;</span><span class="desktop-price">${{ item.price.unit_amount }}.00</span></p>
                        </div>
                        <hr />
                        <div class="price">
                            <p>${{ item.price.unit_amount }}.00</p>
                        </div>
                    </div>
                    <div class="description">
                        <p>{{ item.description }}</p>
                    </div>
                    <div 
                        v-if="item.sizeChart.length > 0"
                        class="size-chart">
                        <a 
                            @click.prevent="seeSizeChart"
                            href="#">
                            <span class="bold">See Size Guide</span>
                        </a>
                    </div>
                    <div class="shipping-notice">
                        Shipping To U.S. Only
                    </div>
                    <div class="extra-info">
                        <p><span class="bold">Questions?</span> Send us a message on our <nuxt-link to="/contact">Contact Page</nuxt-link>.</p>
                    </div>
                    <div 
                        v-if="item.metadata.sizes[0] !== 'One size fits all'"
                        class="size">
                        <div class="grid">
                            <div class="grid-block">
                                <label>Select Size:</label>
                            </div>
                            &nbsp;&nbsp;
                            <div class="grid-block">
                                <client-only>
                                    <v-select
                                        v-model="size"
                                        :searchable="false"
                                        :filterable="false"
                                        :clearable="false"
                                        :options="item.metadata.sizes">
                                    </v-select>
                                </client-only>
                            </div>
                        </div>
                    </div>
                    <div 
                        v-if="item.metadata.sizes[0] === 'One size fits all'"
                        class="size one-size-fits-all">
                        <label>One size fits all</label>
                    </div>
                    <div 
                        v-if="error"
                        class="error">
                        Please Select A Size
                    </div>
                    <button 
                        @click="addToCart"
                        :class="{ disabled: size === 'Select Size' }">
                        <i class="fas fa-plus"></i>&nbsp;Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Spinner from "~/components/UI/Spinner.vue";
    import axios from "axios";
    import { mapGetters, mapActions } from "vuex";
    import Title from "~/components/Layout/Title.vue";
    import BackToItems from "~/components/Shop/BackToItems.vue";
    import ShopMenu from "~/components/Shop/ShopMenu.vue";
    import MenuButton from "~/components/Shop/MenuButton.vue";

    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | Item`
            }
        },
        name: "cart-item",
        components: {
            Spinner,
            Title,
            BackToItems,
            ShopMenu,
            MenuButton
        },
        computed: {
            selectedSize() {
                return this.size === "Select Size" ? false : true;
            },
            ...mapGetters({
                cart: "shop/cart"
            })
        },
        data() {
            return {
                itemLoaded: false,
                item: null,
                size: "Select Size",
                carouselNextHtml: '<i class="fas fa-chevron-right"></i>',
                carouselPrevHtml: '<i class="fas fa-chevron-left"></i>',
                error: false
            }
        },
        created() {
            this.setLayout("shop");
        },
        mounted() {
            this.fetch();
        },
        methods: {
            async fetch() {
                const req = await axios.get("/api/shop/get-item?id=" + this.$route.params.item);
                this.item = req.data[0];
                this.itemLoaded = true;
                
                if (this.item.metadata.sizes[0] === "One size fits all") {
                    this.size = "One size fits all";
                }
            },
            addToCart() {
                if (this.selectedSize) {
                    this.error = false;

                    this.addItemToCart({
                        name: this.item.name,
                        productId: this.item.id,
                        size: this.size,
                        price: this.item.price.unit_amount,
                        color: this.item.metadata.color,
                        shipping_cost: this.item.metadata.shipping_cost,
                        quantity: 1 
                    });

                    this.$router.push("/shop?added-item=1&id=" + this.item.id);
                } else {
                    this.error = true;
                }
            },
            seeSizeChart() {
                console.log(this.showSpotlight);
                this.showSpotlight({
                    items: [{ title: '', url: '/assets/images/products/' + this.item.sizeChart }],
                    startingIndex: 0
                });
            },
            ...mapActions({
                addItemToCart: "shop/addItemToCart",
                setLayout: "setLayout",
                showSpotlight: "showSpotlight"
            })
        }
    }
</script>

<style lang="scss">
    #item-page {
        color : white;

        .menu {
            text-align      : center;
            margin-bottom   : 35px;
            
            a {
                text-decoration : none;
            }
        }

        .item-wrap {
            @media (min-width : $breakpoint-md) {
                display               : grid;
                grid-template-columns : minmax(0, 1fr) minmax(0, 1fr);
                grid-gap              : 25px;
            }

            .block {
                &:nth-child(1) {
                    margin-bottom : 20px;
                    background    : rgba(225, 225, 225, 0.75);
                    box-shadow    : 0px 2px 10px rgba(0, 0, 0, 0.5);
                    width         : 100vw;
                    margin-left   : -15px;

                    @media (min-width : $breakpoint-md) {
                        width         : 100%;
                        margin-left   : 0px;
                        border-radius : 5px;
                    }

                    img {
                        max-width   : 300px;
                        display     : block;
                        margin      : 0 auto;
                        padding-top : 10px;
                        position    : relative;
                        top         : 50%;
                        transform   : translate(0, -50%);
                        cursor      : zoom-in;
                    }   
                    
                    .VueCarousel {
                        box-sizing : border-box;

                        .VueCarousel-dot-container {
                            margin-top : 0px !important;
                        }

                        .VueCarousel-navigation {
                            width     : 70%;
                            position  : absolute;
                            left      : 50%;
                            top       : 45%;
                            transform : translate(-50%, 0);

                            button:focus {
                                outline : none;
                            }

                            .VueCarousel-navigation-button {
                                background    : rgba(0, 0, 0, 0.8);
                                color         : white;
                                box-shadow : 0px 4px 6px rgba(0, 0, 0, 0.4);
                                padding       : 0px;
                                width         : 40px;
                                height        : 40px;
                                border-radius : 20px;
                                border        : 1px solid white;
                            }
                        }

                        .VueCarousel-pagination {
                            button:focus {
                                outline : none;
                            }

                            button {
                                margin-top : 0px !important;
                            }
                        }
                    }
                }

                &:nth-child(2) {
                    text-align : center;

                    .top-grid {
                        @media (min-width : $breakpoint-md) {
                            margin-bottom : 20px;
                        }
                    }

                    .name {
                        p {
                            font-size   : 1.75em;
                            text-align  : center;
                            font-weight : 400;

                            @media (min-width : $breakpoint-md) {
                                font-size  : 2em;
                                text-align : left;
                            }
                        }

                        .desktop-space {
                            display : none;

                            @media (min-width : $breakpoint-md) {
                                display : inline;
                            }
                        }

                        .desktop-price {
                            display : none;

                            @media (min-width : $breakpoint-md) {
                                display       : inline-block;
                                background    : #B12704;
                                padding       : 5px;
                                font-weight   : 200 !important;
                                border-radius : 5px;
                                line-height   : 25px;
                                font-size     : 0.75em !important;
                                box-shadow    : 0px 2px 6px rgba(0, 0, 0, 0.5);
                            }
                        }
                    }

                    hr {
                        width     : 190px;
                        max-width : 190px;

                        @media (min-width : $breakpoint-md) {
                            display : none;
                        }
                    }

                    .price {
                        font-size     : 1.25em;
                        margin-bottom : 15px;
                        font-weight   : 400;

                        @media (min-width : $breakpoint-md) {
                            display         : none;
                            justify-content : flex-end;
                            align-items     : center;
                            margin-bottom   : 0px;
                            font-size       : 1.75em;
                        }

                        p {
                            @media (min-width : $breakpoint-md) {
                                background    : rgba(0, 0, 0, 0.5);
                                padding       : 5px;
                                display       : table;
                                border-radius : 5px;
                            }
                        }
                    }

                    .description,
                    .extra-info,
                    .size-chart {
                        margin-bottom : 25px;
                        text-align    : left;

                        @media (min-width : $breakpoint-md) {
                            margin-bottom : 30px;
                        }

                        span {
                            font-weight : bold;
                        }
                    }

                    .size {
                        text-align : center;

                        &.one-size-fits-all {
                            text-align  : center;
                            font-weight : 400;
                        }

                        .grid {
                            // display               : grid;
                            // grid-template-columns : minmax(0, 0.7fr) minmax(0, 1.3fr);
                            white-space : nowrap;

                            .grid-block {
                                display : inline-block;

                                &:nth-child(1) {
                                    label {
                                        display     : block;
                                        font-weight : 400;
                                    }
                                }

                                &:nth-child(2) {
                                    width : 150px;

                                    .vs__dropdown-toggle {
                                        background    : white;
                                        border-radius : 5px;
                                        width         : 100%;
                                        text-align    : center;
                                        margin        : 0 auto;
                                    }

                                    .vs__dropdown-menu {
                                        display : block;
                                        width   : 100%;
                                    }
                                }
                            }
                        }
                    }

                    .error {
                        color       : rgb(194, 64, 64);
                        font-weight : bold;
                        margin-top  : 15px;
                    }

                    button {
                        margin-top    : 25px;
                        background    : white;
                        border        : none;
                        padding       : 10px;
                        font-weight   : 400;
                        border-radius : 5px;

                        // &.disabled {
                        //     pointer-events : none;
                        //     opacity        : 0.3;
                        // }
                    }

                    
                }
            }
        }  

        .shipping-notice { 
            margin-bottom : 25px;
            display       : block;
            text-align    : left;
            font-style    : italic;
        }
    }
</style>