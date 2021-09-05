import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = "https://run.mocky.io/v3";

  constructor(private httpClient: HttpClient) { }

  public getWeather() {
    return this.httpClient.get<any>(this.apiUrl + '/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576');
  }

  public getDesignations() {
    return this.httpClient.get<any>(this.apiUrl + '/3e6901dd-9a60-4771-a8cb-9c62177a654c');
  }

}