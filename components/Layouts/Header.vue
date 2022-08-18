<template>
	<div>
		<header class="atf-site-header atf-style1 atf-sticky-header">
			<div class="atf-top-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-8">
							<div class="atf-top-header-in wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
								<ul class="atf-top-header-list">
									<li><i class="fas fa-envelope"></i>Email: <a href="#">kelontong.online2022@gmail.com</a></li>
									<li><i class="fas fa-phone-volume"></i>Contact: <a href="#">(+622) 601 388 7 </a></li>
								</ul>
							</div>
						</div><!--- END COL -->
						<div class="col-lg-4 col-md-4">
							<div class="nav-right-part nav-right-part-desktop">
								<ul>
									<li class="">
										<nuxt-link class="login-btn" :to="{path: '/auth/login'}">Login</nuxt-link>
									</li>

									<li><a class="shopping-cart-btn" href="#"><i class="fa fa-shopping-cart"></i><span>2</span></a></li>
								</ul>
							</div>
						</div><!--- END COL -->
					</div><!--- END ROW -->
				</div><!--- END CONTAINER -->
			</div><!--- END TOP HEADER -->
			
			<div class="atf-main-header">
				<div class="container">
					<div class="atf-main-header-in">
						<div class="atf-main-header-left">
							<nuxt-link class="atf-site-branding atf-white-logo" :to="{path: '/'}">
								<img :src="require('~/assets/images/logo.png')" alt="Logo"><span>Kelontong</span>
							</nuxt-link>
						</div>

						<div class="nav-right-part nav-right-part-mobile">
							<ul>
								<li class=""><nuxt-link class="login-btn" to="/auth/login">Login</nuxt-link></li>
								<li><a class="shopping-cart-btn" href="#"><i class="fa fa-shopping-cart"></i><span>2</span></a></li>
							</ul>
						</div>

						<div class="atf-main-header-right">
							<div class="atf-nav">
								<ul class="atf-nav-list atf-onepage-nav">
									<li>
										<a href="/">Home</a>
									</li>
									
									<li class="menu-item-has-children"><a href="#" class="atf-smooth-move">Page<i class="fa fa-chevron-down ml-2"></i></a>
										<ul>
											<li>
												<nuxt-link :to="{name: 'product'}">Product</nuxt-link>
											</li>
											<li><a href="blog.html">Blog</a></li>
										</ul>
									</li>
									<li>
										<nuxt-link to="/company-profile">Our Company</nuxt-link>
									</li>
									<li class="">
										<nuxt-link class="login-btn" to="/auth/login">
											Login
										</nuxt-link>
									</li>
								</ul><!--- END NAV -->
							</div>
						</div><!--- END MAIN HEADER RIGHT -->
					</div>
				</div><!--- END CONTAINER -->
			</div><!--- END MAIN HEADER -->
		</header>
	</div>
</template>

<style lang="scss">
	.atf-site-branding{
		img{
			width: 55px;
			margin-top: -.7rem;
		}
		span{
			font-family: 'Poppins';
			color: #fff;
			font-weight: 800;
			font-size: 1.5rem;
			margin-left: -.5rem;
		}
	}

	@media (min-width: 992px) {
		.atf-site-branding{
		img{
			width: 75px;
			margin-top: -.7rem;
		}
		span{
			font-family: 'Poppins';
			color: #fff;
			font-weight: 800;
			font-size: 1.5rem;
			margin-left: -1rem;
		}
	}
	}
</style>