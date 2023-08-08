import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  formext:FormGroup;
  formFa: FormGroup;
  UserId: any;
  public admin: boolean = false;
  
  mnto:any;
  devices = [
    {name: 'Extintores'},
    {name: 'Botiquines'},
    /*{name: 'Jardinería'},
    {name: 'Paneles solares'},
    {name: 'Equipo de seguridad Física'},*/
  ];
  numeroExtin = [
    {num: 1},
    {num: 2},
    /*{name: 'Jardinería'},
    {name: 'Paneles solares'},
    {name: 'Equipo de seguridad Física'},*/
  ];
  ubicacionE=[
    {ubicE:'Soporte y ventas'},
    {ubicE:'Diseño'},
    {ubicE:'Programacion'},
    {ubicE:'Sala de juntas'},
    {ubicE:'Cuarto de máquinas'}];

  ubicacionFA=[
    {ubicE:'Recepcion'},
    {ubicE:'Electronica 1'},
    {ubicE:'Electronica 2'},
    {ubicE:'Mecanica'},
    {ubicE:'Comedor'}];
    
  AgenQ=[
    {agente:'CO2'},
    {agente:'PQS'}];
  capacidad=[
    {size:'2.5Kg'},
    {size:'4.5'},
    {size:'6Kg'},
    {size:'9Kg'}];
 form = new FormGroup({state: new FormControl(this.devices[1])});
 ubicaciones = new FormGroup({ubi: new FormControl(this.ubicacionE[3])});

  constructor(
    public formularioEx: FormBuilder,
    public formFAK:FormBuilder,
    private crudservice: CrudService,
    private activatedRoute: ActivatedRoute

  ){
    this.admin = false;
    this.UserId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.UserId);
    this.mnt ="Extintores";
    this.formext = this.formularioEx.group({
      fecha:[''],
      ubicacion:[''],
      agente:[''],
      capacidad:[''],
      recarga:[''],
      manometro:[false],
      pasador:[false],
      manguera:[false],
      boquilla:[false],
      manija:[false],
      cilindro:[false],
      pintura:[false],
      senial:[false],
      acceso:[false],
      visibilidad:[false],
      observaciones:[''],
      creacion:[''],
      numero:[''],
      Id:[this.UserId]
    });
    this.formFa = this.formFAK.group({
      id:[this.UserId],
      fecha:[''],
      Ubicacion:[''],
      gauze5:[''],
      compress10:[''],
      band:[''],
      dressing:[''],
      micropore:[''],
      adhesiveB:[''],
      water:[''],
      soap:[''],
      scissors:[''],
      gloves:[''],
      thermometer:[''],
      splint:[''],
      Fsplint:[''],
      o2:[''],
      Rcollar:[''],
      Scollar:[''],
      ambu:[''],
      pani:['']
    });
  }

  ngOnInit(): void {  
    if(this.UserId == 7){
      this.admin = true;
    }else{
      this.admin = false;
    }
  }
  mnt: any ;
  ChangeMant(e:any){
    // by angular console.log(this.form.value);
    console.log(e.target.value);
    this.mnt = e.target.value;
    console.log(this.mnt);
  }

  ExtReport():any{
    console.log(this.formext.value)
    this.crudservice.bitacoraExtintores(this.formext.value).subscribe(response=>{
      console.log(response);
    });
  }
  reportFA(){
    this.crudservice.bitacoraPrimerosAuxilios(this.formFa.value).subscribe(response=>{
      console.log(response);
    },err=>{
      console.log(err);
    });
  }
  adminC(){
    this.admin = true;
    console.log(this.admin);
  }


}
