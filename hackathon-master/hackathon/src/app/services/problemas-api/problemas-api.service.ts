import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProblemaModel } from './problema-model';

@Injectable({
  providedIn: 'root'
})
export class ProblemasApiService {

  constructor(private httpClient: HttpClient) {}

  public Lista(): Observable<ProblemaModel[]> {
    return this.httpClient.get<ProblemaModel[]>('https://raw.githubusercontent.com/mgabrielaaf/VozDoProblema/master/problemas.json');
  }
}
