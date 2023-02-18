import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  static contador = 0;
  empleadoActual;
  private nombre;
  private nombreNuevo;

  constructor() {
    this.nombre = "Buenas Noches";
    this.nombreNuevo = ""
    EmpleadoComponent.contador++;
    this.empleadoActual = EmpleadoComponent.contador;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre:string){
    this.nombre = nombre;
  }

  getNombreNuevo() {
    return this.nombreNuevo;
  }
}
