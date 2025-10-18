<template>
  <!--  <div class="md-body">-->
  <!--    <h1>В этом приложении:</h1>-->
  <!--    <ul>-->
  <!--      <li>Полная настройка шаблона на Vue CLI</li>-->
  <!--      <li>Установка и настройка Vue-router для Vue.js 3</li>-->
  <!--      <li>Динамическая перерисовка без перезагрузки страницы</li>-->
  <!--      <li>Динамичный навбар и ссылки</li>-->
  <!--      <li>Обработка несуществующих роутов</li>-->
  <!--      <li>Хеши и моды для роутера</li>-->
  <!--      <li>Настройка общего конфига</li>-->
  <!--    </ul>-->
  <!--    <p>-->
  <!--      Сделано на курсе-->
  <!--      <a href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/"-->
  <!--        >Cделано на курсе "Vue.js 3 c нуля до результата"</a-->
  <!--      >-->
  <!--    </p>-->
  <!--  </div>-->

  <h1>Все пользователи</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Обычный юзер' }}</p>
    </li>
  </ul>
  <p>{{ getUsersLength }}</p>
</template>
<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getAllUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    }
  }
}
</script>
