import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = 'https://dummyjson.com/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.baseUrl).pipe(
      map(response => response.products.map(p => ({
        ...p,
        image: p.thumbnail || ''
      })))
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map(p => ({
        ...p,
        image: p.thumbnail || ''
      }))
    );
  }
}

