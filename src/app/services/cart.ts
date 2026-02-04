import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
}
