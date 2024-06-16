import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component'; // Ajusta la ruta según corresponda

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     ProductoListaComponent
    ], // Agrega ProductoListaComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario-app';
}
