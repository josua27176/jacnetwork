<template>
    <div>
        <div class="container">
            <form @submit.prevent="login({ username, password, captcha })">
                <input type="text" name="username" v-model="username">
                <input type="password" name="password" v-model="password">
                <recaptcha
                        @error="onRecaptchaError"
                        @success="onRecaptchaSuccess"
                        @expired="onRecaptchaExpired"
                ></recaptcha>
                <input type="submit" value="Submit">
            </form>
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
