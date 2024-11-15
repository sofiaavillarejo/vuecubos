import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesCubo from "./components/DetallesCubo.vue";
import CubosMarcas from "./components/CubosMarcas.vue";
import RegistroComponent from "./components/RegistroComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import ComprarComponent from "./components/ComprarComponent.vue";

const myRoutes = [
  {path:"/", component: HomeComponent},
  {path:"/detalles/:id", component: DetallesCubo},
  {path:"/cubosmarca/:marca", component: CubosMarcas},
  {path:"/registro", component: RegistroComponent},
  {path:"/login", component: LoginComponent},
  {path:"/perfil", component: PerfilComponent},
  {path:"/compras", component: ComprasComponent},
  {path:"/comprar", component: ComprarComponent},

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;