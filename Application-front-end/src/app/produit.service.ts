import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private produitUrl = 'http://localhost:8080/produit';

  constructor(private http: HttpClient) { }

  addProduit(product: Produit) {
    //console.log(product);
      return this.http.post(this.produitUrl, product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

  /** PUT: update produit */
  updateProduit(produit: Produit): Observable<any> {
    return this.http.put(this.produitUrl+"produitController/"+ produit.id, produit,{headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }
}
