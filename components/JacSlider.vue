<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="post in featured" :key="post.id">
            <div class="announcement-slide">
                <img src="~assets/images/announcement-image.png" class="w-100">
                <div class="overlay w-100">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-asterisk mr-2" aria-hidden="true"></i>Featured </p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-white fs-16"><i class="fa fa-calendar-o" aria-hidden="true"></i> {{ postTime(post.timestamp)}}</p>
                        </div>
                        <div class="col-md-12">
                            <h4 class="text-white fs-24 fw-600">{{ post.title }}</h4>
                            <p class="font-grey fs-16">{{ post.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css';
    import moment from "moment";


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
                    loop: false,
                    slidesPerView: '1',
                    autoplay: {
                        delay: 3200,
                    }
                },
                featured: []
            }
        },
        created() {
            this.$axios
                .$get(`/posts/featured`)
                .then((res) => {
                    this.featured = res.featured;
                })
        },
        methods: {
            postTime (value) {
                return moment.unix(value).format("MMM DD YYYY");
            },
        }
    }
</script>