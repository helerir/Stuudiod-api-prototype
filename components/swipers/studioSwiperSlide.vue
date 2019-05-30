<template>
    <swiper-slide>
        <figure class="swiper__figure"><img :src="thumbnail" :alt="studioName"></figure>
        <div class="swiper_body mt-5">
            <h2 class="section__title">{{ studioName }}</h2>
            <p>{{ address }} <br>{{ city }}</p>
            <p>{{ phone }} <br>{{ email }} <br><a :href="webpage">{{ webpage }}</a></p>
        </div>
    </swiper-slide>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'studioSwiperSlide',
    components: {
		swiperSlide,
    },
    props: {
        studioName: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            defualt: ''
        },
        city: {
            type: String,
            default: 'Tallinn'
        },
        phone: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        webpage: {
            type: String,
            default: ''
        },
        thumbnail: {
            type: String,
            default: ''
        }
    }
}
</script>

