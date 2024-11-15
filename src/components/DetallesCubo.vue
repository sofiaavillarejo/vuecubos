<template>
  <div>
    <h1>Detalles cubo {{ this.$route.params.id }}</h1>
    <div v-if="cubo">
      <div  class="card" style="width: 18rem;">
        <img class="card-img-top" :src="cubo.imagen" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{cubo.nombre}}</h5>
          <p class="card-text">Precio: {{cubo.precio}} €</p>
          <p class="card-text">Valoración: {{cubo.valoracion}}</p>
        </div>
      </div>
    </div>
    <router-link class="btn btn-warning w-100 mt-4" to="/">Volver</router-link>
    <div class="mt-3" style="text-align: left;">
      <h1>Comentarios</h1>
      <hr style="color: red;"/>
      <table class="table table-hover">
        <tbody v-for="comentario in comentarios" :key="comentario">
          <tr>
            <td>Usuario {{ comentario.idUsuario }}</td>
            <td v-if="comentario.comentario">{{ comentario.comentario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
  name: "DetallesCubo",
  data(){
    return {
      cubo: null,
      comentarios: []
    }
  },
  mounted(){
    let id = this.$route.params.id;
    console.log(id)
    service.findCubo(id).then(result => {
      // console.log(result.data);
      this.cubo = result.data;
    })

    service.getComentarios(id).then(result => {
      console.table(result.data);
      this.comentarios = result.data;
    })
  }
}
</script>

<style>

</style>