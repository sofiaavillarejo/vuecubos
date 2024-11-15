import Global from "@/Global";
import axios from "axios";

export default class ServiceRegistro {
  registro(usuario){
    return new Promise(function(resolve){
      let request = "api/Manage/RegistroUsuario";
      let url = Global.urlApi + request;
      axios.post(url, usuario).then(response => {
        resolve(response);
      })
    })
  }
}