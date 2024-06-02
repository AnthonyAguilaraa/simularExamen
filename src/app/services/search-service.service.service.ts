import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceServiceService {

  private resultadosBusquedaSubject = new BehaviorSubject<any[]>([]);
  resultadosBusqueda$ = this.resultadosBusquedaSubject.asObservable();

  constructor() { }

  establecerResultadosBusqueda(resultados: any[]) {
    this.resultadosBusquedaSubject.next(resultados);
  }

  obtenerResultadosBusqueda(): any[] {
    return this.resultadosBusquedaSubject.getValue();
  }
}
