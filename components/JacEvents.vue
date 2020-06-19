<template>
    <swiper ref="JacEvents">
        <swiper-slide>
            <div class="row">
                <div class="col-4 col-md-3 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-asterisk mr-2"></i>Featured Event</p>
                </div>
                <div class="col-4 col-md-3 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-calendar-o"></i> May 09, 2020</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7 mb-3">
                    <h4 class="text-white fs-24 fw-600 mb-3">Understanding the game</h4>
                    <p class="font-grey fs-18 lh-2">At fermentum, nullam nam scelerisque proin quis ornare in. Id ut ac vitae enim scelerisque ac id. Eget arcu integer massa dictumst amet feugiat integer. Nunc quisque tincidunt velit volutpat. Amet nec dis vestibulum turpis dapibus.</p>
                </div>
                <div class="col-md-12">
                    <div class="button-group d-flex">
                        <div class="button-blue float-md-left mr-md-4">
                            <a href="#">Join Event</a>
                        </div>
                        <div class="button-outline float-md-left">
                            <a href="/events">Leaderboard</a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="row">
                <div class="col-md-2 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-asterisk mr-2"></i>Featured Event</p>
                </div>
                <div class="col-md-2 mb-4">
                    <p class="text-white fs-16"><i aria-hidden="true" class="fa fa-calendar-o"></i> May 09, 2020</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7 mb-3">
                    <h4 class="text-white fs-24 fw-600 mb-3">Understanding the game</h4>
                    <p class="font-grey fs-18 lh-2">At fermentum, nullam nam scelerisque proin quis ornare in. Id ut ac vitae enim scelerisque ac id. Eget arcu integer massa dictumst amet feugiat integer. Nunc quisque tincidunt velit volutpat. Amet nec dis vestibulum turpis dapibus.</p>
                </div>
                <div class="col-md-12">
                    <div class="button-group d-flex">
                        <div class="button-blue float-md-left mr-md-4">
                            <a href="#">Join Event</a>
                        </div>
                        <div class="button-outline float-md-left">
                            <a href="/events">Leaderboard</a>
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

    export default {
        name: 'JacEvents',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        }
    }
</script>