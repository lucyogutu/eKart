import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackground } from '../../custom_directives/set_background.directive';
import { AppHoverDirective } from '../../custom_directives/app-hover.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, SetBackground, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() productListComponent: ProductListComponent = undefined;
  product: Product;

  ngOnInit() {
    this.product = this.productListComponent.selectedProduct;
  }
}
