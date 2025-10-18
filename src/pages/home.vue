<template>
  <br>
  <br>
  <div v-if="isUserLogged">
    User is logged
    {{ user }}}
  </div>
  <div v-else>
    <button class="btn btnPrimary" @click="handleLoginClick">Login</button>
  </div>
  <h1>Только обычные пользователи</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Обычный юзер' }}</p>
    </li>
  </ul>

  <br>
  <br>
  <input v-model="userId" type="number"/>
  <p>{{ getUser }} </p>
  <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId) || 'user not found';
    },
    getUsers() {
      return this.$store.getters.getAllUsers;
    },

    getUsersLength() {
      return this.$store.getters.getUsersLength;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
