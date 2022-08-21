<template>
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
						<img v-if="users.data.g_avatar" :src="users.data.g_avatar" :alt="users.data.name" class="img-fluid rounded-pill mt-3 ml-3" rel="noreferrer" referrerpolicy="no-referrer" width="130" />

						<img v-else :src="require('~/assets/images/icon.png')" class="img-fluid rounded-pill mt-3 ml-3" width="150" />
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
										Provider : <img :src="require('~/assets/images/social-brand/Google.svg')" width="30"> {{users.data.provider_name}}
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

		<div class="col-md-12">
			<div class="float-right map__layout mb-4">
					<div class="col-xl-12 col-lg-12 col-12 text-left"> 
						<div :style="`${$device.isDesktop ? 'height: 280px; width: 350px; z-index: 0;' : 'height: 280px; width: 335px;z-index: 0;'}`">
							<client-only>
								<l-map
								ref="myMap"
								:zoom="zoom"
								:center="center"
								scrollWheelZoom="false"
								>
								<l-marker :lat-lng="regionCenter">
									<l-icon
									:icon-size="iconSize"
									:icon-anchor="staticAnchor"
									:icon-url="icons[3]"
									:shadow-url="icons[2]"
									/>
								</l-marker>
								<l-polyline
								:lat-lngs="polyline.latlngs"
								:color="polyline.color"
								></l-polyline>
								<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
							</l-map>
						</client-only>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['users', 'details'],

		data () {
			return {
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 16,
				iconSize: [60,70],
				center: {
					lat: this.details.profiles[0].latitude,
					lng: this.details.profiles[0].longitude
				},
				scrollWheelZoom: false,
				icons: {
					1: require('assets/images/marker/store-icon.png'),
					2: require('assets/images/marker/marker-shadow.png'),
					3: this.details.g_avatar
				},
				staticAnchor: [10, 15],
				bounds: null,
				regionCenter: [this.details.profiles[0].latitude, this.details.profiles[0].longitude],
				address: {
					long: '',
					display: '',
				},
				polyline: {
					color: 'red',
					latlngs: [],
				},
				coordinate: {
					title: 'Toko.Kelontong - Office & Warehouse',
					region: 'Cimahi Selatan',
					external_link: 'https://www.google.com/maps/place/Jl.+Boeing+Utara+I+No.7,+Melong,+Kec.+Cimahi+Sel.,+Kota+Cimahi,+Jawa+Barat+40534/@-6.9254994,107.5542601,17z/data=!4m13!1m7!3m6!1s0x2e68e5f479e26977:0xf11143e38b100a69!2sJl.+Boeing+Utara+I+No.7,+Melong,+Kec.+Cimahi+Sel.,+Kota+Cimahi,+Jawa+Barat+40534!3b1!8m2!3d-6.9254994!4d107.5542601!3m4!1s0x2e68e5f479e26977:0xf11143e38b100a69!8m2!3d-6.9254994!4d107.5542601'

				}

			}
		},

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
		}
	}
</script>


<style lang="scss">
	.leaflet-marker-icon{
		border-radius: 50%;
	}
</style>