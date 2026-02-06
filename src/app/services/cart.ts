import { Injectable } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  get totalCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  addToCart(product: Product) {
    const existing = this.items.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  increment(productId: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity++;
    }
  }

  decrement(productId: number) {
    const item = this.items.find(i => i.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  remove(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }
}

