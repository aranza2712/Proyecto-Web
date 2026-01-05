import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Data/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private httpHeaders = new HttpHeaders(
    {
      ContentType:'application/json'
    }
  );
  private endPoint:string ='https://localhost:8080/apiClientes/clientes';
  constructor(private http : HttpClient ) {}
  leerCliente(id:number): Observable<Cliente>
{
  return this.http.get<Cliente>(`${this.endPoint}/${id}`);
}
crearCliente(cliente: Cliente):Observable<Cliente> {
  return this.http.post<Cliente>(
    this.endPoint,
    cliente,
    {headers:this.httpHeaders}
  )
}
}
