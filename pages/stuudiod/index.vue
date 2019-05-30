<template>
	<main class="main-content studios">
		<article class="article">
			<h1 class="article__title sr-only">Kõik stuudiod</h1>
			<studioSwiper />
		</article>
	</main>
</template>

<script>

import studioSwiper from "@/components/swipers/studioSwiper"

export default {
	components: {
		studioSwiper
	},
}

</script>
