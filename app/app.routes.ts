import { Routes } from '@angular/router';
import { Estructuras } from './estructuras/estructuras';
import { Calculadora } from './calculadora/calculadora';
import { Home } from './home/home';
import { Cliente } from './Data/cliente';
import { Clienteform } from './clienteform/clienteform';

export const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch: 'full'},
  {path:'home',component:Home},
  {path:'estructuras', component:Estructuras},
  {path:'calculadora',component:Calculadora},
  //Muestra el formulario de clientes para crear uno nuevo
  {path:'cliente',component:Clienteform},
  //Muestra el formulario de clientes para actualizar un cliente existente
  {path:'cliente/:id',component:Clienteform},
  //Muestra la tabla de clientes
  {path:'clientes', component:Cliente},
  {path:'**',redirectTo: '/home'}
];
