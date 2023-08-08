import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CartComponent } from './components/cart/cart.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { ClientesActualesComponent } from './components/clientes-actuales/clientes-actuales.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'login-screen'},
  {path: 'add-client',component:AddClientComponent},
  {path: 'mostrar-producto',component:MostrarProductoComponent},
  {path: 'cart/:id',component:CartComponent},
  {path: 'clientes-actuales',component:ClientesActualesComponent},
  {path: 'login-screen',component:LoginScreenComponent},
  {path: 'editar-empleado/:id',component:EditarEmpleadoComponent},
  {path: 'mantenimiento/:id',component: MantenimientoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
