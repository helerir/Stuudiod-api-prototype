<template>
	<section class="section section-results my-5">
        <header class="section__header d-flex align-items-center">
            <h2 class="section__title mb-0">Otsingutulemused</h2>
            <hr class="w-100">
        </header>

        <ul v-if="!hasFilterApplied">
            <li :key="index" v-for="(item, index) in dataByDates">
                <cardItem :data="item"></cardItem>
            </li>
        </ul>

        <ul v-if="hasFilterApplied && filteredTimes.length > 0">
            <li :key="index" v-for="(item, index) in filteredTimes">
                <cardItem :data="item"></cardItem>
            </li>
        </ul>

        <div v-if="hasFilterApplied && filteredTimes.length == 0" class="my-4 text-center"><p>Otsing ei andnud tulemusi!</p></div>
    </section>
</template>

<script>

import search from "@/components/search";
import cardItem from "@/components/card/cardItem";
import { uniq, orderBy } from 'lodash';

export default {
    name: 'resultsList',
	components: {
        search,
		cardItem
    },
    data() {
        return {
            filterByStudio: null,
            filterByRoom: null,
            filterByDate: null
        }
    },
    created() {
        this.$nuxt.$on('newValue', this.storeFilterValues);
    },
    beforeDestroy() {
        this.$nuxt.$off('newValue');
    },
    computed: {
        dataByDates() {
            var data = [];
            var studios = this.$store.getters['studios/getAll'];
            var times = this.$store.getters['times/getAll'];

            studios.forEach( (studio) => {
                var timesByStudio = times.filter( (time) => time.studioId == studio.id );
                timesByStudio.map(function (time) {
                    time.availability.forEach( (availableDate) => {
                        data.push(
                            { date: availableDate,
                            roomId: time.id,
                            studioId: time.studioId,
                            roomName: time.roomName,
                            studioName: studio.studioName,
                            city: studio.city }
                        );
                    });
                });
            });

            data = orderBy(data, (o) => {
                return this.$moment(o.date, 'DD.MM.YYYY HH:mm');
            });

            return data;
        },
        filteredTimes() {
            var times = this.dataByDates.filter( (time) => {

                if( this.filterByStudio > 0 && time.studioId != this.filterByStudio ) {
                    return false;
                }

                if( this.filterByRoom > 0 && time.roomId != this.filterByRoom ) {
                    return false;
                }

                var formattedDate = time.date.substr(0,time.date.indexOf(' '));
                if( this.filterByDate != null && formattedDate != this.filterByDate ) {
                    return false;
                }

                return true;
            });

            return times;
        },
        hasFilterApplied() {
            return ( this.filterByStudio || this.filterByRoom || this.filterByDate ) != null;
        }
    },
    methods: {
        storeFilterValues(e) {
            var times = this.$store.getters['times/getAll'];

            if( e.selectedStudioId ) {
                this.filterByStudio = e.selectedStudioId;
            } else if( e.selectedStudioId == null && e.selectedRoomId == null ) {
                this.filterByStudio = null;
            } else if( e.selectedStudioId && e.selectedRoomId != null ) {
                this.filterByStudio = e.selectedStudioId;
            }

            if( e.selectedRoomId ) {
                this.filterByRoom = e.selectedRoomId;
            } else {
                this.filterByRoom = null;
            }

            if( e.date ) {
                var selectedDate = this.$moment(e.date).format('DD.MM.YYYY');
                this.filterByDate = selectedDate;
            } else {
                this.filterByDate = null;
            }

            return;
        },
    }
}

</script>
