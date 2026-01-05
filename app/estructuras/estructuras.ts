import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from '../Data/cliente';

@Component({
  selector: 'app-estructuras',
  imports: [],
  templateUrl: './estructuras.html',
  styleUrl: './estructuras.css',
})
export class Estructuras {
titulo: string = 'Estrcutura y Clientes';
cliente: Cliente= new Cliente();


listadeClientes: Cliente[] = [{
  idCliente: 1,
  nombre: 'Jose',
  paterno: 'Enriquez',
  materno:'Zarate',
  email: 'disfuncion@gmail.com'
},

{
  idCliente: 2,
  nombre: 'Ana',
  paterno: 'Urbina',
  materno:'Garcidueñas',
  email: 'ana@gmail.com'
},
];


delete (cliente: Cliente):void{
  Swal.fire({
  title: "Estás seguro?",
  text: "No podrás revertirlo",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sí, elimínalo!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Borrado!",
      text:'El registro ${cliente.idCliente}se eliminó satisfactoriamente.',
      icon: "success"
    });
  }
});
  console.log('eliminado'+cliente.idCliente)
}
}
