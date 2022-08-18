<template>
	<div class="page-wrapper">

		<GlobalsToTop/>

		<LayoutsHeader/>

		<Nuxt/>

		<LayoutsFooter/>

	</div>
</template>

<script>
	export default {
		head: {
			script: [
			{
				src: '/assets/js/main.js'
			}
			],
		}
	}
</script>