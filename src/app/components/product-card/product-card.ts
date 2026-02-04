import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router);

  addToCart(e: Event) {
    e.stopPropagation();
    e.preventDefault();
    
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }
    
    this.cartService.addToCart(this.product);
  }
}
