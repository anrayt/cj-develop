import { Component, ViewEncapsulation, Output } from '@angular/core';
import { ProductService } from './product.service';

import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent {
  productService: ProductService;
  products: Observable<Product[]>;
  productsReal: Product[];

  @Output()
  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = this.productService.getAllPorducts();
    this.products.subscribe((productsReal) => {
      this.productsReal = productsReal;
    });
  }
}


