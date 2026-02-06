import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product!: Product;
  productService = inject(ProductService);
  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      this.cdr.detectChanges();
    });
  }

  addToCart() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.addToCart(this.product);
  }
}
