import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { HighlightDirective } from '../../../custom_directives/highlight.directive';
import { DisableProductDirective } from '../../../custom_directives/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HighlightDirective, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product!: Product;
}
