import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadohijo-c',
  templateUrl: './empleadohijo-c.component.html',
  styleUrls: ['./empleadohijo-c.component.css']
})
export class EmpleadohijoCComponent implements OnInit{

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  constructor(){}

  ngOnInit(): void {
      
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
