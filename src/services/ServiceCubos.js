import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {
  getCubos(){
    return new Promise(function(resolve){
      let request = "api/cubos";
      let url = Global.urlApi + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    })
  }

  findCubo(id){
    return new Promise(function(resolve){
      let request = "api/Cubos/" + id;
      let url = Global.urlApi + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    })
  }

  getComentarios(id){
    return new Promise(function(resolve){
      let request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
      let url = Global.urlApi + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    })
  }

  getMarcas(){
    return new Promise(function(resolve){
      let request = "/api/Cubos/Marcas";
      let url = Global.urlApi + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    })
  }

  getCubosMarca(marca) {
    return new Promise(function(resolve){
      let request = "api/Cubos/CubosMarca/" + marca;
      let url = Global.urlApi + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    })
  }

  comprarCubo(id){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');
      let request = "api/compra/insertarpedido/" + id;
      let url = Global.urlApi + request;
      var headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
      axios.post(url, null, {headers}).then(response => {
        resolve(response);
      })
    })
  }
}