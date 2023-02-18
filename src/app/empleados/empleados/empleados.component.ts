import { Component } from '@angular/core';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent {
  empleado:EmpleadoComponent = new EmpleadoComponent();
  empleadoNombreNuevo = "Hola";
  empleadoNombre:string = "";
  empleados = [new EmpleadoComponent(), new EmpleadoComponent(), new EmpleadoComponent()];


  ponerNombres(id:number){
    this.empleados.forEach(element => {
      if(id == element.empleadoActual){
        element.setNombre(this.empleadoNombreNuevo)
      }
    });

    return this.empleadoNombre = this.empleado.getNombre();
  }

}
