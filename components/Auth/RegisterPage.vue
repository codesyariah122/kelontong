<template>
	<div class="container-fluid">
		<div class="row no-gutter">
			<!-- The image half -->
			<div :style="`background-image: url(${require('~/assets/images/bg/bg-login.jpeg')});`" class="col-md-6 d-none d-md-flex bg-image"></div>


			<!-- The content half -->
			<div class="col-md-6 bg-light">
				<div class="login d-flex align-items-center py-5">

					<!-- Demo content-->
					<div class="container">
						<div class="row">
							<div class="col-lg-10 col-xl-7 mx-auto">
								<h1>
									<a href="/"><img :src="require('~/assets/images/logo.png')" alt="Logo" width="70"/><span>Kelontong Digital</span></a>
								</h1>
								<p class="text-muted mb-4">Lanjutkan dengan akun kelontong kamu</p>


								<form @submit.prevent="RegisterUser">
									<div class="form-group mb-3">
										<input type="text" placeholder="Fullname"autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" v-model="form.name">
										<div v-if="error.name" class="mt-3 alert alert-danger" role="alert">
											{{error.name[0]}}
										</div>
									</div>
									<div class="form-group mb-3">
										<input type="text" placeholder="Email address"autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" v-model="form.email">

										<div v-if="error.email" class="mt-3 alert alert-danger" role="alert">
											{{error.email[0]}}
										</div>
									</div>
									<div class="form-group mb-3">
										<input type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" v-model="form.password">

										<div v-if="error.password" class="mt-3 alert alert-danger" role="alert">
											{{error.password[0]}}
										</div>
									</div>
									<div class="form-group mb-3">
										<input type="password" placeholder="Password Confirmation"  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" v-model="form.password_confirmation">

										<div v-if="password_confirmation_valid" class="mt-3 alert alert-warning" role="alert">
											{{password_confirmation_valid}}
										</div>
									</div>

									<div class="form-group mb-3">
										<vue-tel-input
										class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
										:inputOptions="options"
										type="text"
										id="phone"
										name="phone" v-model="form.phone"
										></vue-tel-input>
									</div>
									
									<button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
										<div v-if="loading">
											<span class="spinner-border spinner-grow-sm" role="status" aria-hidden="true"></span>
											Loading...
										</div>
										<span v-else>
											Sign up
										</span>
									</button>
									<div class="text-center d-flex justify-content-between mt-4">
										<p>Sudah punya akun kelontong ? 
											<nuxt-link to="/auth/login" class="font-italic text-muted"> 
												<u>Silahkan login</u>
											</nuxt-link>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div><!-- End -->

				</div>
			</div><!-- End -->

		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				options: {
					placeholder: "8xx xxxx xxxx",
					showDialCode: false, 
					tabindex: 0,
					mode: ''
				},
				form:{},
				error: [],
				password_confirmation_valid: '',
				loading: null
			}
		},

		methods: {
			RegisterUser(){
				this.loading = true
				if(this.form.password_confirmation === undefined || this.form.password_confirmation === ""){
					this.password_confirmation_valid = "Konfirmasi password kamu"
					setTimeout(() => {
						this.loading = false
					}, 1000)
				}

				this.$axios.post('/register', this.form)
				.then(({data}) => {
					if(data.success){
						this.form = {}
						this.$swal({
							title: `Register ${data.success ? 'Success' : ''}, Your account has been successfully registered `,
							width: 600,
							padding: '3em',
							color: '#716add',
							background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
							backdrop: `
							rgba(0,0,123,0.4)
							url("https://sweetalert2.github.io/images/nyan-cat.gif")
							left top
							no-repeat
							`,
							timer: 5000
						})
						setTimeout(() => {
							this.$router.push({
								path: '/auth/login'
							})
						}, 2500)
					}
				})
				.catch(err => {
					console.log(err.response)
					this.error = err.response.data
				})
			}
		}

	}
</script>

<style lang="scss">
	.vti__flag{
		margin-left: -.3rem;
		margin-top: .3rem;
	}
	.vti__dropdown-arrow{
		margin-left: .5rem;
		margin-top: .3rem;
	}
</style>