<template>
    <swiper ref="JacEvents" :options="swiperOptions">
        <swiper-slide v-for="event in events" :key="event.id">
            <div class="row">
                <div class="col-4 col-md-3 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-asterisk mr-2"></i>Featured Event</p>
                </div>
                <div class="col-4 col-md-3 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-calendar-o"></i> {{ eventTime(event.start )}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7 mb-3">
                    <h4 class="text-white fs-24 fw-600 mb-3">{{ event.title }}</h4>
                    <p class="font-grey fs-18 lh-2">{{ event.body }}</p>
                </div>
                <div class="col-md-12">
                    <div class="button-group d-flex">
                        <div class="toggle-button" @click="registerModal(event.id)">
                            Register
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import moment from "moment";

    export default {
        name: 'JacEvents',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: {

            }
        },
        data() {
            return {
                events: [],
                swiperOptions: {
                    loop: true,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 2500,
                    }
                }
            }
        },
        created() {
            this.$axios
                .$get(`/events`)
                .then((res) => {
                    this.events = res.events;
                })
        },
        methods: {
            eventTime (value) {
                return moment.unix(value).format('MMMM DD YYYY, h:mm a');
            },
            registerModal (eventID) {
                this.$modal.show('event-register', {eventID: eventID});
            }
        }

    }
</script>