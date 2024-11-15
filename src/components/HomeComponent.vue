<template>
  <div>
    <h1>Home Component</h1>
    <div v-for="cubo in cubos" :key="cubo" style="float: left;">
      <div  class="card" style="width: 18rem;">
        <img class="card-img-top" :src="cubo.imagen" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{cubo.nombre}}</h5>
          <p class="card-text">Precio: {{cubo.precio}} €</p>
          <p class="card-text">Valoración: {{cubo.valoracion}}</p>
          <router-link class="btn btn-primary w-100" :to="'/detalles/' + cubo.idCubo">Detalles</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: []
    }
  },
  mounted(){
    service.getCubos().then(result => {
      console.table(result.data);
      this.cubos = result.data;
    })
  }
}
</script>

<style>

</style>