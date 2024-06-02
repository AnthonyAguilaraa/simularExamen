import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor() { 
    console.log("servico listo para usar");
  }

  private vehiculos: any [] = [
    {
      placa: "ABC123",
      marca: "MAZDA",
      matenimiento: "aceite motor",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "ABC456",
      marca: "KIA",
      matenimiento: "cambio llantas",
      anio: 2022,
      color:"negro"
    },
    {
      placa: "OAA123",
      marca: "CHEVROLET",
      matenimiento: "aceite caja de transmision",
      anio: 2015,
      color:"blanco"
    },
    {
      placa: "PAC778",
      marca: "MAZDA",
      matenimiento: "cambio de llantas",
      anio: 2021,
      color:"azul"
    },
    {
      placa: "TBG111",
      marca: "TOYOTA",
      matenimiento: "lavada",
      anio: 2023,
      color:"negro"
    },
    {
      placa: "OBC123",
      marca: "RENAULT",
      matenimiento: "abc de frenos",
      anio: 2010,
      color:"rojo"
    },
    {
      placa: "PBC555",
      marca: "MAZDA",
      matenimiento: "reparación motor",
      anio: 2010,
      color:"blaco"
    }
  ];


  getVehiculos(){
    return this.vehiculos;
  }

  getVehiculo(idx:number){
    return this.vehiculos[idx];
  }

  filtrarVehiculosPorMarca(termino: string): any[] {
    return this.vehiculos.filter(vehi => vehi.marca.toLowerCase().includes(termino.toLowerCase()));
  }
  filtrarVehiculosPorMantenimiento(termino: string): any[] {
    return this.vehiculos.filter(vehi => vehi.matenimiento.toLowerCase().includes(termino.toLowerCase()));
  }

}

export interface Vehiculos{
  placa: string;
  marca: string;
  matenimiento: string
  anio: string;
  color: string;
}