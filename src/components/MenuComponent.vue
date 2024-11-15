<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <img to src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png" style="width: 60px;" alt="">
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Cubos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/login">Iniciar Sesión</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Marcas</a>
              <ul class="dropdown-menu" >
                <li v-for="marca in marcas" :key="marca" class="bg-dark"><router-link class="nav-link" :to="'/cubosmarca/' + marca">{{marca}}</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Usuario</a>
              <ul class="dropdown-menu" >
                <li class="bg-dark">
                  <router-link class="nav-link active" to="/perfil">Perfil</router-link>
                  <router-link class="nav-link active" to="/compras">Compras</router-link>
                  <router-link class="nav-link active" to="/comprar">Realizar Pedido</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
    }
  },
  mounted(){
    service.getMarcas().then(result => {
      this.marcas = result.data
    })
  }
}
</script>

<style>

</style>