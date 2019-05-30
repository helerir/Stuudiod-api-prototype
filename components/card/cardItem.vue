<template>
    <article class="card-item pt-4 pb-3 px-3 px-md-5">
        <header class="card-item__header d-flex justify-content-center">
            <span class="date mr-4">{{ dayMonth }}</span>
            <span class="time">{{ time }}</span>
        </header>
        <div class="card-item__body row justify-content-between align-items-center">
            <div class="col-9">
                <h2 class="card-item__title border-right border-primary"><nuxt-link to="/stuudiod">{{ data.studioName }}, {{ data.roomName }}</nuxt-link></h2>
            </div>
            <div class="col-3 pl-0">
                <p class=" card-item__location text-uppercase">{{ data.city }}</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'cardItem',
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    computed: {
        dayMonth() {
            return this.$moment(this.data.date, 'DD.MM.YYYY HH:mm').format('DD.MM');
        },
        time() {
            return this.$moment(this.data.date, 'DD.MM.YYYY HH:mm').format('HH:mm');
        },
    }
}
</script>

<style lang="scss" scoped>

</style>


