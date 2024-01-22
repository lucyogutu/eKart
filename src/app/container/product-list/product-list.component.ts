import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  listOfCars: string[] = [
    'Mark',
    'Volvo',
    'BMW',
    'Mercedes',
    'Suzuki',
    'Toyota',
    'Nissan',
  ];

  products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut assumenda
      expedita molestiae ad! Reprehenderit sunt exercitationem sint quis provident
      aperiam officiis voluptatem, vitae a possimus minus unde facilis,
      consequuntur dignissimos labore illum cum esse, accusamus molestiae natus
      ipsam recusandae. Numquam tempora earum cumque maiores, incidunt eaque non
      fugit ut.`,
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      url: 'https://static.nike.com/a/images/c_limit,w592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Nike React Miler',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut assumenda
      expedita molestiae ad! Reprehenderit sunt exercitationem sint quis provident
      aperiam officiis voluptatem, vitae a possimus minus unde facilis,
      consequuntur dignissimos labore illum cum esse, accusamus molestiae natus
      ipsam recusandae. Numquam tempora earum cumque maiores, incidunt eaque non
      fugit ut.`,
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      is_in_inventory: false,
      url: 'https://static.nike.com/a/images/c_limit,w592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'Nike React Infinity Run Flyknit',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut assumenda
      expedita molestiae ad! Reprehenderit sunt exercitationem sint quis provident
      aperiam officiis voluptatem, vitae a possimus minus unde facilis,
      consequuntur dignissimos labore illum cum esse, accusamus molestiae natus
      ipsam recusandae. Numquam tempora earum cumque maiores, incidunt eaque non
      fugit ut.`,
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      is_in_inventory: true,
      url: 'https://static.nike.com/a/images/c_limit,w592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 4,
      name: 'Nike React Miler',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut assumenda
      expedita molestiae ad! Reprehenderit sunt exercitationem sint quis provident
      aperiam officiis voluptatem, vitae a possimus minus unde facilis,
      consequuntur dignissimos labore illum cum esse, accusamus molestiae natus
      ipsam recusandae. Numquam tempora earum cumque maiores, incidunt eaque non
      fugit ut.`,
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      is_in_inventory: false,
      url: 'https://static.nike.com/a/images/c_limit,w592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-miler',
    },
    {
      id: 5,
      name: 'Nike React Miler',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aut assumenda
      expedita molestiae ad! Reprehenderit sunt exercitationem sint quis provident
      aperiam officiis voluptatem, vitae a possimus minus unde facilis,
      consequuntur dignissimos labore illum cum esse, accusamus molestiae natus
      ipsam recusandae. Numquam tempora earum cumque maiores, incidunt eaque non
      fugit ut.`,
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      url: 'https://static.nike.com/a/images/c_limit,w592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
      slug: 'nike-react-miler',
    },
  ];

  totalProducts = this.products.length;

  totalProductsInStock = this.products.filter(
    (product) => product.is_in_inventory === true
  ).length;

  totalProductsOutOfStock = this.products.filter(
    (product) => product.is_in_inventory === false
  ).length;
}
