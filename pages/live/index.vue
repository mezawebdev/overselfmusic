<template>
    <div id="shows-page">
        <div class="container">
            <div class="show-list">
                <div   
                    v-for="(show, i) in shows"
                    :key="i"
                    @click="goToUrl(show.uri)"
                    class="show">
                    <div class="date">
                        <p v-html="formatDate(show.start.date)"></p>
                    </div>
                    <div class="description">
                        <p class="groups">
                            <span>Overself</span>,
                            {{ formatGroupNames(show.performance) }}
                        </p>
                        <p class="information">
                            {{ show.venue.displayName }}, {{ show.location.city }} 
                            <!-- {{ show.start.time }} -->
                        </p>
                    </div>
                    <div class="tickets">
                        <a :href="show.ticketsUrl" target="_blank">TICKETS</a>
                    </div>
                </div>
                <h3 v-if="!shows">No concerts coming up.</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters } from "vuex";

    export default {
        head() {
            return {
                title : "OVERSELF | Live"
            }
        },
        computed : mapGetters([
            "shows"
        ]),
        methods : {
            goToUrl(url) {
                window.open(url);
            },
            formatDate(date) {
                let monthShort = Date.prototype.getShortMonthName(parseInt(date.split("-")[1], 10) - 1),
                    day = date.split("-")[2];

                return `${ monthShort }<br />${ day }`;
            },
            formatGroupNames(groupsArray) {
                let string = "";
 
                for (let i = 0; i < groupsArray.length; i++) {
                    if (groupsArray[i].displayName !== "Overself") {
                        string += groupsArray[i].displayName + ", ";
                    }
                }
                
                return string.slice(0, -2);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #shows-page {
        .show-list {
            // white-space : nowrap;
            max-width   : 600px;
            margin      : 0 auto;

            h3 {
                font-family : $font-family;
                color       : $color-primary;
                font-size   : 2em;
                text-align  : center;
            }

            .show {
                width                 : 100%;
                display               : grid;
                grid-template-columns : 50px 1fr 85px;
                background            : rgba(5, 0, 0, 0.4);
                box-shadow            : $box-shadow-main;
                margin-bottom         : 10px;

                &:hover {
                    transform : scale(1.05);
                    cursor    : pointer;
                }

                .date,
                .tickets {
                    display         : flex;
                    justify-content : center;
                    align-items     : center;
                }

                div {
                    padding : 10px;

                    &:nth-child(1) {
                        color      : $white;
                        background : $color-primary;
                        text-align : center;

                        p {
                            color : $white;
                        }
                    }

                    &:nth-child(2) {
                        .groups {
                            font-weight : 700;
                        }
                    }

                    p {
                        color : $color-primary;
                        font-size : 1.1em;
                    }

                    &:nth-child(3) {
                        a {
                            background      : $color-primary;
                            text-decoration : none;
                            padding         : 10px;
                            position        : relative;
                            top             : 13px;
                            height          : calc(100% - 20px);
                            top             : 0;
                            display         : flex;
                            align-items     : center;
                        }
                    }
                }
            }
        }
    }
</style>