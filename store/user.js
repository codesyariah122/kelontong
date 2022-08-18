export const strict = false;
export const state = () => ({
	user: {},
	userdata: {}
})

export const mutations ={

	SAVE_USER_LOGIN(state, user, login=true){
		if(login){
			state.user = localStorage.setItem('user', user)
		}
	},

	GET_USER_LOGIN(state, name){
		state.userdata = JSON.parse(localStorage.getItem(name))
	}
}

export const actions = {
	storeUserLogin({commit}, user){
		commit('SAVE_USER_LOGIN', user)
	},

	storeGetUserLogin({commit}, name){
		commit('GET_USER_LOGIN', name)
	}
}

export const getters = {
	SaveUserLogin(state){
		return state.user
	},
	GetUserLogin(state){
		return state.userdata
	}
}