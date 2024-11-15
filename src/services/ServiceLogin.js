import Global from "@/Global";
import axios from "axios";

export default class ServiceRegistro {
  login(usuario){
    return new Promise(function(resolve) {
      const token = localStorage.getItem('token');
      let request = "api/manage/login";
      const headers = {'Authorization' : `Bearer ${token}`}
      let url = Global.urlApi + request;
      axios.post(url, usuario, {headers}).then(response => {
        resolve(response);
      })
    })
  }

  getPerfil(){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');

      let request = "api/manage/perfilusuario";
      let url = Global.urlApi + request;
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get(url, {headers}).then(response => {
        resolve(response.data);
      })
    })
  }

  getCompras(){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');

      let request = "api/compra/comprasusuario";
      let url = Global.urlApi + request;
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get(url, {headers}).then(response => {
        resolve(response.data);
      })
    })
  }
}