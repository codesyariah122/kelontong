<template>
	<div class="atf-section-padding atf-blog-area atf-blog-grid-area">
		<div class="container">
			<div class="row clearfix">
				<div class="col-xl-12 col-lg-12 col-12">
					<div class="row">

						<div v-for="post in posts" class="col-lg-6 col-md-6 col-12">
							<div class="atf-post-slide">
								<div class="atf-post-pic">
									<img :src="`https:${post.fields.cover.fields.file.url}`" alt="">
									<ul class="atf-post-category">
										<li><a href="#">{{$moment(post.fields.createdAt).format("LL")}}</a></li>
									</ul>
								</div>
								<div class="atf-post-header">
									<ul class="atf-post-bar">
										<li><i class="fa fa-user"></i><a href="#">
											{{post.fields.author.fields.name}}
										</a></li>
										<li><i class="fa fa-comments"></i><a href="">7.5k</a></li>
										<li><i class="fab fa-gratipay"></i><a href="">2.3k</a></li>
									</ul>
									<h4 class="atf-post-title">
										<a href="#">{{post.fields.title}}</a>
									</h4>
								</div>
								<p class="atf-post-description">
									{{post.fields.description}}
								</p>
								<div class="atf-main-btn atf-blog-btn mt-2 pb-4 ml-3">
									<a href="#" class="atf-themes-btn">Read More <i class="fa fa-angle-right atf-blogs-btn"></i></a>
								</div>
							</div>
						</div>

						<!-- <div class="col-lg-12 col-md-12 col-12">
							<nav class="atf-blog-pagination mt-5" aria-label="Page navigation example">
								<ul class="pagination justify-content-center mb-0">
									<li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-double-left"></i></a></li>
									<li class="page-item"><a class="page-link" href="#">01</a></li>
									<li class="page-item active"><a class="page-link" href="#">02</a></li>
									<li class="page-item"><a class="page-link" href="#">03</a></li>
									<li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-double-right"></i></a></li>
								</ul>
							</nav>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			posts() {
				return this.$store.getters['content/BlogPost'];
			}
		},
	}
</script>