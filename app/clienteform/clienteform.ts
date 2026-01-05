import { Component,OnInit } from '@angular/core';
import { Cliente } from '../Data/cliente';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../service/ClienteService';

@Component({
  selector: 'app-clienteform',
  imports: [FormsModule],
  templateUrl: './clienteform.html',
  styleUrl: './clienteform.css',
})
export class Clienteform implements OnInit{
  titulo:string='Cliente Form';
  cliente:Cliente = new Cliente();

  constructor(
    private ClienteService: ClienteService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){

  }

ngOnInit() {
  this.mostrarCliente();
}

mostrarCliente():void{
  this.activateRoute.params.subscribe(
    (params)=> {
      let id = params['id'];
      if(id){
        this.ClienteService.leerCliente(id)
        .subscribe((elCliente)=> (this.cliente = elCliente)
        )
      }
    }
  )
}

create():void{
  this.ClienteService.crearCliente(this.cliente)
  .subscribe(
    (elCliente) => {
      this.router.navigate(['/clientes']);
      Swal.fire('Nuevo Cliente',`Cliente ${this.cliente.nombre} se creó satisfactoriamente `, 'success');
    }
  )
}
}

