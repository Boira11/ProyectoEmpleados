import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }

  empleados: Empleado[] = [

    new Empleado("Angel", "Boira", "Presidente", 7500),
    new Empleado("Maria", "Hernandez", "Directora", 5000),
    new Empleado("Ana", "Galan", "Jefa Seccion", 3000),
    new Empleado("Laura", "Prieto", "Administrativo", 2500),

  ];

  agregarEmpleadoServicio(empleado: Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+ "\n" + 
    empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);

  }

  
}
