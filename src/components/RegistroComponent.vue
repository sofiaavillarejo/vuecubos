<template>
  <div>
    <h1>Registrar usuario</h1>
    <hr>
    <form class="form" v-on:submit.prevent="registrar()">
      <label class="form-label">Nombre</label>
      <input class="form-control" type="text" v-model="usuario.nombre"/>
      <label class="form-label">Email</label>
      <input class="form-control" type="text" v-model="usuario.email"/>
      <label class="form-label">Contraseña</label>
      <input class="form-control" type="text" v-model="usuario.pass"/>
      <button class="btn btn-primary w-100">Registrarse</button>
    </form>
  </div>
</template>

<script>
import ServiceRegistro from '@/services/ServiceRegistro';
const service = new ServiceRegistro();
export default {
  name: "RegistroComponent",
  data() {
    return {
      usuario: {
        idUsuario: 0,
        nombre: "",
        email: "",
        pass: ""
      }
    }
  },
  methods: {
    registrar(){
      service.registro(this.usuario).then(result=> {
        console.log("usuario registrado" + result);
        // this.$router.push("/login");

      })
    }
  }
}
</script>

<style>

</style>