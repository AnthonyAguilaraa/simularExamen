import { Component } from '@angular/core';
import { Vehiculos, VehiculosService } from '../../services/vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antiguos',
  templateUrl: './antiguos.component.html',
  styleUrl: './antiguos.component.css'
})
export class AntiguosComponent {

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
