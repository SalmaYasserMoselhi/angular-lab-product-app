import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCard, AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  productService = inject(ProductService);
  products$: Observable<Product[]> = of([]);

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
