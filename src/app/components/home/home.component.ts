import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';
import { SearchServiceServiceService } from '../../services/search-service.service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public vehiculos: any[] = [];
  private subscription = new Subscription();


  constructor(private vehiculoService: VehiculosService, private serviciobusqueda: SearchServiceServiceService) { }

  ngOnInit(): void {
    this.subscription = this.serviciobusqueda.resultadosBusqueda$.subscribe(resultados => {
      this.vehiculos = resultados;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
