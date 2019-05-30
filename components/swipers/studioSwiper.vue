<template>
    <section class="section section-slider my-5">
        <swiper :options="swiperOption">
            <studioSwiperSlide :key="studio.id"
                v-for="studio in studios"
                :id="studio.id"
                :studioName="studio.studioName"
                :city="studio.city"
                :address="studio.address"
                :email="studio.email"
                :phone="studio.phone"
                :webpage="studio.webpage"
                :thumbnail="studio.thumbnail"
                :rooms="studio.rooms"
            />
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </section>
</template>

<script>

import "swiper/dist/css/swiper.css";
import { swiper } from 'vue-awesome-swiper'
import studioSwiperSlide from '@/components/swipers/studioSwiperSlide'

export default {
    name: 'studioSwiper',
    components: {
        swiper,
        studioSwiperSlide
    },
    data() {
      	return {
			swiperOption: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
    	}
    },
    computed: {
		studios() {
            return this.$store.getters['studios/getAll'];
        },
	}
}
</script>

