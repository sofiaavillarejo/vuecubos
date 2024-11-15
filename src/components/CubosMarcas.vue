<template>
  <div>
    <h1>Cubos de la marca <span style="color: red;">{{ this.$route.params.marca }}</span></h1>
    <hr>
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
  name: "CubosMarcas",
  data(){
    return {
      cubos: [],
      marca: this.$route.params.marca
    }
  },
  mounted(){
    this.loadCubosMarca(this.marca);
  },
  methods: {
    loadCubosMarca(){
      service.getCubosMarca(this.marca).then(result => {
      this.cubos = result.data;
    })
    }
  },
  watch: {
    '$route.params.marca'(nextVal, oldVal){
      if(nextVal != oldVal){
        this.marca = nextVal;
        this.loadCubosMarca(this.marca);
      }
    }
  }
}
</script>

<style>

</style>