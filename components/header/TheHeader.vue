<template>
    <header class="main-header d-flex justify-content-center align-items-center">
        <div class="logo-secondary">
            <nuxt-link to="/stuudiod"><h1 class="main-header__title sr-only">Stuudiod API</h1><img src="~/assets/gfx/stuudiod-logo.svg" alt="Stuudiod"></nuxt-link>
        </div>
    </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style lang="scss" scoped>

    img {
        height: auto;

        .logo-primary & {
            width: 80px;
        }

        .logo-secondary & {
            width: 100px;
        }
    }

</style>

