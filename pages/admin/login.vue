<template>
    <div>
        <div class="container">
            <form @submit.prevent="login">
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
            async login ({username, password}) {
                const data = {
                    username: this.username,
                    password: this.password
                }
                try {
                    let res = await this.$auth.login('local', data);
                    console.log(data)
                } catch (err) {
                    console.log(err);
                    console.log(data)
                }
            }
        },
    }
</script>
