import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product;
}
