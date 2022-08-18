export const strict = false;
export const state = () => ({
	token: {},
	usertoken: {}
})

export const mutations ={

	SAVE_TOKEN_LOGIN(state, token, login=true){
		if(login){
			state.token = localStorage.setItem('token', token)
		}
	},

	GET_TOKEN_LOGIN(state, name){
		state.usertoken = localStorage.getItem(name)
	}
}

export const actions = {
	storeTokenLogin({commit}, token){
		commit('SAVE_TOKEN_LOGIN', token)
	},

	checkTokenLogin({commit}, name){
		commit('GET_TOKEN_LOGIN', name)
	}
}

export const getters = {
	SaveTokenLogin(state){
		return state.token
	},
	GetCheckTokenLogin(state){
		return state.usertoken
	}
}