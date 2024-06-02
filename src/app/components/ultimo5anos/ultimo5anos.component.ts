import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculos, VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-ultimo5anos',
  templateUrl: './ultimo5anos.component.html',
  styleUrl: './ultimo5anos.component.css'
})
export class Ultimo5anosComponent {

   
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
