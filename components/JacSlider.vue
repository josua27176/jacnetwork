<template>
    <swiper ref="mySwiper">
        <swiper-slide>
            <div class="announcement-slide">
                <img src="~assets/images/announcement-image.png" class="w-100">
                <div class="overlay w-100">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-asterisk mr-2" aria-hidden="true"></i>Featured </p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-calendar-o" aria-hidden="true"></i> May 09, 2020</p>
                        </div>
                        <div class="col-md-12">
                            <h4 class="text-white fs-24 fw-600">The Nether Update Minigames</h4>
                            <p class="font-grey fs-16">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. </p>
                            <a href="#" class="link-default">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'JacSlider',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        }
    }
</script>