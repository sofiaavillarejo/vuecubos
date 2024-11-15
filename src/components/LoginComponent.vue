<template>
  <div>
    <h1>Iniciar sesión</h1>
    <hr>
    <form class="form" v-on:submit.prevent="login()">
      <label class="form-label">Email</label>
      <input class="form-control" type="text" v-model="usuario.email"/>
      <label class="form-label">Contraseña</label>
      <input class="form-control" type="text" v-model="usuario.password"/>
      <button class="btn btn-primary w-100">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();
export default {
  name: "LoginComponent",
  data(){
    return {
      usuario: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      console.log(this.usuario.userName, this.usuario.password);

      service.login(this.usuario).then(result => {
        console.log(result.data.response);
        const token = result.data.response;
        localStorage.setItem('token', token);
        // this.$root.checkSession();
        this.$router.push("/perfil");

      })
    }
  }
}
</script>

<style>

</style>