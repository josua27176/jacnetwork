<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <div class="announcement-slide">
                <img src="~assets/images/announcement-image.png" class="w-100">
                <div class="overlay w-100">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-asterisk mr-2" aria-hidden="true"></i>Featured </p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-calendar-o" aria-hidden="true"></i>July 18, 2020</p>
                        </div>
                        <div class="col-md-12">
                            <h4 class="text-white fs-24 fw-600">The Next Community Event</h4>
                            <p class="font-grey fs-16">Hello Everyone, Our next community event will be on July 25th at 6PM EST! We will be holding the JAC Voice event where our winners will recieve in store credit! Make sure to register to be able to sing!</p>
                            <a href="#" class="link-default">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="announcement-slide">
                <img src="~assets/images/announcement-image.png" class="w-100">
                <div class="overlay w-100">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-asterisk mr-2" aria-hidden="true"></i>Featured </p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-calendar-o" aria-hidden="true"></i> July 18, 2020</p>
                        </div>
                        <div class="col-md-12">
                            <h4 class="text-white fs-24 fw-600">Understanding the game</h4>
                            <p class="font-grey fs-16">The latest update to JAC we have going on is a recent Proxy Software update allowing for the best speed and connectivity. Plus we just released HyWar - Modded Warfare. Coming this weekend we got a Pixelmon Makeover too!</p>
                            <a href="#" class="link-default">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
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
                            <h4 class="text-white fs-24 fw-600">New Gameplay Modes</h4>
                            <p class="font-grey fs-16">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. </p>
                            <a href="#" class="link-default">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
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
        },
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 3200,
                    }
                }
            }
        }
    }
</script>