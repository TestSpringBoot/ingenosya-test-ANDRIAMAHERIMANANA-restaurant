import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';
import { Produit } from './produit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080';  // Base URL to REST API
  
  constructor(private http: HttpClient) { }
  
  /** GET products from the server */
  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.productUrl + '/product');
  }
  
  /** GET product by id. Will 404 if id not found */
  getProduct(id: string): Observable<any> {
    const url = `${this.productUrl}/product/${id}`;
    return this.http.get<Product>(url);
  }
  
  /** POST: add a new product to the server */
  addProduct(product: Produit) {
	//console.log(product);
    return this.http.post(this.productUrl + '/product', product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }

   /** POST: mis à jour de la produit */
   addProduit(produit: Produit) {
    //console.log(product);
      return this.http.post(this.productUrl + '/product', produit, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    }
  
  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productUrl + '/product/' + product.id, product, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
  }
  
  /** DELETE: delete the product from the server */
  deleteProduct(product: Product) {
	  if (confirm("Are you sure to delete?")) {
		console.log(product);
		
		const options = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json',
		  }),
		  body: product,
		  responseType: 'text' as 'json'
		};
		
		return this.http.delete(this.productUrl + '/product/' + product.id, options);
	  }
	  
	  return of({});
  }
  
}
