<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12 col-sm-12 mt-5">
				<h1>Dashboard Page</h1>
			</div>

			<div class="col-md-6 col-sm-12 mt-5">
				<div class="alert alert-success" role="alert">
					Selamat datang {{users.data.name}}, di kelontong digital !
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="card mb-3" style="max-width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img v-if="users.data.g_avatar" :src="users.data.g_avatar" :alt="users.data.name" class="img-fluid rounded-pill mt-3 ml-3" rel="noreferrer" referrerpolicy="no-referrer"/>

							<img v-else :src="require('~/assets/images/icon.png')" class="img-fluid rounded-pill mt-3 ml-3" width="200" />
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h2 class="card-title text-capitalize">{{users.data.name}}</h2>

								<button @click="logout" class="btn btn-sm btn-danger rounded-pill mb-2">
									Logout
								</button>

								<ul class="list-group list-group-flush">
									<li class="list-group-item">
										{{users.data.email}}
									</li>
									<li  class="list-group-item">
										<span v-if="users.data.provider_name">
											Provider : {{users.data.provider_name}} <img :src="require('~/assets/images/social-brand/Google.svg')" width="30">
										</span>
										<span v-else>
											Provider : <img :src="require('~/assets/images/icon.png')" width="30"/> Kelontong
										</span>
									</li>
								</ul>
								<p class="card-text"><small class="text-muted">
									Last updated: {{$moment(users.data.last_login).fromNow()}}
								</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center mt-5">
			<div class="col-lg-12 col-sm-12">
				<div class="alert alert-info" role="alert">
					Halaman sedang dalam pengembangan
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'dashboard',
		layout: 'dashboard',


		mounted(){
			this.tokenData()
		},

		methods:{
			logout(){
				this.$swal({
					title: 'Apakah kamu mau keluar dari aplikasi ?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, logout!'
				}).then((result) => {
					if (result.isConfirmed) {
						this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`

						this.$axios.post('/logout', {
							id: this.users.data.id
						})

						.then(({data}) => {
							if(data.success){
								localStorage.removeItem('token')
								localStorage.removeItem('user')
								this.$swal(
									'Logout!',
									'Logout berhasil !.',
									'success'
									)
								setTimeout(() => {
									this.$router.push({
										path: '/auth/login'
									})
								}, 1500)
							}
						})
						.catch(err => console.error(err.response))
					}
				})
			},

			tokenData(){
				return this.$store.dispatch('token/checkTokenLogin', 'token')
			}
		},

		computed: {
			token(){
				return this.$store.getters['token/GetCheckTokenLogin']
			}
		},

		async asyncData({app,store, $axios, $config}){
			const token = app.context.query.q

			const users = await $axios.get('/user', {
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})

			return {
				users
			}
		}
	}
</script>