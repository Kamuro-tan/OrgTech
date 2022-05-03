<template>
  <div>
    <form id="signin" @submit.prevent>
      <img alt="OrgTech logo" src="../assets/logo_256.png">
      <h3>Вход</h3>
      <input
        :value="user.login"
        @input="inputLogin"
        class="input"
        type="text"
        placeholder="Логин"
        >
      <input
        :value="user.password"
        @input="inputPassword"
        class="input"
        type="text"
        placeholder="Пароль"
        >
      <button class="button" @click="signIn" rel="prefetch">Войти</button>
      <!-- <router-link to="/admin">Войти</router-link> -->
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      user: {
        login: '',
        password: '',
      },
      errors: []
    }
  },
  methods: {
    inputLogin: function(event) {
      this.user.login = event.target.value;
    },
    inputPassword: function(event) {
      this.user.password = event.target.value;
    },

    signIn: function() {
      // проверить поля на соответствие зарегестрированым данным и в случае совпадения переправить на 
      // страницу с соответсвующим уровнем доступа
      
      this.$router.push({ name: 'Admin'})
    }
  }

}
</script>

<style scoped>

#signin {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 300px;
  margin: auto;

  color: black;
}

img {
  padding: 15px;
}

h3 {
  font-size: 18px;
}

.input {
  margin-top: 15px;
  padding: 4px 8px;

  border-radius: 5px;
}

.button {
  margin-top: 20px;
  padding: 2px 8px;
}

</style>
