<template>
    <div>
        <div class="header-alt">
            <JacNavbar></JacNavbar>
            <div class="container">
                <div class="header-event">
                    <JacEvents></JacEvents>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Current Events</h4>
                    <div class="row">
                        <div class="col-md-12 mb-5" v-for="event in events">
                            <div class="event">
                                <div class="event-header">
                                    <span class="event-category mx-auto d-block mb-3">Event</span>
                                    <h3 class="font-white fs-30 text-center fw-700 text-uppercase mb-5">{{ event.title }}</h3>
                                    <h4 class="fs-24 font-light text-center text-uppercase f-clarika fw-600 mt-2 mb-0">{{ eventTime(event.start) }}</h4>
                                    <p class="fs-18 font-light lh-2 mb-4 text-center mt-0">Event Start Time</p>
                                </div>
                                <div class="event-content bg-dark px-5 pb-4 mb-0">
                                    <h4 class="fs-22 text-white fw-700 text-uppercase">{{ event.title }}</h4>
                                    <p class="fs-18 font-light lh-2 mb-4">{{ event.body }}</p>
                                </div>
                                <div class="event-footer px-5 py-3">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="fs-16 font-white mt-2 mb-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> {{ event.author }}</p>
                                        </div>
                                        <div class="col-3">
                                            <div class="button-sm-round w-100">
                                                <a href="#">Leaderboard</a>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="button-sm-round w-100" @click="registerModal(event.id)">
                                                <a>Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <!-- Recent Winners -->
                    <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Recent Winners</h4>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="bg-dark px-4 pt-4 rounded">
                                <div class="winners-content">
                                    <div class="row">
                                        <div class="col-md-3 mb-4">
                                            <img src="https://crafatar.com/renders/head/e98a31e7-cad0-4b30-a7df-81f5dbaf2e5e.png" width="80px">
                                        </div>
                                        <div class="col-md-8 mb-4">
                                            <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-blue">Zyrl</span> has donated $10.00</h4>
                                            <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                                        </div>
                                        <div class="col-md-3 mb-4">
                                            <img src="https://crafatar.com/renders/head/d5ebbe7a-9ed1-41d8-812b-02f4a1a286f6.png" width="80px">
                                        </div>
                                        <div class="col-md-8 mb-4">
                                            <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-yellow">rexs123</span> has donated $10.00</h4>
                                            <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                                        </div>
                                        <div class="col-md-3 mb-4">
                                            <img src="https://crafatar.com/renders/head/a24092c9-af15-4798-aac8-df41ea1fec94.png" width="80px">
                                        </div>
                                        <div class="col-md-8 mb-4">
                                            <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-red">Rowzy</span> has donated $10.00</h4>
                                            <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Server List -->
                    <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Server List</h4>
                    <JacServers></JacServers>

                </div>
            </div>
        </div>
        <modal name="event-register" :height="500">
            <p class="fs-16 font-grey mb-2 p-0">Register For Event <span>{{ errorMsg }}</span></p>
            <h4 class="fs-22 text-white fw-600 mb-5">{{ event.title }}</h4>
            <form @submit.prevent="registerEvent(event.id)">
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group mb-5">
                            <label>Enter your username:</label>
                            <input type="text" name="username" v-model="username">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <recaptcha class="mb-5"
                                   @error="onRecaptchaError"
                                   @success="onRecaptchaSuccess"
                                   @expired="onRecaptchaExpired"
                        ></recaptcha>
                        <button class="form-button bg-blue" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </modal>

    </div>
</template>
<script>
    import JacNavbar from '../components/JacNavbar';
    import JacEvents from '../components/JacEvents';
    import JacServers from '../components/JacServers';
    import moment from "moment";
    export default {
        layout: 'default',
        name: 'Home',
        data() {
            return {
                events: [],
                localTime: '',
                event: '',
                username: '',
                captcha: '',
                errorMsg: '',
            }
        },
        head() {
            return {
                title: 'JAC Network - Events'
            }
        },
        created() {
            this.$axios
                .$get(`/events`)
                .then((res) => {
                    this.events = res.events;
                })
        },
        computed:  {

        },
        methods: {
            eventTime (value) {
                return moment.unix(value).format('MMMM DD YYYY, h:mm a');
            },
            onRecaptchaSuccess(recaptchaToken) {
                this.captcha = recaptchaToken;
            },
            onRecaptchaError() {
                console.log("Captcha Error")
            },
            onRecaptchaExpired() {
                console.log("Captcha Expired")
            },
            registerModal (event) {
                this.event = event;
                this.$axios
                    .$get('/events/' + event)
                    .then((res) => {
                        this.event = res;
                        this.$modal.show('event-register');
                    })
            },
            async registerEvent(id) {
                this.$axios.post('/events/' + id + '/register', {
                        username: this.username,
                        captcha: this.captcha
                    }
                )
                    .then(function (res) {
                        alert("You've successfully registered for the event!");
                    })
                    .catch(function (error) {
                       alert("You've entered an invalid username.")
                    });
            }
        },
        components: {JacServers, JacNavbar, JacEvents}
    }
</script>