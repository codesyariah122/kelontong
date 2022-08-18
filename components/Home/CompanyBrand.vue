<template>
	<div>
		
		<div id="atf-brand-area" class="atf-brand-area atf-section-padding">
			<div class="atf-brand-overlay">
				<div class="container">
					<div class="atf-slider atf-style2">
						<div class="slick-container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"  data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="3" data-md-slides="3" data-lg-slides="5" data-add-slides="3">
							<div class="slick-wrapper">

								<div v-for="brand in brands" class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#">
											<img :src="brand.img" alt="image">
										</a>
									</div>
								</div>

								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/1.png" alt="image"></a>
									</div>
								</div>

								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/2.png" alt="image"></a>
									</div>
								</div>

								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/3.png" alt="image"></a>
									</div>
								</div>
								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/4.png" alt="image"></a>
									</div>
								</div>
								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/5.png" alt="image"></a>
									</div>
								</div>

								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/1.png" alt="image"></a>
									</div>
								</div>

								<div class="slick-slide-in">
									<div class="atf-brand-active">
										<a href="#"><img src="assets/img/partner/2.png" alt="image"></a>
									</div>
								</div>

							</div>
						</div>

						<div class="pagination atf-style1 atf-flex atf-hidden"></div> 
						<div class="swipe-arrow atf-style1"> 
							<div class="slick-arrow-left"><i class="fa fa-chevron-left"></i></div>
							<div class="slick-arrow-right"><i class="fa fa-chevron-right"></i></div>
						</div>
					</div>
				</div>	
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				brands: [
					{
						id:1,
						img: require('~/assets/images/brands/kapal-api.png')
					},
					{
						id: 2,
						img: require('~/assets/images/brands/mayora.png')
					},
					{
						id: 3,
						img: require('~/assets/images/brands/unilever.png')
					},
					{
						id: 4,
						img: require('~/assets/images/brands/indofood.png')
					},
					{
						id: 4,
						img: require('~/assets/images/brands/garuda-food.png')
					}
				]
			}
		}
	}
</script>