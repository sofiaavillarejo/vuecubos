<template>
  <h1>Tus compras</h1>
  <hr>
  <div v-if="compras">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Núm. Pedido</th>
          <th>ID Cubo</th>
          <th>Fecha</th>
        </tr>
      </thead>
        <tbody v-for="compra in compras" :key="compra">
          <tr>
            <td>{{ compra.idPedido }}</td>
            <td>{{ compra.idCubo }}</td>
            <td>{{ compra.fechaPedido }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <router-link class="btn btn-primary w-50 mt-4" to="/perfil">Volver al perfil</router-link>
        <router-link class="btn btn-primary w-50 mt-4" to="/comprar">Realizar pedido</router-link>
      </div>
  </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();
export default {
  name: "ComprasComponent",
  data(){
    return {
      compras: []
    }
  },
  mounted(){
    service.getCompras().then(result=> {
      console.log(result);
      this.compras = result;
    })
  }
}
</script>

<style>

</style>