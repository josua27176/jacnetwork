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
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="server bg-dark px-3 py-2 rounded">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="~assets/images/nether.png" width="76px">
                                    </div>
                                    <div class="col-md-7">
                                        <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Nether Minigames</h4>
                                        <p class="fs-16 font-green">105/200 Playing!</p>
                                    </div>
                                    <div class="col-md-2">
                                        <span class="bg-green status w-100 d-block mt-4">On</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mb-4">
                            <div class="server bg-dark px-3 py-2 rounded">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="~assets/images/obsidian.png" width="76px">
                                    </div>
                                    <div class="col-md-7">
                                        <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Obsidian Server</h4>
                                        <p class="fs-16 font-green">55/100 Playing!</p>
                                    </div>
                                    <div class="col-md-2">
                                        <span class="bg-green status w-100 d-block mt-4">On</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mb-4">
                            <div class="server bg-dark px-3 py-2 rounded">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="~assets/images/aqua.png" width="76px">
                                    </div>
                                    <div class="col-md-7">
                                        <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Aqua Games</h4>
                                        <p class="fs-16 font-green">88/100 Playing!</p>
                                    </div>
                                    <div class="col-md-2">
                                        <span class="bg-green status w-100 d-block mt-4">On</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="server bg-dark px-3 py-2 rounded">
                                <div class="row">
                                    <div class="col-md-3">
                                        <img src="~assets/images/blaze.png" width="76px">
                                    </div>
                                    <div class="col-md-7">
                                        <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Blaze Games</h4>
                                        <p class="fs-16 font-red">Server is restarting!</p>
                                    </div>
                                    <div class="col-md-2">
                                        <span class="bg-red status w-100 d-block mt-4">OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <modal name="event-register">
            <P>{{ event.title }}</P>
        </modal>

    </div>
</template>
<script>
    import JacNavbar from '../components/JacNavbar';
    import JacEvents from '../components/JacEvents';
    import moment from "moment";
    export default {
        layout: 'default',
        name: 'Home',
        data() {
            return {
                events: [],
                localTime: '',
                event: ''
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
                return moment.unix(value).format("MMM-DD-YYYY");
            },
            async registerModal (event) {
                this.event = event;
                this.$axios
                    .$get('/events/' + event)
                    .then((res) => {
                        this.event = res;
                        this.$modal.show('event-register');
                    })
            }
        },
        components: {JacNavbar, JacEvents}
    }
</script>