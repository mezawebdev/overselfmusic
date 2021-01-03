<!--
||----------------------------------||
||                                  ||
||    Example Component             ||
||    Example Component             ||
||    Alex Meza (Meza Web Lab)      ||
||    2019                          ||
||                                  ||
||----------------------------------||
-->

<template>
	<div id="contact-page-component">
        <div v-if="success" class="success">
            <p>Email Sent! Thank you, we will reach out soon.</p>
        </div>
        <div v-if="error" class="error">
            <p>Could not send email. Please try again later.</p>
        </div>
		<form @submit.prevent="sendEmail" class="form">
            <div class="group">
                <label>Your Name</label>
                <br />
                <input v-model="name" required type="text" />
            </div>
            <div class="group">
                <label>Your Email</label>
                <br />
                <input v-model="email" required type="email" />
            </div>
            <div class="group">
                <label>Message</label>
                <br />
                <textarea v-model="message" required></textarea>
            </div>
            <button :class="{ disabled : disabled }" type="submit">Send</button>
        </form>
	</div>	
</template>

<script>
    import axios from "axios";

    export default {
        head() {
            return {
                title: `${ this.OVERSELF.global.siteTitle } | Contact`
            }
        },
        name  : "contact",
        props : [],
        watch : {},
        data() {
            return {
                name     : "",
                email    : "",
                message  : "",
                success  : false,
                error    : false,
                disabled : false
            };
        },
		created() {},
        mounted() {
        },
        methods : {
            sendEmail() {
                this.disabled = true;

                axios.post(`/api/send-email?name=${ this.name }&email=${ this.email }&message=${ this.message }`)
                    .then(response => {
                        this.onEmailSent();
                    })
                    .catch(response => {
                        this.onError();
                        console.log(response);
                    });
            },
            onEmailSent() {
                this.name     = "";
                this.email    = "";
                this.message  = "";
                this.success  = true;
                this.error    = false;
                this.disabled = false;
            },
            onError() {
                this.success  = false;
                this.error    = true;
                this.disabled = false;
            }
        }
    };
</script>

<style lang="scss">
    #contact-page-component {
        .success,
        .error {
            width         : 100%;
            text-align    : center;
            // font-size     : 1.4em;
            color         : rgb(31, 204, 15);
            margin-bottom : 25px;
        }

        .error {
            color : red;
        }

        .form {
            display   : table;
            transform : translateX(-50%);
            left      : 50%;
            position  : relative;

            .group {
                margin-bottom : 20px;

                label {
                    color     : $color-primary;
                    // font-size : 1.3em;
                }

                input,
                textarea {
                    margin-top    : 10px;
                    width         : 250px;
                    background    : rgba(0, 0, 0, 0.6);
                    border        : none;
                    border-radius : 3px;
                    color         : $white;
                    height        : 35px;
                    box-shadow    : $box-shadow-main;
                    padding       : 5px 10px;
                }

                textarea {
                    height : 150px;
                }
            }

            button {
                margin        : 0 auto;
                display       : block;
                background    : $color-primary;
                border        : none;
                border-radius : 3px;
                box-shadow    : $box-shadow-main;
                // font-size     : 1.4em;
                padding       : 10px 20px;
                color         : black;

                &.disabled {
                    pointer-events : none;
                    background     : rgb(150, 150, 150);
                }
            }
        }
    }
</style>
