import { Observable } from 'rxjs/Observable';
import { Drill } from './../shared/model/drill';
import { Injectable } from '@angular/core';

@Injectable()
export class DrillsService {
  constructor() {}

  loadDrills(): Observable<Drill[]> {
    return undefined;
  }
  createDrill(drill: Drill): Observable<Drill> {
    return undefined;
  }
  deleteDrill(drill: Drill): Observable<any> {
    return undefined;
  }
  openDrill(drillId: string): Observable<Drill> {
    return undefined;
  }
}
