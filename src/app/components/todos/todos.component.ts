import { Component } from '@angular/core';
import { Vehiculos, VehiculosService } from '../../services/vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  vehiculos:Vehiculos[]=[];

  constructor(private _vehiculosService:VehiculosService, private router :Router){
    
  }
  ngOnInit():void{
    this.vehiculos=this._vehiculosService.getVehiculos();
    console.log(this.vehiculos);
  }

  verVehiculo(idx:number){
    this.router.navigate(['/home',idx]);
    console.log(idx);
  }
}
