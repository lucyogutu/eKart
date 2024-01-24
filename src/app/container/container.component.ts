import { Component, Input } from '@angular/core';
import { SearchComponent } from '../container/search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    SearchComponent,
    CommonModule,
    ProductListComponent,
    ProductDetailComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
