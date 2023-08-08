import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado: any;
  formularioActualizado: FormGroup;
  emID:any;
  userId:any;

  constructor( 
    private crudService:CrudService,
    private formulario: FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router
    ){
      this.emID=this.activeRoute.snapshot.paramMap.get('id');
      console.log(this.emID); 
      this.crudService.ObtenerEmpleado(this.emID).subscribe(respuesta=>{
        console.log(respuesta);
        this.formularioActualizado.setValue({
          nombre:respuesta[0]['Nombre'],
          NSS:respuesta[0]['NSS'],
          LastName:respuesta[0]['Apellidos'],
          bDate:respuesta[0]['Fecha de nacimiento'],
          department:respuesta[0]['Departamento'],
          position:respuesta[0]['Puesto'],
          admissionDate:respuesta[0]['Fecha de Ingreso'],
          bloodType:respuesta[0]['Tipo de sangre'],
          Locker:respuesta[0]['Casillero'],
          cellNumber:respuesta[0]['Telefono'],
          correo: respuesta[0]['Correo'],
        });
      });
      this.formularioActualizado = this.formulario.group({
        NSS:[''],
        nombre: [''],
        LastName:[''],
        bDate:[''],
        department:[''],
        position:[''],
        admissionDate:[''],
        bloodType:[''],
        Locker:[''],
        cellNumber:[''],
        correo: [''],
      })


    }

  ngOnInit(): void {
    

  }
  
  enviardatos():any{
    console.log(this.emID+"metodo enviar datos");
    console.log(this.formularioActualizado.value);
    this.crudService.editarEmpleado(this.emID, this.formularioActualizado.value).subscribe(()=>{
     console.log(this.emID+"nss enviado");
    });
    
  
  }
}
