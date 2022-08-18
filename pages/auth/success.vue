<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-12 col-sm-12 mt-5">
				<div class="alert alert-success" role="alert">
					Login Success !
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'auth-success',
		layout: 'auth',

		data(){
			return {
				token: ''
			}
		},

		mounted(){
			this.checkLoginLocal(),
			this.checkToken(),
			this.getToken()
		},

		methods: {
			checkLoginLocal(){
				if(this.token_login){
					window.close()
				}
			},
			checkToken(){
				const url = window.location.search
				const urlParams = new URLSearchParams(url)
				const token = urlParams.get('access_token')
				this.DataAuthLogin(token)
			},
			DataAuthLogin(token){
				this.$store.dispatch("token/storeTokenLogin", token)
			},
			getToken(){
				this.$store.dispatch('token/checkTokenLogin', 'token')
			}
		},

		computed: {
			token_login(){
				return this.$store.getters['token/GetCheckTokenLogin']
			}
		}
	}
</script>