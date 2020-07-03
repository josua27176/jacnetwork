<template>
    <div class="my-5">
        <div class="container">
            <div class="col-xl-4 mx-auto float-none">
                <form @submit.prevent="login({ username, password, captcha })" class="d-block mx-auto">
                    <div class="input-group mb-5">
                        <label>Enter your username:</label>
                        <input type="text" name="username" v-model="username">
                    </div>
                    <div class="input-group mb-5">
                        <label>Enter your password:</label>
                        <input type="password" name="password" v-model="password">
                    </div>
                    <recaptcha class="mb-5"
                            @error="onRecaptchaError"
                            @success="onRecaptchaSuccess"
                            @expired="onRecaptchaExpired"
                    ></recaptcha>
                    <button class="form-button bg-blue" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import JacNavbar from '@/components/JacNavbar';
    import { mapState, mapActions } from 'vuex';
    export default {
        layout: 'default',
        name: 'Home',
        head() {
            return {
                title: 'JAC Network - Login'
            }
        },
        components: {JacNavbar},
        data() {
            return {
                username: '',
                password: '',
                captcha: '',
            }
        },
        created() {

        },
        methods: {
            onRecaptchaSuccess(recaptchaToken) {
                this.captcha = recaptchaToken;
            },
            onRecaptchaError() {
                console.log("Captcha Error")
            },
            onRecaptchaExpired() {
                console.log("Captcha Expired")
            },
            ...mapActions({
                login: 'authentication/login'
            })
        },
    }
</script>
