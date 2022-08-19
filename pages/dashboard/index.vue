<template>
	<div class="container">
		<DashboardProfileCard :users="users" :details="details.data.data[0]"/>
		<DashboardContentCard/>
	</div>
</template>

<script>
	export default {
		name: 'dashboard',
		layout: 'dashboard',

		async asyncData({app,store, $axios, $config}){
			const token = app.context.query.q

			const users = await $axios.get('/user', {
				headers: {
					"Authorization": `Bearer ${token}`
				}
			})

			const details = await $axios.get(`/user-detail-login/${users.data.id}`)

			return {
				users,
				details
			}
		}
	}
</script>