<template>
	<div>

		<section class="intro-video-area-about overlay section">
			<div class="container">
				<div class="row justify-content-center g-0">
					<div class="col-lg-12">
						<div class="section-title text-white">
							<span class="wow fadeInDown" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">
								{{content.summary}}
							</span>
							<h2 class="wow fadeInUp text-white" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
								{{content.heading}}
							</h2>
							<center>
								<p class="wow fadeInUp text-white" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp; width: 50%;" v-html="content.paragraph">
								</p>
							</center>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="intro-video-play">
							<div class="row justify-content-center">
								<div class="col-lg-10 col-12">
									<div class="play-thumb wow zoomIn" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;">
										<a @click="LightBox" style='cursor: pointer;' class="glightbox video">
											<i class="fas fa-lg fa-fw fa-play"></i>
											<!-- <i class="lni lni-play"></i> -->
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data(){
			return{
				content:{
					summary: 'Toko Kelontong Online',
					heading: 'Best Partner For Retail Distribution',
					paragraph: 'Hadirkan kemudahan dengan kecekatan , <span class="text-info"><b>Toko Kelontong - Online</b></span>.',
					videoSection: "https://www.youtube.com/watch?v=JzLoo8cFJBI" 
				}
			}
		},
		methods:{
            LightBox(){
                GLightbox({
                    'href': this.content.videoSection,
                    'type': 'video',
                    'source': 'youtube', //vimeo, youtube or local
                    'width': 800,
                    'autoplayVideos': true,
                })
            },
        }
	}
</script>