import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  titulo: string = 'Calculadora Simple';
  numeroUno: number =5;
  numeroDos: number =2;
  resultado: number =0;

  sumar():void{
    this.resultado= (this.numeroUno + this.numeroDos);
    console.log(this.resultado);
  }

  multiplicar():void{
    this.resultado= (this.numeroUno * this.numeroDos);
    console.log(this.resultado);
  }

  restar():void{
    this.resultado= (this.numeroUno - this.numeroDos);
    console.log(this.resultado);
  }

  dividir():void{
    this.resultado= (this.numeroUno / this.numeroDos);
    console.log(this.resultado);
  }
}
