import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8080/inventario-app/productos';

  constructor(private clienteHttp: HttpClient) { }


  otenerProductosLista(): Observable<Producto []>{

    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }
}
