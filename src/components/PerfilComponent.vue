<template>
  <div>
    <h1>Mi perfil (User {{ perfil.idUsuario }})</h1>
    <hr>
    <div v-if="perfil">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>User {{ perfil.idUsuario }}</td>
              <td>{{ perfil.email }}</td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-primary w-100 mt-4" to="/compras">MostrarCompras</router-link>

    </div>
  </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();
export default {
  name: "PerfilComponent",
  data() {
    return {
      perfil: ""
    }
  },
  mounted() {
    service.getPerfil().then(result => {
      console.log(result);
      this.perfil = result;
    })
  }
}
</script>

<style>

</style>