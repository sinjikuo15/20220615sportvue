import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    loginStatus: 0
  },
  getters: {
  },
  mutations: {
    mutationsLoginStatus(state, payload) {
      console.log('mutationsLoginStatus run!');
      state.loginStatus = payload
      console.log("muloginStatus",state.loginStatus)

    },
  },
  actions: {
    getLoginStatus(context) {
      axios.get('/loginStatus')
        .then((response) => {
          console.log(response.data.loginStatus)
          var payload = response.data.loginStatus

          context.commit('mutationsLoginStatus',payload)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
