<template>
	<div class="container-fluid">
		<div class="row no-gutter">
			<div :style="`background-image: url(${require('~/assets/images/bg/bg-login.jpeg')});`" class="col-md-6 d-none d-md-flex bg-image"></div>

			<div class="col-md-6 bg-light">
				<div class="login d-flex align-items-center py-5">
					<div class="container">
						<div class="row">
							<div class="col-lg-10 col-xl-7 mx-auto">
								<h1>
									<a href="/"><img :src="require('~/assets/images/logo.png')" alt="Logo" width="70"/><span>Kelontong Digital</span></a>
								</h1>
								<p class="text-muted mb-4">Lanjutkan dengan akun kelontong kamu</p>
								<div v-if="failed.value" class="mt-3 alert alert-warning" role="alert">
									{{failed.message}}
								</div>
								<div v-else></div>
								
								<form @submit.prevent="LoginUser">
									<div class="form-group mb-3">
										<input  id="inputEmail" type="email" placeholder="Email address"autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"
										v-model="form.email">

										<div v-if="error.email" class="mt-3 alert alert-danger" role="alert">
											{{error.email[0]}}
										</div>
									</div>
									<div class="form-group mb-3">
										<input id="inputPassword" type="password" placeholder="Password"  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" v-model="form.password">
										<div v-if="error.password" class="mt-3 alert alert-danger" role="alert">
											{{error.password[0]}}
										</div>
									</div>
									
									<button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
										<div v-if="loading">
											<span class="spinner-border spinner-grow-sm" role="status" aria-hidden="true"></span>
											Loading...
										</div>
										<span v-else>
											Sign in
										</span>
									</button>
									<div class="text-center d-flex justify-content-between mt-4">
										<p>Belum punya akun kelontong ? 
											<nuxt-link to="/auth/register" class="font-italic text-muted"> 
												<u>Daftar baru</u>
											</nuxt-link>
										</p>
									</div>
								</form>

								<div class="row justify-content-center mt-5">
									<div class="col-lg-12 col-sm-12">
										<p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
									</div>
									<div class="col-lg-12 col-sm-12">
										<button @click="LoginGoogle" type="button" class="btn rounded-pill btn-block login-with-google-btn" >
											Sign in with Google
										</button>
									</div>
								</div>
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
				form:{},
				error: {},
				loading: null,
				failed: {
					value: false,
					message: ''
				}
			}
		},

		mounted(){
			this.CheckLogin(),
			this.getToken(),
			this.Checkuser(),
			this.AfterLogin(),
			this.getUserLogin()
		},

		methods: {
			ClearInput(){
				this.error = {}
				this.failed = {
					value: false,
					message: ''
				}
				this.form = {}
			},

			LoginUser(){
				this.loading = true
				this.$axios.post('/login', this.form)
				.then(({data}) => {
					console.log(data)
					if(!data.success || data.failed){
						this.error = {}
						this.failed.value = true
						this.failed.message = data.message
						this.form = {}
						this.$swal({
							icon: 'error',
							title: 'Oops...',
							text: data.message
						})
						this.loading = false
					}else{
						this.error = {}
						this.failed.value = false

						this.saveUser(JSON.stringify(data.data))

						this.DataAuthLogin(data.token)

						this.$swal({
							title: `Tunggu sebentar kamu sedang di alihkan ke halaman dashboard...`,
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
							this.loading = false
							this.$router.push({
								path: `/dashboard?q=${data.token}`
							})
						}, 2500)
					}

				})
				.catch(err => {
					this.failed.value = false
					this.error = err.response.data
					setTimeout(() => {
						this.loading = false
					}, 1000)
				})
			},

			AfterLogin(){
				if(this.token_login){
					this.$swal({
						title: `Ooops!! Sepertinya kamu sedang login ${this.user.name}`,
						width: 600,
						timer: 2000,
						padding: '3em',
						color: '#716add',
						background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
						backdrop: `
						rgba(0,0,123,0.4)
						url("https://media4.giphy.com/media/XDvt8jIu0B80NyvOdR/giphy.gif")
						left top
						no-repeat
						`
					})
					setTimeout(() => {
						this.$router.push({
							path: `/dashboard?q=${this.token_login}`
						})
					}, 1500)
				}
			},

			CheckLogin(){
				window.Echo.channel('notification')
				.listen('NotificationEvent', (e) => {
					if(e[0].login) {
						this.$swal({
							title: 'Sebentar ... Kamu sedang dialihkan.',
							timer: 5000,
							width: 600,
							padding: '3em',
							color: '#716add',
							background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
							backdrop: `
							rgba(0,0,123,0.4)
							url("https://c.tenor.com/2roX3uxz_68AAAAM/cat-space.gif")
							left top
							no-repeat
							`
						})
						this.getToken()
						setTimeout(() => {
							this.$router.push({path: `/dashboard/?q=${e[0].token}`})
						}, 1500)
					}
				})
			},

			DataAuthLogin(token){
				this.$store.dispatch("token/storeTokenLogin", token)
			},

			Checkuser(){
				this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token_login}`
				this.$axios.get('/user')
				.then(({data}) => {
					this.saveUser(JSON.stringify(data))
				})
				.catch(err => console.error(err.response))
			},

			LoginGoogle(){
				this.$axios
				.get(`${process.env.NUXT_ENV_BASE_URL}/auth/redirect/google`)
				.then(({data}) => {
					if(data.success){
						window.open(data.data.provider_redirect, 'popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
					}
				})
				.catch(err => console.error(err.response))
			},
			getToken(){
				return this.$store.dispatch('token/checkTokenLogin', 'token')
			},
			saveUser(user){
				return this.$store.dispatch('user/storeUserLogin', user)
			},
			getUserLogin(){
				return this.$store.dispatch('user/storeGetUserLogin', 'user')
			}
		},

		computed: {
			token_login(){
				return this.$store.getters['token/GetCheckTokenLogin']
			},

			user(){
				return this.$store.getters['user/GetUserLogin']
			}
		}
	}
</script>