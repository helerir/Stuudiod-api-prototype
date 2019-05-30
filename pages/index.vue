<template>
	<main class="main-content home">
		<article class="article">
			<h1 class="article__title sr-only">Otsi vabasid aegu fotostuudiotes</h1>
            <search />
			<resultsList />
		</article>
	</main>
</template>

<script>

import cardItem from "@/components/card/cardItem"
import search from "@/components/search"
import resultsList from "@/components/resultsList"

export default {
	components: {
		cardItem,
		search,
		resultsList
	},
}

</script>
