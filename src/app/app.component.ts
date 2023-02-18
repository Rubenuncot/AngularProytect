import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hola Buenas Tardes';
  name = 'Rubén Núñez Cotano';
  age = 20;
  email = 'rubencotano@gmail.com';
  salary = [1770, 1800, 1000];
  active = true;
  counter = 0;

  isActive() {
    if (this.active) {
      return 'Trabajador activo';
    } else {
      return 'Trabajador inactivo';
    }
  }

  latestSalarys() {
    let suma = 0;
    for (let x = 0; x < this.salary.length; x++) {
      suma += this.salary[x];
    }
    return suma;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
