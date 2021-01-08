<template>
    <div id="shop-page">
        <div class="container">
            <h1>SHOP</h1>
            <Spinner v-if="!itemsReady" />
            <div
                v-show="itemsReady" 
                class="items">
                <masonry 
                    :cols="{ default: 3, 500: 1, 792: 2 }"
                    :gutter="10"
                    ref="masonry">
                    <div 
                        v-for="(item, i) in items" 
                        @click="goToItem(item)"
                        :key="i"
                        ref="item"
                        :class="{ selected: itemSelected }"
                        class="item">
                        <img :src="item.images[0]" />
                        <div class="item-info">
                            <div>
                                <span class="item-name">{{ item.name }}</span>
                                <hr />
                                <span class="item-price"></span>
                            </div>
                        </div>
                    </div>
                </masonry>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Spinner from "~/components/UI/Spinner.vue";
    import { mapActions, mapGetters } from "vuex";

    export default {
        components: {
            Spinner
        },
        computed: {
            ...mapGetters([
                "layout"
            ])
        },
        data() {
            return {
                itemsReady: false,
                items: [],
                itemSelected: false
            }
        },
        created() {
            console.log(this.layout);
            this.setLayout("shop");
        },
        mounted() {
            this.fetchItems();
        },
        methods: {
            async fetchItems() {
                const query = await axios.get("/api/shop/get-all-items");
                this.items = query.data.data;
                this.itemsReady = true;
                console.log(this.items);
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
            ...mapActions([
                "setLayout"
            ])
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
                background      : rgba(200, 200, 200, 0.75);
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
                    width     : 70%;
                    padding   : 15px;
                    filter    : drop-shadow(0 0 10px rgba(0, 0, 0, 0.25));
                }

                .item-info {
                    position        : absolute;
                    background      : rgba(25, 25, 25, 0.9);
                    color           : white;
                    width           : 100%;
                    height          : 100%;
                    border-radius   : 5px;
                    display         : flex;
                    justify-content : center;
                    align-items     : center;
                    font-size       : 1.25em;
                    font-weight     : bold;
                    opacity         : 0;
                    transition      : opacity 0.5s ease-in-out;
                }
            }
        }
    }
</style>