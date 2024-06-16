import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
  // styleUrls: ['./producto-lista.component.css'],
  providers: [ProductoService]
})
export class ProductoListaComponent implements OnInit {
  public productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.otenerProductosLista().subscribe((data) => {
      this.productos = data;
    });
  }
}
