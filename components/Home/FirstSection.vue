<template>
	<div>
		<section id="home">
			<div class="atf-slider atf-style1 atf-hero-slider1 atf-hero-slider2">
				<div class="slick-container" data-autoplay="0" data-loop="1" data-speed="800" data-autoplay-timeout="1000" data-center="0" data-slides-per-view="1" data-fade-slide="1">
					<div class="slick-wrapper">
						<div v-for="slider in sliders" class="slick-slide-in">		
							<div class="atf-single-home atf-hero-area" :style="`background-image: url(${slider.image});  background-size:cover; background-position: center center;`">
								<div class="atf-home-overlay">
									<div class="container">
										<div class="row atf-single-slide-sm2 atf-align-items-details align-items-center atf-single-text justify-content-center">
											<div class="col-xl-6 col-lg-6 col-12 text-center atf-single-details ">
												<h5 class="mb-0 d-block d-lg-block text-white">{{slider.text.h5}}</h5>
												<h2 class="mb-0 d-block d-lg-block">{{slider.text.h2}}</h2>
												<p class="pr-lg-5">{{slider.text.p}}</p>
												<div class="atf-main-btn mt-3"> 
													<nuxt-link to="/auth/login" class="page-scroll atf-themes-btn mr-4">Daftar Toko <i class="fa fa-angle-right"></i></nuxt-link>
													<nuxt-link to="/product" class="page-scroll atf-themes-btn">Order Now <i class="fa fa-angle-right"></i></nuxt-link>
												</div>
											</div>
										</div>
									</div>
								</div>		
							</div>			
						</div>

					</div>
				</div>

				<div class="pagination atf-style1 container"></div>
				<div class="swipe-arrow atf-style1 atf-hidden">
					<div class="slick-arrow-left"><i class="fa fa-angle-left"></i></div>
					<div class="slick-arrow-right"><i class="fa fa-angle-right"></i></div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				sliders: [
					{
						id: 1,
						image: require('~/assets/images/slider/klontong1.jpg'),
						text: {
							h5: 'Toko Kelontong',
							h2: 'best wholesale products.',
							p: 'Akses yang mudah, kualitas produk terbaik dan harga yang siap bersaing adalah visi utama kami.'
						}
					},
					{
						id: 2,
						image: require('~/assets/images/slider/klontong2.jpg'),
						text: {
							h5: 'Tranding Now',
							h2: 'best wholesale products.',
							p: 'Kami akan mengantar produk Anda dan Anda tinggal menjual.'
						}
					},
					{
						id: 3,
						image: require('~/assets/images/slider/klontong3.jpg'),
						text: {
							h5: 'Trader Price',
							h2: 'best wholesale products.',
							p: 'Langsung dari produsen untuk Anda, tanpa menunggu lama, jualan lancar.'
						}
					},
					{
						id: 3,
						image: require('~/assets/images/slider/klontong4.jpg'),
						text: {
							h5: 'Easy Access',
							h2: 'best distributor partners.',
							p: 'Dapatkan keunggulan produk dengan harga yang siap bersaing, dan raih keuntungan bersama - toko-kelontong.com'
						}
					}
				]
			}
		}
	}
</script>