<template>
    <div id="shop-page">
        <div class="container">
            <ShopMenu>
                <MenuButton to="/shop/cart">
                    <i class="fas fa-shopping-cart"></i>&nbsp;Cart
                </MenuButton>
            </ShopMenu>
            <h1>SHOP</h1>
            <client-only>
                <Spinner v-if="!itemsReady" />
                <RecentlyAddedItem 
                    :itemId="addedItemId"
                    v-if="showRecentlyAddedItem" />
            </client-only>
            <div
                v-show="itemsReady" 
                class="items">
                <masonry 
                    :cols="{ default: 3, 500: 1, 792: 2 }"
                    :gutter="10"
                    ref="masonry">
                    <nuxt-link 
                        v-for="(item, i) in items" 
                        :to="'/shop/item/' + item.id"
                        :key="i"
                        ref="item"
                        :class="{ selected: itemSelected }"
                        class="item">
                        <img :src="'/assets/images/products/' + item.images[0]" />
                        <div class="item-info">
                            <div>
                                <span class="item-name">{{ item.name }}</span>
                                <hr />
                                <span class="space"> - </span>
                                <span class="item-price">${{ item.price.unit_amount }}</span>
                            </div>
                        </div>
                    </nuxt-link>
                </masonry>
            </div>
            <div class="shipping-notice">
                Shipping To U.S. Only
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Spinner from "~/components/UI/Spinner.vue";
    import { mapActions, mapGetters } from "vuex";
    import RecentlyAddedItem from "~/components/Shop/RecentlyAddedItem.vue";
    import CookieNotice from "~/components/Shop/CookieNotice.vue";
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
            RecentlyAddedItem,
            CookieNotice,
            ShopMenu,
            MenuButton
        },
        data() {
            return {
                itemsReady: false,
                items: [],
                itemSelected: false,
                showRecentlyAddedItem: false,
                addedItemId: null
            }
        },
        created() {
            // console.log(this.layout);
            this.setLayout("shop");
        },
        mounted() {
            if (typeof this.$route.query["added-item"] === "string") {
                setTimeout(() => {
                    this.addedItemId = this.$route.query.id;
                    this.showRecentlyAddedItem = true;
                    this.$router.replace({ query: null });
                }, 100);
            }

            this.fetchItems();
        },
        methods: {
            async fetchItems() {
                const query = await axios.get("/api/shop/get-all-items");
                this.items = query.data;
                this.itemsReady = true;
            },
            goToItem(item) {
                if (window.innerWidth < 767) {
                    this.$router.push("/shop/item/" + item.id);
                } else {
                    this.$refs.item.forEach(item => {
                        const ran = Math.random() / 2;

                        $(item).css({
                            "transition-delay": `${ ran }s`
                        });
                    });

                    this.itemSelected = true;

                    setTimeout(() => {
                        this.$router.push("/shop/item/" + item.id);
                    });
                }
            },
            ...mapActions({
                setLayout: "setLayout"
            })
        }
    }
</script>

<style scoped lang="scss">
    #shop-page {
        h1 {
            margin-bottom : 15px;
        }

        .items {
            .item {
                margin-bottom   : 10px;
                border-radius   : 5px;
                display         : flex;
                justify-content : center;
                background      : rgba(225, 225, 225, 0.75);
                width           : 100%;
                margin-left     : auto;
                box-shadow      : 0px 2px 10px rgba(0, 0, 0, 0.5);
                margin-right    : auto;
                position        : relative;
                cursor          : pointer;
                position        : relative;
                transition      : transform 0.15s ease-in-out,
                                  margin-top 0.25s ease-in-out,
                                  opacity 0.25s ease-in-out;

                &:hover {
                    transform : scale(1.025);

                    .item-info {
                        @media (min-width : $breakpoint-md) {
                            opacity : 1;
                        }
                    }
                }

                &:active {
                    transform : scale(0.975);
                }

                &.selected {
                    margin-top : -10px;
                    opacity    : 0;
                }

                img {
                    max-width : 500px;
                    height    : 100%;
                    width     : 70%;
                    padding   : 15px;
                    filter    : drop-shadow(0 0 10px rgba(0, 0, 0, 0.25));
                }

                .item-info {
                    position                   : absolute;
                    background                 : rgba(25, 25, 25, 0.9);
                    color                      : white;
                    width                      : 100%;
                    padding                    : 10px;
                    border-bottom-right-radius : 5px;
                    border-bottom-left-radius  : 5px;
                    display                    : flex;
                    bottom                     : 0px;
                    justify-content            : center;
                    align-items                : center;
                    font-size                  : 1em;
                    font-weight                : 400;
                    box-sizing                 : border-box;
                    opacity                    : 1;
                    transition                 : opacity 0.5s ease-in-out;

                    @media (min-width : $breakpoint-md) {
                        height        : 100%;
                        opacity       : 0;
                        font-size     : 1.25em;
                        border-radius : 5px;
                        text-align    : center;
                    }

                    hr {
                        display : none;

                        @media (min-width : $breakpoint-md) {
                            display : block;
                            width   : 40px;
                        }
                    }

                    .item-price {
                        font-weight : 200;
                    }

                    .space {
                        @media (min-width : $breakpoint-md) {
                            display : none;
                        }
                    }
                }
            }
        }

        .shipping-notice {
            margin-top  : 15px;
            font-style  : italic;
            font-weight : 400;
        }
    }
</style>