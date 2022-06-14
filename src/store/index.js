import { createStore } from 'vuex'

export default createStore({
  state: {
    loginStatus: 0
  },
  getters: {
  },
  mutations: {
    mutationsLoginStatus(state, payload) {
      console.log('mutationsLoginStatus run!');
      this.state.loginStatus = payload
      console.log("muloginStatus",this.state.loginStatus)

    },
  },
  actions: {
    getLoginStatus(context) {
      return this.axios.get('/loginStatus')
        .then((response) => {
          console.log(response.data.loginStatus)
          var payload = response.data.loginStatus

          return context.commit('mutationsLoginStatus',payload)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
