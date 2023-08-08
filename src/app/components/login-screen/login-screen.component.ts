import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  loginForm: FormGroup;
  user:any;
  Userid:any;
  constructor(
    private loginService: CrudService,
    private formB: FormBuilder,
    private router: Router,
  ){
    this.loginForm = this.formB.group({
      email:[''],
      password:['']
    });

  }
  Userlogin(){
    console.log(this.loginForm.value);
    this.loginService.loginEmpleado(this.loginForm.value).subscribe(response=>{
      this.Userid = response;
      console.log(this.Userid[0]['RecordNumber']);
      this.router.navigateByUrl('/mantenimiento/'+this.Userid[0]['RecordNumber']);
      console.log(response);

  },err=>{
    alert("No se encontro un usuario con el nombre o contraseña ingresado");
    console.log(err);
  });
  }
}
