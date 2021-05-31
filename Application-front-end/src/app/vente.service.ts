import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vente } from './vente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class VenteService {

  private venteUrl = 'http://localhost:8080/vente'

  constructor(private http: HttpClient) { }

  addVente(vente : Vente) {
    return this.http.post(this.venteUrl, vente, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }
}
