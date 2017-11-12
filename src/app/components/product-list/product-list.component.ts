import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service';
import { Meta, MetaDefinition } from '@angular/platform-browser';

import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent  {
  productService:ProductService;
  products:Observable<Product[]>;

  constructor(productService:ProductService, private metaService: Meta) {
    this.productService = productService;
    this.products = this.productService.getAllPorducts();
    const name: MetaDefinition[] = [{
      name: 'application-name',
      content: 'application-content'
    }];
    metaService.addTags(name);
   }
}


