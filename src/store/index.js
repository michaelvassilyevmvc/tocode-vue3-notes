import {createStore} from 'vuex';

export const store = createStore({
  state: {
    user: null,
    users: [
      {id: 1, name: 'evgenii', admin: true},
      {id: 2, name: 'alex', admin: false},
      {id: 3, name: 'garry', admin: false}
    ]
  },
  mutations: {
    setUser(state, user) {
      console.log('called mutation setUser');
      console.log(user);
      state.user = user;
    }
  },
  actions: {
    setUser({commit}) {
      const fakeUser = {
        id: 1239214,
        name: 'denis',
        admin: false
      }

      console.log('called action setUser');
      console.log("---");
      commit('setUser', fakeUser);
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    isUserLogged(state) {
      return state.user ? true : false;
    },

    getAllUsers(state) {
      return state.users;
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin);
    },
    getUserById: state => id => state.users.find(user => user.id === id),
    getUsersLength(state, getters) {
      const suffix = 'Кол-во пользователей:';
      return `${suffix} ${getters.getAllUsers.length}`;
    }
  }
})
