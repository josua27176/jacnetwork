<template>
    <div>
        <div class="container">
            <form @submit.prevent="register">
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
                title: 'JAC Network - Register'
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
            register() {
                this.$axios.post('/api/account/register', {
                    username: this.username,
                    password: this.password,
                }, { params: {
                        captcha: this.captcha,
                        hash: "98uazd98had90haoidhaodhj",
                    }}
                )
                    .then(function (res) {
                        console.log(res)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
        },
    }
</script>
