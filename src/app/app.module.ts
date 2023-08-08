import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientesActualesComponent } from './components/clientes-actuales/clientes-actuales.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { SearchPipe } from './search.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    MostrarProductoComponent,
    CartComponent,
    ClientesActualesComponent,
    LoginScreenComponent,
    EditarEmpleadoComponent,
    MantenimientoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
