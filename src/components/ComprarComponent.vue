<template>
  <div>
    <h1>Realizar Pedido</h1>
    <hr>
    <form class="form" v-on:submit.prevent="comprar()">
      <label class="form-label" >Elige un cubo</label>
      <select class="form-select" name="selectCubos" v-model="selectedCubo">
        <option value="" disabled selected>Seleccione una opción</option>
        <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">{{ cubo.nombre }}</option>
      </select>
      <button class="btn btn-primary w-100 mt-3">Comprar Cubo</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
  name: "ComprarComponent",
  data() {
    return {
      cubos: [],
      selectedCubo: "",
        
    }
  },
  mounted() {
    service.getCubos().then(result => {
      console.table(result.data);
      this.cubos = result.data;
    })
  },
  methods: {
    comprar(){
      console.log(this.selectedCubo);
      service.comprarCubo(this.selectedCubo).then(result => {
        console.log("Compra hecha", result);
        this.$router.push("/compras");

      })
    }
  }
}
</script>

<style>

</style>