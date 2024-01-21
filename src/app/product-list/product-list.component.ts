import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    name: 'iPhone 14',
    price: 990,
    color: 'Red',
    discount: 10,
    inStock: 5,
    image: '../../assets/images/iphone14.jpg',
  };

  hidden = this.product.inStock <= 0 ? true : false;
  disable = this.product.inStock <= 0 ? true : false;

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) this.addToCart++;
  }
  decrementCartValue() {
    if (this.addToCart > 0) this.addToCart--;
  }

  // name = 'Sample Name';

  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }
}
