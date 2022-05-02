<template>
  <div class="signin">
    <h1>{{ msg }}</h1>
      <form class="">
        <h4>Регистрация</h4>
        <input
          v-bind:value="login"
          @input="inputLogin"
          class="input"
          type="text"
          placeholder="Логин"
         >
        <input
         v-bind:value="password"
         @input="inputPassword"
         class="input"
         type="text"
         placeholder="Пароль"
         >
        <button class="button" @click="signIn">Войти</button>
      </form>
    </div>

</template>

<script>
export default {
  name: 'SignIn',
  props: {
    msg: String
  },
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    inputLogin(event) {
      this.login = event.target.value;
    },
    inputPassword(event) {
      this.password = event.target.value;
    },

    signIn() {
        this.$router.push({ name: 'Admin'})
      // проверить поля на соответствие зарегестрированым данным и в случае совпадения переправить на 
      // страницу с соответсвующим уровнем доступа

    //   if (this.login == '111' && this.password == '111') {
    //     this.$router.replace({ name: 'mainview'})
    //   } else {
    //     console.log('Error!')
    //   }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
