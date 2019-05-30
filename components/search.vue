<template>
    <section class="section section-search my-5">
        <h2 class="text-center">Otsi vabade aegade seast</h2>
        <div class="bg-white px-3 px-md-5 py-3 mt-5">
            <div class="form-group">
                <div class="form-border">
                    <v-select v-model="selectedStudioId" @change="selectedRoomId = null" :placeholder="'Vali stuudio'" :options="studios" label="studioName" :reduce=" (option) => option.id " class="form-control"></v-select>
                </div>
                <div class="form-border">
                    <v-select :disabled="!hasRooms" v-model="selectedRoomId" :placeholder="'Vali saal'" :options="rooms" label="roomName" :reduce=" (option) => option.id " class="form-control"></v-select>
                </div>
                <div class="form-border">
                    <date-picker v-model="date" lang="en" format="DD.MM.YYYY" value="null" class="form-control" :placeholder="'Vali kuupäev'"></date-picker>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import vSelect from 'vue-select';
import DatePicker from 'vue2-datepicker';

export default {
    name: 'search',
    components: {
      vSelect,
      DatePicker
    },
    data () {
      return {
        selectedStudioId: null,
        selectedRoomId: null,
        date: null,
      }
    },
    watch: {
        selectedStudioId(newValue) {
            this.$nuxt.$emit('newValue', { selectedStudioId: newValue } );
        },
        selectedRoomId(newValue) {
            this.$nuxt.$emit('newValue', { selectedRoomId: newValue } );
        },
        date(newValue) {
            this.$nuxt.$emit('newValue', { date: newValue } );
        }
    },
    computed: {
        studios() {
            return this.$store.getters['studios/getAll'];
        },
        rooms() {
            var rooms = this.$store.getters['times/getAll'];
            var selectedStudioRooms = rooms.filter( (room) => room.studioId == this.selectedStudioId );

            if( selectedStudioRooms.length ) {
                return selectedStudioRooms;
            }

            return [];
        },
        hasRooms() {
            return this.rooms.length > 0;
        },
    },
}
</script>

<style lang="scss" scoped>
</style>

