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
                username: null,
                password: null,
                captcha: null,
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
            async login () {
                try {
                    let res = await this.$auth.login('local', {
                        data: {
                            username: this.username,
                            password: this.password
                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            }
        },
    }
</script>
