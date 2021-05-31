import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients } from './ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private ingredientUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /* GET ingredient from the server */
  getIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.ingredientUrl + '/ingredients')
  }

  /** Show ingredients for meal */
  getIngredient(id: number): Observable<any> {
    const url =`${this.ingredientUrl}/mealController/${id}`;
    return this.http.get<Ingredients>(url);
  }
}
