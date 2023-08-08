import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModelo } from './cliente';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/mysql/indexTienda.php/';


  constructor(private clientService: HttpClient) { }

  addClient(datosCliente:ClienteModelo):Observable<any>{
    return this.clientService.post(this.API+"?insertar=1", datosCliente);
  }

  
  loginEmpleado(UserLoginData:any){
    return this.clientService.post(this.API+"?login=1",UserLoginData);
  }

  mostrarClientes(){
    return this.clientService.get(this.API);
  }

  
  BorrarCliente(id:any):Observable<any>{
    //devuelve un json de la dirección de client http://localhost/mysql/indexTienda.php
    //exactamente usando ?borrar=1 para esa dirección, lo que hará que usando el comando _GEt 
    //Se ejecute el isset("borrar")
    // y es de esa página de donde se tomará el JSON  para  devover el observable.
   // console.log(nss); 
    return this.clientService.get(this.API+"?borrar="+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    console.log("crudservice");
    return this.clientService.get(this.API+"?consultar="+id);
    
  }

  editarEmpleado(id:any, datosEmpleado:any):Observable<any>{
    console.log(id+"editar empleado nss CRUDSERVICE")
    return this.clientService.post(this.API+"?actualizar="+id, datosEmpleado);
  }

  bitacoraExtintores(bitdata:any): Observable<any>{
    return this.clientService.post(this.API+"?ext=1",bitdata);
  }

  bitacoraPrimerosAuxilios(reporteFA:any){
    return this.clientService.post(this.API+"?fa=1",reporteFA);
  }


}
