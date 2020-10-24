import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(public http:HttpClient) { }

  getFichier() {
    return this.http.get<any[]>('../../assets/data/data.json');
  }

}
