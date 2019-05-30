<template>
	<div class="wrapper">
		<div class="container">
			<TheHeader />
			<nuxt />
			<TheFooter />
		</div>
	</div>
</template>

<script>

import TheHeader from "@/components/header/TheHeader"
import TheFooter from "@/components/footer/TheFooter"

export default {
	components: {
		TheHeader,
		TheFooter
	}
}
</script>
