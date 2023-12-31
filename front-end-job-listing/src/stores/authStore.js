import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth',{

  state: () => ({
    token: localStorage.getItem('jwt') || null,
    user: localStorage.getItem('user') && localStorage.getItem('user') !== 'undefined' ? json.parse(localStorage.getItem('user')) : null,
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    loggedUser(state) {
      return state.user;
    },
  },
  actions: {
    logIn(payload) {
      // Save the JWT token and user data in local storage
      // and update the state
      localStorage.setItem('jwt', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));
      this.$state = { token: payload.token, user: payload.user };
      
    },
    logOut() {
      // Remove the JWT token and user data from local storage
      // and reset the state
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$state = { token: null, user: null };
    },
  
  },
});
