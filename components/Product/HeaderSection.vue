<template>
	<div>
		<div class="atf-page-heading atf-size-md atf-dynamic-bg" data-stellar-background-ratio="0.3" :style="`background-image: url(${bg}); background-size:cover; background-position: center center;`">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-7 col-md-6 col-12">
						<div class="atf-page-heading-in text-center">
							<h1 class="atf-page-heading-title">{{content.header}}</h1>
							<div class="atf-post-label">
								<span v-html="content.text"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				bg: require('~/assets/images/bg/product-bg.jpg'),
				content: {
					header: 'Cari Product Kebutuhan Rumah Tangga, Untuk Toko Atau Warung Kamu.',
					text: 'Kelontong Digital Solusinya <i class="fas fa-fw fa-lg fa-shipping-fast"></i>'
				}
			}
		}
	}
</script>