import { Component,OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-clientes-actuales',
  templateUrl: './clientes-actuales.component.html',
  styleUrls: ['./clientes-actuales.component.css']
})
export class ClientesActualesComponent implements OnInit{

Empleados:any;

constructor(
  private crudService: CrudService,
  private router:Router,
){}

ngOnInit(): void {
  this.crudService.mostrarClientes().subscribe(response =>{
    console.log(response);
    this.Empleados=response;
  });
}

borrarClientes(id:any,iControl:any): void {
    //console.log(nss);
    //console.log(iControl);

    if(window.confirm("¿Desea eliminar el registro?")){
      this.crudService.BorrarCliente(id).subscribe((response)=>{
        //console.log("hola");
        this.Empleados.splice(iControl,1);
      });
    }
    
  }
  actualizarInfo(nss:any){
    //this.router.navigateByUrl('/editar-empleado/?nss=11');
  }

  searchTxt = '';
} 






