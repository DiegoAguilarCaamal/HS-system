import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
    formularioClientes: FormGroup;
    name ='';
    nombre:string='';
    password: string ='';
    confirmPassword: string ='';
  constructor(
      public formulario:FormBuilder,
      private crudService: CrudService,
      private router: Router
    ) {
      this.name = 'diego';
      this.formularioClientes = this.formulario.group({
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
        password:[''],
        confirmPassword:['']
        //Imagen: ['']
      });
    }

  ngOnInit():void {
    console.log(this.name);
  }

  enviardatos():any{
   
    if(this.password == this.confirmPassword){
      console.log(this.formularioClientes.value);
      this.crudService.addClient(this.formularioClientes.value).subscribe(response=>{
        console.log(response);
         this.router.navigateByUrl('/clientes-actuales');
      });
    }
    else{
        alert("Las las contraseñas no coinciden");
    }
  }
  
  irAlogin(){
    console.log("redirigiendo a loginscreen");
    this.router.navigateByUrl('/login-screen');
  }

}
