import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service';

import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  productService:ProductService;
  products:Observable<Product[]>;

  constructor(productService:ProductService) {
    this.productService = productService;
   }

  ngOnInit() {
    this.products = this.productService.getAllPorducts();
  }

}
