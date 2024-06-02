import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';
import { SearchServiceServiceService } from '../../services/search-service.service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  public terminodebusqueda:string = '';
  user: any;

  constructor(private router:Router, private vehiculoService: VehiculosService, private searchService: SearchServiceServiceService, public auth: AuthService){
  }


  BuscarVehiculoMarca(terminodebusqueda: string): void{
    const vehiculosfiltrado = this.vehiculoService.filtrarVehiculosPorMarca(terminodebusqueda);
    this.searchService.establecerResultadosBusqueda(vehiculosfiltrado);
    console.log('encontrado/s', vehiculosfiltrado);
    this.router.navigate(['/home']);
  }

  BuscarVehiculoMantenimiento(terminodebusqueda: string): void{
    const vehiculosfiltrado = this.vehiculoService.filtrarVehiculosPorMantenimiento(terminodebusqueda);
    this.searchService.establecerResultadosBusqueda(vehiculosfiltrado);
    console.log('encontrado/s', vehiculosfiltrado);
    this.router.navigate(['/home']);
  }

  

  logout() {
    this.auth.logout();
  }
  abrirformulario(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = this.auth.user;
  }
}
